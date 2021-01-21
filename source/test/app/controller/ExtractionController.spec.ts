import ActivityExtractionService from '../../../app/services/ActivityExtractionService'
import ExtractionController from '../../../app/controllers/ExtractionController'

import data from "../../data/json-importer.test"

import IResponse, { InternalServerErrorResponse, NotFoundResponse, SuccessResponse, NotAcceptableResponse } from '../../../app/utils/response';

jest.mock('../../../app/services/ActivityExtractionService')

describe('ExtractionController.ts Tests', () => {
  const activityId = '5a38062628f10d1043711079'
  const surveyId = '5e96287b5689ba37a74c7904'
  let mockActivity: any
  let req: any = {
    params: {
      surveyId: surveyId,
      activityId: activityId
    }
  }
  let res: any = {
    status: function () { return { send: function () { return true } }; },
    body: {}
  }

  beforeEach(function () {
    mockActivity = ActivityExtractionService as jest.Mocked<typeof ActivityExtractionService>
  })

  it("createMethod return values activity", async () => {
    req.body = data.extractionsActivityAll
    mockActivity.create = jest.fn()
    const spy = jest.spyOn(mockActivity, 'create').mockResolvedValue(true)
    await ExtractionController.create(req, res)

    expect(spy).toHaveBeenCalled()

    spy.mockRestore();

  })

  it("createMethod return values activity rejects", async () => {
    req.body = data.extractionsActivityAll
    mockActivity.create = jest.fn()
    const spy = jest.spyOn(mockActivity, 'create').mockRejectedValue(false)
    await ExtractionController.create(req, res)

    expect(spy).toHaveBeenCalled()

    spy.mockRestore();

  })

  it("removeMethod return values extraction activity", async () => {
    mockActivity.remove = jest.fn()
    const spy = jest.spyOn(mockActivity, 'remove').mockResolvedValue(true)

    await ExtractionController.remove(req, res)
    expect(spy).toHaveBeenCalled()

    spy.mockRestore();
  })

  it("removeMethod return values extraction activity rejects", async () => {
    mockActivity.remove = jest.fn()
    const spy = jest.spyOn(mockActivity, 'remove').mockRejectedValue(false)

    await ExtractionController.remove(req, res)
    expect(spy).toHaveBeenCalled()

    spy.mockRestore();
  })

})
