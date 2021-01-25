import IResponse, {NotFoundResponse, SuccessResponse} from '../utils/response';
import ElasticsearchService from "./ElasticsearchService";
import RscriptService from "./RscriptService";
import CsvService from "./CsvService";

const json2csv = require('json-2-csv').json2csvAsync;
const axios = require('axios').default;

const EXTRACTIONS_INDEX = 'extractions_survey_'; // pegar do ActivityExtractionService

class PipelineService {

  constructor() {
  }

  async performRscript (surveyId: string, RscriptName: string, controllFields: string[]): Promise<IResponse> {
    try {
      let response = await findSurveyExtractions(surveyId, controllFields);
      response = await applyRscriptToResponse(RscriptName, response);
      if(typeof response == 'string'){
        return new SuccessResponse(await CsvService.createCsvFromString(response));
      }
      return new SuccessResponse(response);
    }
    catch (e) {
      console.log(e)
      return new NotFoundResponse(e);
    }
  }

  async performAsJson (surveyId: string, controllFields: string[]): Promise<IResponse> {
    console.log('\nextract from pipeline of survey id' + surveyId + ' as json');//.TODO
    try {
      return new SuccessResponse(await findSurveyExtractions(surveyId, controllFields));
    }
    catch (e) {
      console.log(e)
      return new NotFoundResponse(e);
    }
  }

  async performAsCsv (surveyId: string, controllFields: string[]): Promise<IResponse> {
    console.log('\nextract from pipeline of survey id' + surveyId + ' as csv');//.TODO
    try {
      let response = await json2csv(await findSurveyExtractions(surveyId, controllFields),
        {delimiter: { field: CsvService.getDelimiter() }});
      return new SuccessResponse(await CsvService.createCsvFromString(response));
    }
    catch (e) {
      return new NotFoundResponse(e);
    }
  }

}

async function findSurveyExtractions(surveyId: string, controllFields: string[]) {
  console.log('surveyId:', surveyId)

  //TODO hard coded
  const size = 10000;
  const scrollTime = "1m";

  const indexName = EXTRACTIONS_INDEX + surveyId;
  console.log('index', indexName)

  let response : any[] = [];
  let body = await firstSearch(indexName, size, scrollTime, controllFields);

  console.log('total:', body.hits.total.value)//TODO remove
  let counter = 0;//TODO remove

  while(body.hits && (body.hits.hits.length)) {
    console.log(`search #${++counter}: ${body.hits.hits.length} docs`)//TODO remove

    // @ts-ignore
    response = response.concat(body.hits.hits.map((hit: {_source: any}) => {
      // console.log(hit._source.activityId, hit._source.variables.length)//, hit._source.variables[227])
      // hit._source.variables = hit._source.variables.slice(0,226);
      return hit._source
    }));
    // @ts-ignore
    body = await searchMore(body._scroll_id, scrollTime);
  }

  console.log('extraction finalized');
  return response;
}

async function firstSearch(indexName: string, size: number, scrollTime: string, controllFields: string[]) : Promise<any>{
  const { body } = await ElasticsearchService.getClient().search({
    index: indexName,
    type: '_doc',
    size: size,
    scroll: scrollTime,
    body: {
      query: {
        "match_all": {}
      },
      _source: true
    }
  });
  return body;
}

async function searchMore(scrollId: string, strollTime: string) : Promise<any>{
  const { body } = await ElasticsearchService.getClient().scroll({
    scroll_id: scrollId,
    scroll: strollTime
  });
  return body;
}

async function applyRscriptToResponse(RscriptName: string,  response: any[]) {
  //TODO hard coded
  const MAX_CONTENT_LENGTH = 200000000;
  const MAX_BODY_LENGTH = 1000000000;
  const PLUMBER_RUNNER_URL = "http://127.0.0.1:8000/runner";

  const rscript = (await RscriptService.get(RscriptName)).body;
  if(!rscript.script){
    throw 'R script ' + RscriptName + ' was not found';
  }

  console.log('Rscript name:', RscriptName)
  console.log('running R script on results ...');//.TODO

  const resp = await axios({
    method: 'post',
    url: PLUMBER_RUNNER_URL,
    data: {
      "script": rscript.script,
      "arg": response
    },
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    maxContentLength: MAX_CONTENT_LENGTH,
    maxBodyLength: MAX_BODY_LENGTH
  }).catch((err: any) => {
    throw err;
  });
  console.log("R script response:", resp.data.length);//.TODO
  return resp.data;
}


export default new PipelineService();
