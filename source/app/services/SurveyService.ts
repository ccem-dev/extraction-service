import IResponse, {NotFoundResponse, SuccessResponse} from '../utils/response';
import ElasticsearchService from "./ElasticsearchService";
import RscriptService from "./RscriptService";
import CsvService from "../utils/CsvService";
import ActivityExtractionService from "./ActivityExtractionService";

const json2csv = require('json-2-csv').json2csvAsync;
const axios = require('axios').default;

class SurveyService {

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
      return new NotFoundResponse(e);
    }
  }

  async performAsJson (surveyId: string, controllFields: string[]): Promise<IResponse> {
    try {
      return new SuccessResponse(await findSurveyExtractions(surveyId, controllFields));
    }
    catch (e) {
      return new NotFoundResponse(e);
    }
  }

  async performAsCsv (surveyId: string, controllFields: string[]): Promise<IResponse> {
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
  const SIZE = 10000;
  const SCROLL_TIME = "1m";

  const indexName = ActivityExtractionService.getIndexName(surveyId);

  let response : any[] = [];
  let body = await firstSearch(indexName, SIZE, SCROLL_TIME, controllFields);

  while(body.hits && (body.hits.hits.length)) {
    // @ts-ignore
    response = response.concat(body.hits.hits.map((hit: {_source: any}) => hit._source));
    // @ts-ignore
    body = await searchMore(body._scroll_id, SCROLL_TIME);
  }

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
  const rscript = (await RscriptService.get(RscriptName)).body.data;
  if(!rscript.script){
    throw 'R script ' + RscriptName + ' was not found';
  }

  const PLUMBER_URL = process.env.PLUMBER_PROTOCOL + "://" + process.env.PLUMBER_HOSTNAME + ":" + process.env.PLUMBER_PORT +
    "/" + process.env.PLUMBER_RUNNER;

  const resp = await axios({
    method: 'post',
    url: PLUMBER_URL,
    data: {
      "script": rscript.script,
      "arg": response
    },
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    maxContentLength: parseInt(process.env.MAX_CONTENT_LENGTH),
    maxBodyLength: parseInt(process.env.MAX_BODY_LENGTH)
  }).catch((err: any) => {
    throw err;
  });
  return resp.data;
}


export default new SurveyService();
