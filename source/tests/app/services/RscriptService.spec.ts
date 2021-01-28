import RscriptService from '../../../app/services/RscriptService'
import ElasticsearchService from "../../../app/services/ElasticsearchService"
import data from "../../data/json-importer.test"
import IResponse, { InternalServerErrorResponse, NotFoundResponse, SuccessResponse, NotAcceptableResponse } from '../../../app/utils/response';

jest.mock('../../../app/services/ElasticsearchService.ts')

describe('RscriptService.ts Tests', () => {
  let ACTIVITY = {}
  let name: string = "Fulano"
  let script: string = "scripts"
  const extractionData = {
    activity: data.activity,
    survey: data.survey
  }
  const extractionActivityAllData = data.extractionsActivityAll

  let Mockclient = data.client
  let mockElastic: any
  let spyRscript: any

  beforeEach(function () {
    mockElastic= ElasticsearchService as jest.Mocked<typeof ElasticsearchService>
  })

  it("createOrUpdateExtractionMethod create values rscript", async () => {
    spyRscript = jest.spyOn(mockElastic, 'getClient').mockReturnValueOnce(Mockclient)
    await expect(RscriptService.createOrUpdate(name, script)).resolves.toEqual(new SuccessResponse());
    expect(spyRscript).toHaveBeenCalled()
    spyRscript.mockRestore();
  })

  it("createOrUpdateExtractionMethod should create values but reject", async () => {
    Mockclient.update = function () { return Promise.reject() }
    spyRscript = jest.spyOn(mockElastic, 'getClient').mockReturnValueOnce(Mockclient)
    await expect(RscriptService.createOrUpdate(name, script)).resolves.toEqual(new NotFoundResponse());
    expect(spyRscript).toHaveBeenCalled()
    spyRscript.mockRestore();
  })

  it("getMethod should return value rscript", async () => {
    spyRscript = jest.spyOn(mockElastic, 'getClient').mockReturnValueOnce(Mockclient)
    await expect(RscriptService.get(name)).resolves.toEqual(new SuccessResponse());
    expect(spyRscript).toHaveBeenCalled()
    spyRscript.mockRestore();
  })

  it("getMethod should create values but reject", async () => {
    Mockclient.search = function () { return Promise.reject() }
    spyRscript = jest.spyOn(mockElastic, 'getClient').mockReturnValueOnce(Mockclient)
    await expect(RscriptService.get(name)).resolves.toEqual(new NotFoundResponse());
    expect(spyRscript).toHaveBeenCalled()
    spyRscript.mockRestore();
  })

  it("deleteMethod should execute delete rscript", async () => {
    spyRscript = jest.spyOn(mockElastic, 'getClient').mockReturnValueOnce(Mockclient)

    await expect(RscriptService.delete(name)).resolves.toEqual(new SuccessResponse())
    expect(spyRscript).toHaveBeenCalled()

    spyRscript.mockRestore();
  })

  it("deleteMethod should execute rscript throw data not found", async () => {
    Mockclient.delete = function () { return Promise.reject() }
    spyRscript = jest.spyOn(mockElastic, 'getClient').mockReturnValueOnce(Mockclient)

    await expect(RscriptService.delete(name)).resolves.toEqual(new NotFoundResponse())
    expect(spyRscript).toHaveBeenCalled()

    spyRscript.mockRestore();
  })

})
