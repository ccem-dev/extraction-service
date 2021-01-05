import IResponse, {InternalServerErrorResponse, NotFoundResponse, SuccessResponse} from '../utils/response';
import {Types} from "mongoose";
import ObjectId = Types.ObjectId;
import OtusConnection from '../../config/database/OtusConnection'
import PipelineModel from '../model/pipeline/Model';
import ExtractionModel from '../model/extraction/Model';


class PipelineService {

  constructor() {
  }

  async perform (name: string): Promise<IResponse> {
    try {
      let query = await PipelineModel.findOne({'name': name});
      let code = new Function("return " + query["function"].code)();

      let extraction = await ExtractionModel.aggregate(query.pipeline).allowDiskUse(true);
      let result = code(extraction);

      console.log('extraction result');
      console.log(JSON.stringify(result,null, 2));

      return new SuccessResponse(result);
    }
    catch (e) {
      console.error(e);
      return new NotFoundResponse(e);
    }
  }

  // static async create(activityId: string): Promise<IResponse> {

  //   try {

  //     // await ExtrationModel.insert({
  //     //   acronym: "TESTE",
  //     //   activityId: "5634634t643"});
  //     return new SuccessResponse();
  //   } catch (e) {
  //     console.error(e);
  //     throw new InternalServerErrorResponse(e);
  //   }
  // }
};

export default new PipelineService();

