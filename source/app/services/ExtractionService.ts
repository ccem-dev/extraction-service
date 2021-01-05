import IResponse, { InternalServerErrorResponse, NotFoundResponse, SuccessResponse } from '../utils/response';
import { Types } from "mongoose";
import ExtractionModel from "../model/extraction/Model";
import ActivityModel from "../model/activity/Model";
import SurveyModel from "../model/survey/Model";
import ObjectId = Types.ObjectId;

class ExtrationService {
  async create(activityId: string): Promise<IResponse> {
    let dictionary;
    let activityInfo;

    try {
      let activity = await this.findActivity(activityId)

      if (activity) {
        let survey = await this.findSurvey(activity.surveyForm.acronym, activity.surveyForm.version)
        let activityFillingList: any[] = activity.fillContainer ? activity.fillContainer.fillingList : []
        activityInfo = buildActivityInfo(activity)
        if (survey && activityFillingList.length != 0) {
          dictionary = dictionaryCustomIdAndFillAnwser(activityFillingList, survey)
        }
      }

      const extraction = await persist(activity, activityInfo, dictionary);

      return new SuccessResponse(activity);
    } catch (e) {
      console.error(e);
      throw new InternalServerErrorResponse(e);
    }
  }

  async findActivity(activityId: string) {
    let resultActivity
    try {
      resultActivity = await ActivityModel.findOne({
        '_id': new ObjectId(activityId)
      }).exec();

      return resultActivity ? resultActivity.toJSON() : null;
    }
    catch (e) {
      console.error(e);
      throw new InternalServerErrorResponse(e);
    }
  }

  async findSurvey(acronym: string, version: number) {
    let resultSurvey
    try {
      resultSurvey = await SurveyModel.findOne({
        'surveyTemplate.identity.acronym': acronym, 'version': version
      }).exec();

      return resultSurvey ? resultSurvey.toJSON() : null;
    }
    catch (e) {
      console.error(e);
      throw new InternalServerErrorResponse(e);
    }
  }

  async remove(activityId: string): Promise<IResponse> {
    let deleteResult

    try {
      deleteResult
      // = await ExtractionModel.deleteOne({ "_id": new ObjectId(activityId) });
    } catch (e) {
      console.error(e);
      throw new InternalServerErrorResponse(e);
    }

    if (!deleteResult) {
      throw new NotFoundResponse({ message: "Extration not found" })
    }

    return new SuccessResponse();
  }
};

async function persist(activity: any, activityInfo: any, dictionary: any) {
  return await ExtractionModel.create({
    activityId: ObjectId(activity._Id),
    acronym: activity.surveyForm.acronym,
    version: activity.surveyForm.version,
    recruitmentNumber: activity.participantData.recruitmentNumber,
    participant_field_center: activity.participantData.fieldCenter.acronym,
    mode: activity.mode,
    // type: activity.,
    category: activity.name,
    participant_field_center_by_activity: activity.participantData.fieldCenter.acronym,//TODO review participant_field_center
    interviewer: activityInfo.activityInterviews.email,
    current_status: activityInfo.activityStatusHistory.name,
    current_status_date: activityInfo.activityStatusHistory.date,
    creation_date: activityInfo.activityCreationDate,
    // paper_realization_date: activityInfo.activityStatusHistory,
    // paper_interviewer: activityInfo.activityStatusHistory,
    last_finalization_date: activityInfo.activityLastFinalitionDate,
    external_id: activity.externalID,
    obj: dictionary
  });
        // await ExtractionModel.save(); // TODO review save method for persist
}



function dictionaryCustomIdAndFillAnwser(activityFillingList: any, survey: any) {
  let surveyItemContainer: any[] = survey.surveyTemplate ? survey.surveyTemplate.itemContainer : []
  let answerAllQuestion: any

  let result = surveyItemContainer.map((question: any) => {
    answerAllQuestion = extractionAnwserCustomID(activityFillingList, question)
    if (answerAllQuestion) {
      return {
        customID: question.customID,
        customID_answer: answerAllQuestion.customID_answer,
        metadata: question.customID + '_metadata',
        metadata_answer: answerAllQuestion.metadata_answer,
        comment: question.customID + '_comment',
        comment_answer: answerAllQuestion.comment_answer
      }
    }
  })

  console.log(answerAllQuestion)
  // console.log(surveyItemContainer)
  console.log(result)
  return result
}

function  extractionAnwserCustomID(activityFillingList: any, question: any) {
  let customID_answer: any
  let metadata_answer: any
  let comment_answer: any

  let QuestionFill: any = activityFillingList.find((activity: any) => activity.questionID == question.templateID !== undefined)

  console.log(QuestionFill)
  switch (QuestionFill.answer.type) {
    case "CalendarQuestion": {
      customID_answer = QuestionFill.answer.value.value
      metadata_answer = QuestionFill.metadata.value
      comment_answer = QuestionFill.comment
      break;
    }
    case "CheckboxQuestion":
    case "GridTextQuestion":
    case "GridIntegerQuestion":
    default: {
      customID_answer = QuestionFill.answer.value
      metadata_answer = QuestionFill.metadata.value
      comment_answer = QuestionFill.comment
      break;
    }
  }

  return {
    customID_answer: customID_answer || "",
    metadata_answer: metadata_answer || "",
    comment_answer: comment_answer
  }

}

function buildActivityInfo(activity: any,) {
  let activityNavigationTracker: any = activity.navigationTracker
  let activityNavigationTrackerItems: any = activityNavigationTracker.items != 0 ? activityNavigationTracker.items[activityNavigationTracker.items.length - 1] : {}
  let activityStatusHistory: any = {}
  let activityInterviews: any = activity.interviews.length != 0 ? activity.interviews[activity.interviews.length - 1] : {}
  let activityLastFinalition: any
  let activityCreation: any
  let activityLastFinalitionDate: string
  let activityCreationDate: string
  const FINALIZED = 'FINALIZED'
  const CREATED = 'CREATED'

  if (activity.statusHistory != 0) {
    activityStatusHistory = activity.statusHistory[activity.statusHistory.length - 1]
    activityLastFinalition = activity.statusHistory.reverse().find((items: any) => items.name == FINALIZED)
    activityCreation = activity.statusHistory.find((items: any) => items.name == CREATED)

    activityLastFinalitionDate = activityLastFinalition ? activityLastFinalition.date : ''
    activityCreationDate = activityCreation ? activityCreation.date : ''
  }

  console.log(activityNavigationTrackerItems)
  console.log(activityStatusHistory)
  console.log(activityInterviews)

  return {
    activityNavigationTrackerItens: activityNavigationTrackerItems,
    activityStatusHistory: activityStatusHistory,
    activityInterviews: activityInterviews,
    activityCreationDate: activityCreationDate,
    activityLastFinalitionDate: activityLastFinalitionDate
  }
}

export default new ExtrationService()
