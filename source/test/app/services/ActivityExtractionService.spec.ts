import ActivityExtractionService from '../../../app/services/ActivityExtractionService'
import ElasticsearchService from "../../../app/services/ElasticsearchService"
import data from "../../data/json-importer.test"
import IResponse, { InternalServerErrorResponse, NotFoundResponse, SuccessResponse, NotAcceptableResponse } from '../../../app/utils/response';

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

  let Mockclient = data.client
  let mockExtraction: any
  let spyExtraction: any

  beforeEach(function () {
    mockExtraction = ElasticsearchService as jest.Mocked<typeof ElasticsearchService>
  })

  it("createExtractionMethod create values extraction", async () => {
    spyExtraction = jest.spyOn(mockExtraction, 'getClient').mockReturnValueOnce(Mockclient)
    await expect(ActivityExtractionService.create(extractionData)).resolves.toEqual({ "body": { "data": true }, "code": 200 });
    expect(spyExtraction).toHaveBeenCalled()
    spyExtraction.mockRestore();
  })

  it("createExtractionMethod create values extraction question All and null navigationTracking", async () => {
    spyExtraction = jest.spyOn(mockExtraction, 'getClient').mockReturnValueOnce(Mockclient)
    await expect(ActivityExtractionService.create(extractionActivityAllData)).resolves.toEqual({ "body": { "data": true }, "code": 200 });
    expect(spyExtraction).toHaveBeenCalled()
    spyExtraction.mockRestore();
  })

  it("createExtractionMethod create values extraction activity undefined", async () => {
    spyExtraction = jest.spyOn(mockExtraction, 'getClient').mockReturnValueOnce(Mockclient)
    await expect(ActivityExtractionService.create(ACTIVITY)).rejects.toEqual({ "body": { "data": { "body": { "data": { "message": "Activity not found" } }, "code": 404 } }, "code": 500 });
    expect(spyExtraction).not.toHaveBeenCalled()
    spyExtraction.mockRestore();
  })

  it("createMethod create values extraction throw internal error", async () => {
    Mockclient.update = function () { return Promise.reject() }
    spyExtraction = jest.spyOn(mockExtraction, 'getClient').mockReturnValueOnce(Mockclient)

    await expect(ActivityExtractionService.create(extractionActivityAllData)).rejects.toEqual(new InternalServerErrorResponse(Error()))
    expect(spyExtraction).toHaveBeenCalled()

    spyExtraction.mockRestore();
  })

  it("removeMethod return values extraction activity", async () => {
    spyExtraction = jest.spyOn(mockExtraction, 'getClient').mockReturnValueOnce(Mockclient)

    await expect(ActivityExtractionService.remove(surveyId, activityId)).resolves.toEqual({ "body": { "data": true }, "code": 200 })
    expect(spyExtraction).toHaveBeenCalled()

    spyExtraction.mockRestore();
  })

  it("removeMethod return values extraction throw data not found", async () => {
    Mockclient.delete = function () { return Promise.reject({ meta: { body: { result: "not_found" } } }) }
    spyExtraction = jest.spyOn(mockExtraction, 'getClient').mockReturnValueOnce(Mockclient)

    await expect(ActivityExtractionService.remove(surveyId, activityId)).rejects.toEqual(new NotFoundResponse())
    expect(spyExtraction).toHaveBeenCalled()

    spyExtraction.mockRestore();
  })

  it("removeMethod return values extraction throw internal error", async () => {
    Mockclient.delete = function () { return Promise.reject() }
    spyExtraction = jest.spyOn(mockExtraction, 'getClient').mockReturnValueOnce(Mockclient)

    await expect(ActivityExtractionService.remove(surveyId, activityId)).rejects.toEqual(new InternalServerErrorResponse())
    expect(spyExtraction).toHaveBeenCalled()

    spyExtraction.mockRestore();
  })

})
