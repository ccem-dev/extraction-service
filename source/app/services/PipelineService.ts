import IResponse, {NotFoundResponse, SuccessResponse} from '../utils/response';
import PipelineModel from '../model/pipeline/Model';
import ExtractionModel from '../model/extraction/Model';

class PipelineService {

  constructor() {
  }

  async perform (pipelineName: string): Promise<IResponse> {
    try {
      console.log('\nextraction from pipeline ' + pipelineName + ' ...');
      let query = await PipelineModel.findOne({'name': pipelineName});
      let code = new Function("return " + query["function"].code)();
      let extraction = await ExtractionModel.aggregate(query.pipeline).allowDiskUse(true);
      console.log('extraction finished\n');
      return new SuccessResponse(code(extraction));
    }
    catch (e) {
      console.error(e);
      return new NotFoundResponse(e);
    }
  }

}

export default new PipelineService();
