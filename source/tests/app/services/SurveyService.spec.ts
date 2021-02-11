import SurveyService from '../../../app/services/SurveyService'
import ElasticsearchService from "../../../app/services/ElasticsearchService"
import data from "../../data/json-importer.test"
import { InternalServerErrorResponse, NotFoundResponse, SuccessResponse, NotAcceptableResponse } from '../../../app/utils/response';
import RscriptService from "../../../app/services/RscriptService"
import ActivityExtractionService from "../../../app/services/ActivityExtractionService"

jest.mock('../../../app/services/ElasticsearchService.ts')

describe('SurveyService.ts Tests', () => {
  const SURVEY_ID: string = "123";
  const R_SCRIPT_NAME: string = "script";
  let mockClient = data.client;
  let mockElastic: any;
  let spySurvey: any;
  let spySurveyTwo: any;

  beforeEach(function () {
    mockElastic = ElasticsearchService as jest.Mocked<typeof ElasticsearchService>
  });

  it("performRscriptExtractionMethod create values rscript but not found", async () => {
    let rscriptService = jest.spyOn(RscriptService, "get")
    spySurvey = jest.spyOn(mockElastic, 'getClient').mockReturnValueOnce(mockClient)
    spySurveyTwo = jest.spyOn(mockElastic, 'getClient').mockReturnValueOnce(mockClient)

    const expectedResponseBody = {
      body: {
        data: {
          data: "R script {"+R_SCRIPT_NAME+"} does not exists"
        }
      },
      code: 404
    };

    await expect(SurveyService.performRscript(SURVEY_ID, R_SCRIPT_NAME)).resolves.toEqual(expectedResponseBody);
    expect(spySurvey).toHaveBeenCalled()
    expect(rscriptService).toHaveBeenCalled()
    expect(spySurveyTwo).toHaveBeenCalled()
    spySurvey.mockRestore()
    rscriptService.mockRestore()
    spySurveyTwo.mockRestore()
  })

  it("performRscriptExtractionMethod should create values but reject", async () => {
    mockClient.search = function () { return Promise.reject() }
    spySurvey = jest.spyOn(mockElastic, 'getClient').mockReturnValueOnce(mockClient)
    await expect(SurveyService.performRscript(SURVEY_ID, R_SCRIPT_NAME)).resolves.toEqual(new NotFoundResponse({
      data: "R script {"+R_SCRIPT_NAME+"} does not exists"
    }));
    expect(spySurvey).toHaveBeenCalled();
    spySurvey.mockRestore();
  });

  it("performAsJsonMethod should return value survey", async () => {
    mockClientSearch()
    spySurvey = jest.spyOn(mockElastic, 'getClient').mockReturnValueOnce(mockClient)
    spySurveyTwo = jest.spyOn(mockElastic, 'getClient').mockReturnValueOnce(mockClient)
    await expect(SurveyService.performAsJson(R_SCRIPT_NAME)).resolves.toEqual({ body: { data: [{ "activityId": "123456" }] }, "code": 200 });
    expect(spySurvey).toHaveBeenCalled()
    expect(spySurveyTwo).toHaveBeenCalled()
    spySurvey.mockRestore()
    spySurveyTwo.mockRestore()
  })

  it("performAsJsonMethod should return values but reject", async () => {
    mockClient.search = function () { return Promise.reject() }
    spySurvey = jest.spyOn(mockElastic, 'getClient').mockReturnValueOnce(mockClient)
    await expect(SurveyService.performAsJson(R_SCRIPT_NAME)).resolves.toEqual(new NotFoundResponse());
    expect(spySurvey).toHaveBeenCalled()
    spySurvey.mockRestore();
  })

  it("performAsCsvMethod should execute performAsCsv return csv", async () => {
    mockClientSearch()
    spySurvey = jest.spyOn(mockElastic, 'getClient').mockReturnValueOnce(mockClient)
    spySurveyTwo = jest.spyOn(mockElastic, 'getClient').mockReturnValueOnce(mockClient)
    await expect(SurveyService.performAsCsv(R_SCRIPT_NAME)).resolves.toEqual({ body: { data: { "header": ["activityId"], "values": [["123456"],], } }, "code": 200 })
    expect(spySurvey).toHaveBeenCalled();
    expect(spySurveyTwo).toHaveBeenCalled();
    spySurveyTwo.mockRestore();
    spySurvey.mockRestore();
  });

  it("performAsCsvMethod should return survey throw data not found", async () => {
    mockClient.search = function () { return Promise.reject() };
    spySurvey = jest.spyOn(mockElastic, 'getClient').mockReturnValueOnce(mockClient);
    await expect(SurveyService.performAsCsv(R_SCRIPT_NAME)).resolves.toEqual(new NotFoundResponse());
    expect(spySurvey).toHaveBeenCalled();
    spySurvey.mockRestore();
  });

  it("getSurveyActivitiesIdsMethod should return ids but reject", async () => {
    mockClient.search = function () { return Promise.reject({}) }
    spySurvey = jest.spyOn(mockElastic, 'getClient').mockReturnValueOnce(mockClient);

    await expect(SurveyService.getSurveyActivitiesIds(SURVEY_ID)).resolves.toEqual(new NotFoundResponse({}));
    expect(spySurvey).toHaveBeenCalled();

    spySurvey.mockRestore();
  });

  it("getSurveyActivitiesIdsMethod should return survey but reject index not found exception", async () => {
    const META = { meta: { body: { error: { type: "index_not_found_exception" } } } };
    mockClient.search = function () { return Promise.reject(META) };
    spySurvey = jest.spyOn(mockElastic, 'getClient').mockReturnValueOnce(mockClient);
    spySurveyTwo = jest.spyOn(mockElastic, 'getClient').mockReturnValueOnce(mockClient);
    await expect(SurveyService.getSurveyActivitiesIds(SURVEY_ID)).resolves.toEqual(new NotFoundResponse(META));
    expect(spySurvey).toHaveBeenCalled();
    expect(spySurveyTwo).toHaveBeenCalled();
    spySurvey.mockRestore();
    spySurveyTwo.mockRestore();
  });

  function mockClientSearch() {
    mockClient.search = function () {
      return {
        body: {
          hits: {
            hits: [{
              _index: "",
              _source: {
                activityId: "123456"
              }
            }]
          },
          _scroll_id: "123"
        }
      }
    }
  }

})
