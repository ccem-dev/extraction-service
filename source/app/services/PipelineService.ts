import IResponse, {NotFoundResponse, SuccessResponse} from '../utils/response';
import ElasticsearchService from "./ElasticsearchService";
import CsvService from "./CsvService";

// import R from 'r-integration';

const EXTRACTIONS_INDEX = 'extractions_';

class PipelineService {

  constructor() {
  }

  async performAsJson (surveyId: string, Rscript:string): Promise<IResponse> {
    try {
      let result = await findPipelineAndApplyFunction(surveyId, Rscript, "json");
      return new SuccessResponse(result);
    }
    catch (e) {
      console.log(e)
      return new NotFoundResponse(e);
    }
  }

  async performAsCsv (surveyId: string, Rscript:string): Promise<IResponse> {
    try {
      let result = await findPipelineAndApplyFunction(surveyId, Rscript, "csv");
      // return new SuccessResponse(await CsvService.createCsv(result));
      return new SuccessResponse();
    }
    catch (e) {
      return new NotFoundResponse(e);
    }
  }

}

async function findPipelineAndApplyFunction(surveyId: string, Rscript:string,  returnType: string) {
  console.log('\nextracting from pipeline of survey id' + surveyId + ' as ' + returnType +  ' ...');

  //TODO hard coded
  const size = 10000;
  const scrollTime = "1m";

  const indexName = EXTRACTIONS_INDEX + surveyId;

  headerSetted = false;//TODO remove

  let body = await firstSearch(indexName, size, scrollTime);

  let strResponse = await sendToR(body.hits.hits);
  strResponse = header + strResponse;//TODO remove

  console.log('body 1', body.hits.total.value, body.hits.hits.length)//TODO remove
  let counter = 2;//TODO remove

  while(body.hits && (body.hits.hits.length)) {
    // @ts-ignore
    strResponse += await sendToR(body.hits.hits);

    // @ts-ignore
    body = await searchMore(body._scroll_id, scrollTime);

    console.log('body', counter++, body.hits.total.value, body.hits.hits.length)//TODO remove
  }

  console.log('extraction finalized');

  return strResponse;
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


let header = "";//TODO remove
let headerSetted = false;//TODO remove

// @ts-ignore
async function sendToR(hits: any[]) : Promise<string>{
  //TODO

  if(!headerSetted){
    hits[0]._source.variables.forEach((variableObj:any) => {
      header += variableObj.customId+";";
    });
    header += "\n";
    headerSetted = true;
  }

  let content = "";
  hits.forEach((hit: {_source: any}) => {
    hit._source.variables.forEach((variableObj:any) => {
      content += (variableObj.value ? variableObj.value : "")+";";
    });
    content += "\n";
  });
  return content+"\n";
}


export default new PipelineService();
