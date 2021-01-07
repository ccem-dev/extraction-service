import IResponse, {NotFoundResponse, SuccessResponse} from '../utils/response';
import PipelineModel from '../model/pipeline/Model';
import ExtractionModel from '../model/extraction/Model';
import { json2csvAsync } from 'json-2-csv';

class PipelineService {

  constructor() {
  }

  async performAsJson (pipelineName: string): Promise<IResponse> {
    try {
      let result = await findPipelineAndApplyFunction(pipelineName);
      return new SuccessResponse(result);
    }
    catch (e) {
      console.error(e);
      return new NotFoundResponse(e);
    }
  }

  async performAsCsv (pipelineName: string): Promise<IResponse> {
    try {
      let result = await findPipelineAndApplyFunction(pipelineName);
      let csvContent = await json2csvAsync(result, {
        unwindArrays: true
      });
      return new SuccessResponse(csvContent);
    }
    catch (e) {
      console.error(e);
      return new NotFoundResponse(e);
    }
  }

}

async function findPipelineAndApplyFunction(pipelineName: string) {
  console.log('\nextracting from pipeline ' + pipelineName + ' ...');

  let query = await PipelineModel.findOne({'name': pipelineName});
  let code = new Function("return " + query["function"].code)();
  let extraction = await ExtractionModel.aggregate(query.pipeline).allowDiskUse(true);

  console.log('extraction finished\n');

  let result = code(extraction);
  if(Array.isArray(result)){
    result = result.filter((obj: any) => obj && Object.keys(obj).length > 0);
  }
  return result;
}

export default new PipelineService();
