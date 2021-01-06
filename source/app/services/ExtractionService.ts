import IResponse, { InternalServerErrorResponse, NotFoundResponse, SuccessResponse } from '../utils/response';
import { Types } from "mongoose";
import ExtractionModel from "../model/extraction/Model";
import ActivityModel from "../model/activity/Model";
import SurveyModel from "../model/survey/Model";
import ObjectId = Types.ObjectId;

class ExtrationService {
  async create(activityId: string): Promise<IResponse> {
    let dictionary
    let activity
    let survey
    let activityInfo
    let activityFillingList: any[]

    try {
      activity = await this.findActivity(activityId)

      if (activity) {
        survey = await this.findSurvey(activity.surveyForm.acronym, activity.surveyForm.version)
        activityFillingList = activity.fillContainer ? activity.fillContainer.fillingList : []
        activityInfo = buildActivityInfo(activity)
        if (survey && activityFillingList.length != 0) {
          dictionary = dictionaryCustomIdAndFillAnswer(activityFillingList, survey)
          const extraction = await persist(activity, activityInfo, dictionary);

          return new SuccessResponse(survey);
        } else {
          return new NotFoundResponse()
        }
      } else {
        return new NotFoundResponse();
      }
    } catch (e) {
      console.error(e);
      throw new InternalServerErrorResponse(e);
    }
  }

  async findActivity(activityId: string) {
    let resultActivity
    try {
      resultActivity = await ActivityModel.findOne({
        '_id': ObjectId(activityId)
      }).exec()

      return resultActivity ? resultActivity.toJSON() : null
    }
    catch (e) {
      console.error(e)
      throw new InternalServerErrorResponse(e)
    }
  }

  async findSurvey(acronym: string, version: number) {
    let resultSurvey
    try {
      resultSurvey = await SurveyModel.findOne({
        'surveyTemplate.identity.acronym': acronym, 'version': version
      }).exec()

      return resultSurvey ? resultSurvey.toJSON() : null
    }
    catch (e) {
      console.error(e)
      throw new InternalServerErrorResponse(e)
    }
  }

  async remove(activityId: string): Promise<IResponse> {
    let deleteResult

    try {
      deleteResult
      // = await ExtractionModel.deleteOne({ "_id": new ObjectId(activityId) });
    } catch (e) {
      console.error(e);
      throw new InternalServerErrorResponse(e)
    }

    if (!deleteResult) {
      throw new NotFoundResponse({ message: "Extration not found" })
    }

    return new SuccessResponse()
  }
};

async function persist(activity: any, activityInfo: any, dictionary: any) {
  try {
    return await ExtractionModel.updateOne({ activityId: activity._id }, {
      activityId: ObjectId(activity._id),
      acronym: activity.surveyForm.acronym,
      version: activity.surveyForm.version,
      recruitmentNumber: activity.participantData.recruitmentNumber,
      participant_field_center: activity.participantData.fieldCenter.acronym,//TODO review center participant
      mode: activity.mode,
      type: '',// TODO review
      category: activity.category.name,
      participant_field_center_by_activity: activity.participantData.fieldCenter.acronym,//TODO review participant_field_center
      interviewer: activityInfo.activityInterviewerEmail,
      current_status: activityInfo.currentStatusName,
      current_status_date: activityInfo.currentStatusDate,
      creation_date: activityInfo.activityCreationDate,
      paper_realization_date: activityInfo.activityPaperRealizationDate,
      paper_interviewer: activityInfo.activityPaperEmail,
      last_finalization_date: activityInfo.activityLastFinalizationDate,
      external_id: activityInfo.activityExternalId,
      obj: dictionary
    }, { upsert: true }).exec();

  } catch (e) {
    console.error(e)
    throw new InternalServerErrorResponse(e)
  }
}

function dictionaryCustomIdAndFillAnswer(activityFillingList: any, survey: any) {
  let surveyItemContainer: any[] = survey.surveyTemplate ? survey.surveyTemplate.itemContainer : []
  let answerAllQuestion: any
  let result: any[] = []

    surveyItemContainer.forEach((question: any) => {
      answerAllQuestion = extractionAnswerCustomID(activityFillingList, question)
      if (answerAllQuestion) {
        if (answerAllQuestion.differentQuestion) {
          // console.log(answerAllQuestion.differentQuestion)
          answerAllQuestion.differentQuestion.forEach((items: any) => {
            result.push(items)
          })
        } else {
          result.push({
            [question.customID]: answerAllQuestion.customID_answer,
            [question.customID + '_metadata']: answerAllQuestion.metadata_answer,
            [question.customID + '_comment']: answerAllQuestion.comment_answer
          })
        }
      }
    })

  console.log(result)

  // console.log(answerAllQuestion)
  // console.log(surveyItemContainer)
  // console.log(result)
  return result
}

function extractionAnswerCustomID(activityFillingList: any, question: any) {
  let customID_answer: string
  let metadata_answer: string
  let comment_answer: string
  let QuestionFill: any
  let differentQuestion: any[] = []

  QuestionFill = activityFillingList.find((activity: any) => activity.questionID === question.templateID)

  if (QuestionFill) {
    switch (QuestionFill.answer.type) {
      case "CalendarQuestion": {
        customID_answer = QuestionFill.answer.value ? QuestionFill.answer.value.value : ''
        metadata_answer = QuestionFill.metadata.value
        comment_answer = QuestionFill.comment
        break;
      }
      case "CheckboxQuestion": {
        differentQuestion = QuestionFill.answer.value.map((items: any) => {
          return {
            [items.option]: items.state ? 1 : 0
          }
        })
        differentQuestion.push({ [question.customID + '_metadata']: QuestionFill.metadata_answer || '' })
        differentQuestion.push({ [question.customID + '_comment']: QuestionFill.comment_answer || '' })
        break;
      }
      case "GridTextQuestion": {
        // console.log(QuestionFill.answer)
        break;
      }
      case "GridIntegerQuestion": {
        // console.log(QuestionFill.answer)
        break;
      }
      default: {
        // console.log(QuestionFill.answer)
        customID_answer = QuestionFill.answer.value
        metadata_answer = QuestionFill.metadata.value
        comment_answer = QuestionFill.comment
        break;
      }
    }

  }

  return differentQuestion.length != 0 ? { differentQuestion: differentQuestion } : {
    customID_answer: customID_answer || "",
    metadata_answer: metadata_answer || "",
    comment_answer: comment_answer || ""
  }
}

function buildActivityInfo(activity: any,) {
  let activityNavigationTracker: any = activity.navigationTracker // TODO review navigationTracker
  let activityNavigationTrackerItems: any = activityNavigationTracker.items.length != 0 ? activityNavigationTracker.items[activityNavigationTracker.items.length - 1] : {}
  let activityInterviews: any = activity.interviews.length != 0 ? activity.interviews[activity.interviews.length - 1] : null
  let activityStatusHistory: any = {}
  let activityLastFinalization: any
  let activityCreation: any
  let activityPaperRealization: any
  let activityLastFinalizationDate: string
  let activityPaperRealizationDate: string
  let activityPaperEmail: string
  let activityCreationDate: string
  let currentStatusDate: string
  let currentStatusName: string
  let activityInterviewerEmail: string = activityInterviews ? activityInterviews.interviewer.email : ''
  let activityExternalId: string = activity.externalID || ''
  const FINALIZED = 'FINALIZED'
  const INITIALIZED_OFFLINE = 'INITIALIZED_OFFLINE'
  const CREATED = 'CREATED'

  if (activity.statusHistory.length != 0) {
    activityStatusHistory = activity.statusHistory[activity.statusHistory.length - 1]
    activityLastFinalization = activity.statusHistory.reverse().find((items: any) => items.name == FINALIZED)
    activityCreation = activity.statusHistory.find((items: any) => items.name == CREATED)
    activityPaperRealization = activity.statusHistory.find((items: any) => items.name == INITIALIZED_OFFLINE)
  }

  activityLastFinalizationDate = activityLastFinalization ? activityLastFinalization.date : ''
  activityCreationDate = activityCreation ? activityCreation.date : ''
  currentStatusName = activityStatusHistory ? activityStatusHistory.name : ''
  currentStatusDate = activityStatusHistory ? activityStatusHistory.date : ''
  activityPaperRealizationDate = activityPaperRealization ? activityPaperRealization.date : ''
  activityPaperEmail = activityPaperRealization ? activityPaperRealization.user.email : ''

  // console.log(activityNavigationTrackerItems)
  // console.log(activityStatusHistory)
  // console.log(activityInterviews)
  // console.log("Finalization:" + activityLastFinalizationDate)
  // console.log(activityCreationDate)
  // console.log("Email" + activityInterviewerEmail)

  return {
    currentStatusName: currentStatusName,
    currentStatusDate: currentStatusDate,
    activityInterviewerEmail: activityInterviewerEmail,
    activityCreationDate: activityCreationDate,
    activityLastFinalizationDate: activityLastFinalizationDate,
    activityPaperRealizationDate: activityPaperRealizationDate,
    activityPaperEmail: activityPaperEmail,
    activityExternalId
  }
}

export default new ExtrationService()
