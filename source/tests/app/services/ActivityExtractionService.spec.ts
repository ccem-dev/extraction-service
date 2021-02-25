import ActivityExtractionService from '../../../app/services/ActivityExtractionService'
import ElasticsearchService from "../../../app/services/ElasticsearchService"
import data from "../../data/json-importer.test"
import { InternalServerErrorResponse, NotFoundResponse, SuccessResponse } from '../../../app/utils/response';

jest.mock('../../../app/services/ElasticsearchService.ts')

describe('ActivityExtractionService.ts Tests', () => {
  let ACTIVITY = {}
  const activityId = '5a38062628f10d1043711079'
  const surveyId = '5e96287b5689ba37a74c7904'
  const extractionData = {
    activity: data.activity,
    survey: data.survey
  }
  const extractionActivityAllData = data.extractionsActivityAll

  let MockClient = data.client
  let mockExtraction: any
  let spyExtraction: any

  beforeEach(function () {
    mockExtraction = ElasticsearchService as jest.Mocked<typeof ElasticsearchService>
  })

  it("createExtractionMethod create values extraction", async () => {
    spyExtraction = jest.spyOn(mockExtraction, 'getClient').mockReturnValueOnce(MockClient)
    await expect(ActivityExtractionService.create(extractionData)).resolves.toEqual(new SuccessResponse());
    expect(spyExtraction).toHaveBeenCalled()
    spyExtraction.mockRestore();
  })

  it("createExtractionMethod create values extraction question All and null navigationTracking", async () => {
    spyExtraction = jest.spyOn(mockExtraction, 'getClient').mockReturnValueOnce(MockClient)
    await expect(ActivityExtractionService.create(extractionActivityAllData)).resolves.toEqual(new SuccessResponse());
    expect(spyExtraction).toHaveBeenCalled()
    spyExtraction.mockRestore();
  })

  it("createExtractionMethod create values extraction activity undefined", async () => {
    ACTIVITY = { activity: null };
    spyExtraction = jest.spyOn(mockExtraction, 'getClient').mockReturnValueOnce(MockClient)
    await expect(ActivityExtractionService.create(ACTIVITY)).resolves.toEqual({ "body": { "data": { "message": "Activity not found" } }, "code": 404 });
    expect(spyExtraction).not.toHaveBeenCalled()
    spyExtraction.mockRestore();
  })

  it("createMethod create values extraction throw internal error", async () => {
    MockClient.update = function () { return Promise.reject() }
    spyExtraction = jest.spyOn(mockExtraction, 'getClient').mockReturnValueOnce(MockClient)

    await expect(ActivityExtractionService.create(extractionActivityAllData)).resolves.toEqual(new InternalServerErrorResponse({message: " Error SurveyId 5eb9523b075bcf399151a4e8 ActivityId 5a3aad9828f10d10437110de"}))
    expect(spyExtraction).toHaveBeenCalled()

    spyExtraction.mockRestore();
  })

  it("getIndexNameMethod should return value index", () => {
    expect(ActivityExtractionService.getIndexName("123")).toEqual("extractions_survey_123")
  })

  it("extractSurveyIdFromIndexNameMethod should return value index", () => {
    expect(ActivityExtractionService.extractSurveyIdFromIndexName("extractions_survey_123")).toEqual("123")
  })

  it("removeMethod should execute delete extraction activity", async () => {
    spyExtraction = jest.spyOn(mockExtraction, 'getClient').mockReturnValueOnce(MockClient)

    await expect(ActivityExtractionService.remove(surveyId, activityId)).resolves.toEqual(new SuccessResponse())
    expect(spyExtraction).toHaveBeenCalled()

    spyExtraction.mockRestore();
  })

  it("removeMethod should execute extraction throw data not found", async () => {
    MockClient.delete = function () { return Promise.reject({ meta: { statusCode: '404' } }) }
    spyExtraction = jest.spyOn(mockExtraction, 'getClient').mockReturnValueOnce(MockClient)

    await expect(ActivityExtractionService.remove(surveyId, activityId)).resolves.toEqual(new NotFoundResponse())
    expect(spyExtraction).toHaveBeenCalled()

    spyExtraction.mockRestore();
  })

  it("removeMethod should execute throw internal error", async () => {
    MockClient.delete = function () { return Promise.reject() }
    spyExtraction = jest.spyOn(mockExtraction, 'getClient').mockReturnValueOnce(MockClient)

    await expect(ActivityExtractionService.remove(surveyId, activityId)).resolves.toEqual(new InternalServerErrorResponse({ message: " Error SurveyId 5e96287b5689ba37a74c7904 ActivityId 5a38062628f10d1043711079"}))
    expect(spyExtraction).toHaveBeenCalled()

    spyExtraction.mockRestore();
  })

})
