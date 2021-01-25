import IResponse, {NotFoundResponse, SuccessResponse} from '../utils/response';
import ElasticsearchService from "./ElasticsearchService";
import CsvService from "./CsvService";

const axios = require('axios').default;

const EXTRACTIONS_INDEX = 'extractions_';

class PipelineService {

  constructor() {
  }

  async performAsJson (surveyId: string, Rscript: string): Promise<IResponse> {
    try {
      let result = await findPipelineAndApplyFunction(surveyId, Rscript, "json");
      return new SuccessResponse(result);
    }
    catch (e) {
      console.log(e)
      return new NotFoundResponse(e);
    }
  }

  async performScriptAsCsv (surveyId: string, Rscript: string): Promise<IResponse> {
    try {
      let result = await findPipelineAndApplyFunction(surveyId, Rscript, "csv");
      // return new SuccessResponse(await CsvService.createCsvFromString(result));

      return new SuccessResponse(result);
    }
    catch (e) {
      return new NotFoundResponse(e);
    }
  }

  async performAsCsv (surveyId: string): Promise<IResponse> {
    try {
      let result = await findPipelineAndApplyFunction(surveyId, getDefaultRscriptPath(), "csv");
      // return new SuccessResponse(await CsvService.createCsvFromString(result));
      // console.log(result)
      return new SuccessResponse(result);
    }
    catch (e) {
      return new NotFoundResponse(e);
    }
  }

}

async function findPipelineAndApplyFunction(surveyId: string, RscriptPath: string,  returnType: string) {
  console.log('\nextract from pipeline of survey id' + surveyId + ' as ' + returnType);
  console.log('surveyId:', surveyId)
  console.log('Rscript path:', RscriptPath.replace(process.cwd(), "."))

  //TODO hard coded
  const size = 5;
  const scrollTime = "1m";

  const indexName = EXTRACTIONS_INDEX + surveyId;

  let response : any[] = [];
  let body = await firstSearch(indexName, size, scrollTime);

  console.log('total:', body.hits.total.value)//TODO remove
  let counter = 1;//TODO remove

  while(body.hits && (body.hits.hits.length) && response.length < 10) {
    console.log(`search #${counter++}: ${body.hits.hits.length} docs`)//TODO remove

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
  console.log('running R script on results ...');

  // let result = R(RscriptPath).data(response).callSync();

  console.log('done!');
  console.log('R result:', result);
  return result;
}

async function firstSearch(indexName: string, size: number, scrollTime: string) : Promise<any>{
  const { body } = await ElasticsearchService.getClient().search({
    index: indexName,
    type: '_doc',
    size: size,
    scroll: scrollTime,
    body: {
      query: {
        "match_all": {}
      },
      sort: {
        activityId: "asc"
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


function getDefaultRscriptPath() {
  //TODO
  return "function(x) {return(x)}";
}


export default new PipelineService();
