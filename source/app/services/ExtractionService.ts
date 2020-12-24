import IResponse, { InternalServerErrorResponse, NotFoundResponse, SuccessResponse } from '../utils/response';
import { Types } from "mongoose";
import ExtractionModel from "../model/extraction/ExtractionsActivity";
import ActivityModel from "../model/activity/Activity";
import SurveyModel from "../model/survey/Survey";
import ObjectId = Types.ObjectId;

export default class ExtrationService {
  static async create(activityId: string): Promise<IResponse> {
    let activity
    let survey

    try {

      activity = await ExtrationService.findActivity(activityId)

      if (activity) {
        survey = await ExtrationService.findSurvey(activity.surveyForm.acronym, activity.surveyForm.version)
      }

      console.log(survey)

      console.log(activity)

      return new SuccessResponse(survey);
    } catch (e) {
      console.error(e);
      throw new InternalServerErrorResponse(e);
    }
  }

  private static async findActivity(activityId: string) {
    let resultActivity
    try {
      resultActivity = await ActivityModel.findOne({
        '_id': new ObjectId(activityId)
      }).exec();

      return resultActivity.toJSON();
    }
    catch (e) {
      console.error(e);
      throw new InternalServerErrorResponse(e);
    }
  }

  private static async findSurvey(acronym: string, version: number) {
    let resultSurvey
    try {
      resultSurvey = await SurveyModel.findOne({
        'surveyTemplate.identity.acronym': acronym, 'version': version
      }).exec();

      return resultSurvey.toJSON();
    }
    catch (e) {
      console.error(e);
      throw new InternalServerErrorResponse(e);
    }
  }

  static async remove(activityId: string): Promise<IResponse> {
    let deleteResult;

    try {
      deleteResult
      // = await ExtrationModel.deleteOne({ "_id": new ObjectId(activityId) });
    } catch (e) {
      console.error(e);
      throw new InternalServerErrorResponse(e);
    }

    if (deleteResult) {
      return new SuccessResponse();
    } else {
      throw new NotFoundResponse({ message: "Extration not found" })
    }
  }

};
