import IResponse, { NotFoundResponse, SuccessResponse, InternalServerErrorResponse } from '../utils/response';
import ElasticsearchService from "./ElasticsearchService";
import RscriptService from "./RscriptService";
import CsvService from "../utils/CsvService";
import ActivityExtractionService from "./ActivityExtractionService";
import SurveyActivityIdsFactory from "../models/activity/SurveyActivityIdsFactory";

const json2csv = require('json-2-csv').json2csvAsync;
const axios = require('axios').default;

class SurveyService {

  async performRscript(surveyId: string, RscriptName: string): Promise<IResponse> {
    const rscript = (await RscriptService.get(RscriptName)).body.data;
    if (!rscript.script) {
      return new NotFoundResponse({ data :'R script {' + RscriptName + '} does not exists' });
    }

    let extractions;
    try{
      extractions = await this.findSurveyExtractions(surveyId);
    }
    catch (err) {
      if(!ElasticsearchService.isIndexNotFoundError(err)){
        return new InternalServerErrorResponse(err);
      }
      return new NotFoundResponse( { data: 'There is no activity extractions for desired survey'});
    }

    try {
      return new SuccessResponse(await this.applyRscriptToResponse(rscript.script, extractions));
    }
    catch (err) {
      return new InternalServerErrorResponse(err);
    }
  }

  async performAsJson(surveyId: string): Promise<IResponse> {
    try {
      return new SuccessResponse(await this.findSurveyExtractions(surveyId));
    }
    catch (e) {
      return new NotFoundResponse(e);
    }
  }

  async performAsCsv(surveyId: string): Promise<IResponse> {
    try {
      let response = await json2csv(await this.findSurveyExtractions(surveyId),
        { delimiter: { field: CsvService.getDelimiter() } });
      return new SuccessResponse(await CsvService.createCsvFromString(response));
    }
    catch (e) {
      return new NotFoundResponse(e);
    }
  }

  async getSurveyActivitiesIds(surveyId: string): Promise<IResponse> {
    try {
      let activityIds = (await this.findSurveyExtractions(surveyId))
        .map((doc: { activityId: string }) => doc.activityId);
      return new SuccessResponse(activityIds);
    }
    catch (err) {
      if (ElasticsearchService.isIndexNotFoundError(err)){
        return new SuccessResponse([]);
      }
      return new NotFoundResponse(err);
    }
  }

  private async findSurveyExtractions(surveyId: string) {
    const SIZE = 10000;
    const SCROLL_TIME = "1m";

    const indexName = ActivityExtractionService.getIndexName(surveyId);

    let response: any[] = [];
    let body = await this.firstSearch(indexName, SIZE, SCROLL_TIME);

    while (body.hits && (body.hits.hits.length)) {
      // @ts-ignore
      response = response.concat(body.hits.hits.map((hit: { _source: any }) => hit._source));
      // @ts-ignore
      body = await this.searchMore(body._scroll_id, SCROLL_TIME);
    }

    return response;
  }

  private async firstSearch(indexName: string, size: number, scrollTime: string): Promise<any> {
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

  private async searchMore(scrollId: string, strollTime: string): Promise<any> {
    const { body } = await ElasticsearchService.getClient().scroll({
      scroll_id: scrollId,
      scroll: strollTime
    });
    return body;
  }

  private async applyRscriptToResponse(rscript: string, response: any[]) {
    const PLUMBER_URL = process.env.PLUMBER_PROTOCOL + "://" + process.env.PLUMBER_HOSTNAME + ":" + process.env.PLUMBER_PORT +
      "/" + process.env.PLUMBER_RUNNER;

    const resp = await axios({
      method: 'post',
      url: PLUMBER_URL,
      data: {
        "script": rscript,
        "arg": response
      },
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      maxContentLength: parseInt(process.env.MAX_CONTENT_LENGTH),
      maxBodyLength: parseInt(process.env.MAX_BODY_LENGTH)
    }).catch((err: any) => {
      throw err;
    });

    if (typeof resp.data != 'string') {
      return resp.data;
    }

    return await CsvService.createCsvFromString(resp.data);
  }

}

export default new SurveyService();
