import RscriptService from '../../../app/services/RscriptService'
import RscriptController from '../../../app/controllers/RscriptController'

jest.mock('../../../app/services/RscriptService')

describe('RscriptController.ts Tests', () => {

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
    mockService = RscriptService as jest.Mocked<typeof RscriptService>
  })

  it("createOrUpdateMethod should resolve the request script", () => {
    req.body = { name: 'fulano' }
    mockService.createOrUpdate = jest.fn()
    const spy = jest.spyOn(mockService, 'createOrUpdate').mockResolvedValue(true)
    RscriptController.createOrUpdate(req, res)

    expect(spy).toHaveBeenCalled()

    spy.mockRestore()
  })

  it("createOrUpdateMethod should reject the request script", () => {
    req.body = {}
    mockService.createOrUpdate = jest.fn()
    const spy = jest.spyOn(mockService, 'createOrUpdate').mockRejectedValue(false)
    RscriptController.createOrUpdate(req, res)

    expect(spy).toHaveBeenCalled()

    spy.mockRestore();
  })

  it("getMethod should resolve the request script", () => {
    mockService.get = jest.fn()
    const spy = jest.spyOn(mockService, 'get').mockResolvedValue(true)
    RscriptController.get(req, res)

    expect(spy).toHaveBeenCalled()

    spy.mockRestore()
  })

  it("getMethod should reject the request script", () => {
    mockService.createOrUpdate = jest.fn()
    const spy = jest.spyOn(mockService, 'get').mockRejectedValue(false)
    RscriptController.get(req, res)

    expect(spy).toHaveBeenCalled()

    spy.mockRestore();
  })

  it("deleteMethod should resolve the request script", () => {
    mockService.delete = jest.fn()
    const spy = jest.spyOn(mockService, 'delete').mockResolvedValue(true)

    RscriptController.delete(req, res)
    expect(spy).toHaveBeenCalled()

    spy.mockRestore();
  })

  it("deleteMethod should rejects the request script", () => {
    mockService.delete = jest.fn()
    const spy = jest.spyOn(mockService, 'delete').mockRejectedValue(false)

    RscriptController.delete(req, res)
    expect(spy).toHaveBeenCalled()

    spy.mockRestore();
  })

})
