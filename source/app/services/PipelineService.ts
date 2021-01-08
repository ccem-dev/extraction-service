import IResponse, {NotFoundResponse, SuccessResponse} from '../utils/response';
import PipelineModel from '../model/pipeline/Model';
import ExtractionModel from '../model/extraction/Model';
import CsvService from "./CsvService";

class PipelineService {

  constructor() {
  }

  async performAsJson (pipelineName: string): Promise<IResponse> {
    try {
      let result = await findPipelineAndApplyFunction(pipelineName);
      return new SuccessResponse(result);
    }
    catch (e) {
      return new NotFoundResponse(e);
    }
  }

  async performAsCsv (pipelineName: string): Promise<IResponse> {
    try {
      let result = await findPipelineAndApplyFunction(pipelineName);
      return new SuccessResponse(await CsvService.createCsv(result));
    }
    catch (e) {
      return new NotFoundResponse(e);
    }
  }

}

async function findPipelineAndApplyFunction(pipelineName: string) {
  console.log('\nextracting from pipeline ' + pipelineName + ' ...');

  let query = await PipelineModel.findOne({'name': pipelineName});
  let code = new Function("return " + query["function"].code)();
  let extraction = await ExtractionModel.aggregate(query.pipeline).allowDiskUse(true);

  console.log('extraction finished!\nprocessing data ...');

  let results = code(extraction);
  if(Array.isArray(results)){
    results = results.filter((obj: any) => obj && Object.keys(obj).length > 0);
  }
  console.log("done");
  return results;
}

export default new PipelineService();
