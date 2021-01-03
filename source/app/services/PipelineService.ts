import IResponse, {InternalServerErrorResponse, NotFoundResponse, SuccessResponse} from '../utils/response';
import {Types} from "mongoose";
import ObjectId = Types.ObjectId;
import OtusConnection from '../../config/database/OtusConnection'
import Pipeline from '../model/pipeline/PipelineModel'

class PipelineService {    

  constructor() {
  }

  async perform (name: string): Promise<Document> {
    let pipeline = await Pipeline.findOne({name}).exec()
    console.log(pipeline);
    OtusConnection.db.collection('pipeline').find()
    
    return null
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

export default new PipelineService()

