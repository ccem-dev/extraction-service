import IResponse, {InternalServerErrorResponse, NotFoundResponse, SuccessResponse} from '../utils/response';
import {Types} from "mongoose";
import ExtrationModel from "../model/extration/model";
import ObjectId = Types.ObjectId;

export default class ExtrationService {
  static async create(activityId: string): Promise<IResponse> {

    try {

      // await ExtrationModel.insert({
      //   acronym: "TESTE",
      //   activityId: "5634634t643"});
      return new SuccessResponse();
    } catch (e) {
      console.error(e);
      throw new InternalServerErrorResponse(e);
    }
  }

  static async update(activityId: string ): Promise<IResponse> {
    let updateResult;

    try {
      updateResult = await ExtrationModel.updateOne({ "_id": new ObjectId(activityId) }, {});
    } catch (e) {
      console.error(e);
      throw new InternalServerErrorResponse(e);
    }

    if (updateResult.n) {
      return new SuccessResponse(!!updateResult.nModified);
    } else {
      throw new NotFoundResponse({ message: "Extration not found" })
    }
  }

  static async remove(activityId: string): Promise<IResponse> {
    let deleteResult;

    try {
      deleteResult = await ExtrationModel.deleteOne({ "_id": new ObjectId(activityId) });
    } catch (e) {
      console.error(e);
      throw new InternalServerErrorResponse(e);
    }

    if (deleteResult) {
      return new SuccessResponse();
    } else {
      throw new NotFoundResponse({ message: "Extration not found"})
    }
  }

};
