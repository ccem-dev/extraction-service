import ActivityExtractionService from '../../../app/services/ActivityExtractionService'
import ActivityExtractionController from '../../../app/controllers/ActivityExtractionController'

import data from "../../data/json-importer.test"

jest.mock('../../../app/services/ActivityExtractionService')

describe('ActivityExtractionController.ts Tests', () => {
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

  it("createMethod should resolve the request activity", async () => {
    req.body = data.extractionsActivityAll
    mockActivity.create = jest.fn()
    const spy = jest.spyOn(mockActivity, 'create').mockResolvedValue(true)
    await ActivityExtractionController.create(req, res)

    expect(spy).toHaveBeenCalled()

    spy.mockRestore();

  })

  it("createMethod should reject the request activity", async () => {
    req.body = data.extractionsActivityAll
    mockActivity.create = jest.fn()
    const spy = jest.spyOn(mockActivity, 'create').mockRejectedValue(false)
    await ActivityExtractionController.create(req, res)

    expect(spy).toHaveBeenCalled()

    spy.mockRestore();

  })

  it("removeMethod should resolve the request activity", async () => {
    mockActivity.remove = jest.fn()
    const spy = jest.spyOn(mockActivity, 'remove').mockResolvedValue(true)

    await ActivityExtractionController.remove(req, res)
    expect(spy).toHaveBeenCalled()

    spy.mockRestore();
  })

  it("removeMethod should reject the request activity", async () => {
    mockActivity.remove = jest.fn()
    const spy = jest.spyOn(mockActivity, 'remove').mockRejectedValue(false)

    await ActivityExtractionController.remove(req, res)
    expect(spy).toHaveBeenCalled()

    spy.mockRestore();
  })

})
