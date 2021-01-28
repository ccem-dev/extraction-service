import SurveyService from '../../../app/services/SurveyService'
import SurveyController from '../../../app/controllers/SurveyController'

jest.mock('../../../app/services/SurveyService')

describe('SurveyController.ts Tests', () => {

  let mockService: any
  let req: any = {
    params: {
      name: 'fulano'
    }
  }
  let res: any = {
    status: function () { return { send: function () { return true } }; },
    body: {}
  }

  beforeEach(function () {
    mockService = SurveyService as jest.Mocked<typeof SurveyService>
  })

  it("performRscriptMethod should resolve the request Rscript", () => {
    req.body = { surveyId: '123' }
    mockService.performRscript = jest.fn()
    const spy = jest.spyOn(mockService, 'performRscript').mockResolvedValue(true)
    SurveyController.performRscript(req, res)

    expect(spy).toHaveBeenCalled()

    spy.mockRestore()
  })

  it("performRscriptMethod should reject the request Rscript", () => {
    req.body = {}
    mockService.performRscript = jest.fn()
    const spy = jest.spyOn(mockService, 'performRscript').mockRejectedValue(false)
    SurveyController.performRscript(req, res)

    expect(spy).toHaveBeenCalled()

    spy.mockRestore();
  })

  it("performAsJsonMethod should resolve the request json", () => {
    mockService.performAsJson = jest.fn()
    const spy = jest.spyOn(mockService, 'performAsJson').mockResolvedValue(true)
    SurveyController.performAsJson(req, res)

    expect(spy).toHaveBeenCalled()

    spy.mockRestore()
  })

  it("performAsJsonMethod should reject the request json", () => {
    mockService.performRscript = jest.fn()
    const spy = jest.spyOn(mockService, 'performAsJson').mockRejectedValue(false)
    SurveyController.performAsJson(req, res)

    expect(spy).toHaveBeenCalled()

    spy.mockRestore();
  })

  it("performAsCsvMethod should resolve the request csv", () => {
    mockService.performAsCsv = jest.fn()
    const spy = jest.spyOn(mockService, 'performAsCsv').mockResolvedValue(true)

    SurveyController.performAsCsv(req, res)
    expect(spy).toHaveBeenCalled()

    spy.mockRestore();
  })

  it("performAsCsvMethod should rejects the request csv", () => {
    mockService.performAsCsv = jest.fn()
    const spy = jest.spyOn(mockService, 'performAsCsv').mockRejectedValue(false)

    SurveyController.performAsCsv(req, res)
    expect(spy).toHaveBeenCalled()

    spy.mockRestore();
  })

  it("getSurveyActivitiesIdsMethod should resolve the request Ids", () => {
    mockService.getSurveyActivitiesIds = jest.fn()
    const spy = jest.spyOn(mockService, 'getSurveyActivitiesIds').mockResolvedValue(true)

    SurveyController.getSurveyActivitiesIds(req, res)
    expect(spy).toHaveBeenCalled()

    spy.mockRestore();
  })

  it("getSurveyActivitiesIdsMethod should rejects the request Ids", () => {
    mockService.getSurveyActivitiesIds = jest.fn()
    const spy = jest.spyOn(mockService, 'getSurveyActivitiesIds').mockRejectedValue(false)

    SurveyController.getSurveyActivitiesIds(req, res)
    expect(spy).toHaveBeenCalled()

    spy.mockRestore();
  })

  it("getAllActivitiesIdsMethod should resolve the request all Ids in activity", () => {
    mockService.getAllActivitiesIds = jest.fn()
    const spy = jest.spyOn(mockService, 'getAllActivitiesIds').mockResolvedValue(true)

    SurveyController.getAllActivitiesIds(req, res)
    expect(spy).toHaveBeenCalled()

    spy.mockRestore();
  })

  it("getAllActivitiesIdsMethod should rejects the request all Ids in activity", () => {
    mockService.getAllActivitiesIds = jest.fn()
    const spy = jest.spyOn(mockService, 'getAllActivitiesIds').mockRejectedValue(false)

    SurveyController.getAllActivitiesIds(req, res)
    expect(spy).toHaveBeenCalled()

    spy.mockRestore();
  })

})
