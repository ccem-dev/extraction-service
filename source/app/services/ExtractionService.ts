import IResponse, { InternalServerErrorResponse, NotFoundResponse, SuccessResponse } from '../utils/response';
import { Types } from "mongoose";
import ExtractionModel from "../model/extraction/Model";
import ActivityModel from "../model/activity/Model";
import SurveyModel from "../model/survey/Model";
import ObjectId = Types.ObjectId;
import ActivityEnum from "../enum/activityEnum"
import MetadataValueEnum from "../enum/metadataValueEnum"

class ExtrationService {
  async create(activityId: string): Promise<IResponse> {
    let dictionary
    let activity
    let survey
    let activityInfo
    let activityNavigationTracker: any
    let activityFillingList: any[]
    let activityNavigationTrackerItems: any[]

    try {
      activity = await this.getActivity(activityId)

      if (activity) {
        survey = await this.getSurvey(activity.surveyForm.acronym, activity.surveyForm.version)
        activityFillingList = activity.fillContainer ? activity.fillContainer.fillingList : []
        activityNavigationTracker = activity.navigationTracker
        activityNavigationTrackerItems = activityNavigationTracker.items.length != 0 ? activityNavigationTracker.items : null

        activityInfo = buildActivityInfo(activity)
        if (survey && activityFillingList.length != 0) {
          dictionary = dictionaryCustomIdAndFillAnswer(activityFillingList, activityNavigationTrackerItems, survey)
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

  async getActivity(activityId: string) {
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

  async getSurvey(acronym: string, version: number) {
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
      participant_field_center_by_activity: activity.participantData.fieldCenter.acronym,
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

function dictionaryCustomIdAndFillAnswer(activityFillingList: any, activityNavigationTrackerItems: any, survey: any) {
  let surveyItemContainer: any[] = survey.surveyTemplate ? survey.surveyTemplate.itemContainer : []
  let answerAllQuestion: any
  let result: any = {}

  surveyItemContainer.forEach((question: any) => {
    answerAllQuestion = extractionAnswerCustomID(activityFillingList, activityNavigationTrackerItems, question)
    if (answerAllQuestion.length != 0) {
      answerAllQuestion.forEach((items: any) => {
        Object.assign(result, items);
      })
    }
  })

  console.log(result)
  return result
}

function metadataOptions(value: string): string {
  let metadataValue: string
  switch (value) {
    case '1': {
      metadataValue = MetadataValueEnum.ONE
      break;
    }
    case '2': {
      metadataValue = MetadataValueEnum.TWO
      break;
    }
    case '3': {
      metadataValue = MetadataValueEnum.THREE
      break;
    }
    case '4': {
      metadataValue = MetadataValueEnum.FOUR
      break;
    }
    default: {
      metadataValue = ''
      break;
    }
  }

  return metadataValue
}

function extractionAnswerCustomID(activityFillingList: any, activityNavigationTrackerItems: any, question: any): any {
  let questionAnswer: any[] = []
  let QuestionFill: any

  const skipp = skippAnswer(activityNavigationTrackerItems, question.templateID)

  QuestionFill = activityFillingList.find((activity: any) => activity.questionID === question.templateID)

  if (QuestionFill) {
    const metadata = metadataOptions(QuestionFill.metadata.value)

    switch (QuestionFill.answer.type) {
      case ActivityEnum.CALENDAR_QUESTION: {
        questionAnswer.push({ [question.customID]: QuestionFill.answer.value ? QuestionFill.answer.value.value : '' })
        questionAnswer.push({ [question.customID + ActivityEnum.QUESTION_METADATA]: metadata })
        questionAnswer.push({ [question.customID + ActivityEnum.QUESTION_COMMENT]: QuestionFill.comment ? QuestionFill.comment : '' })

        break;
      }
      case ActivityEnum.CHECKBOX_QUESTION: {
        questionAnswer = QuestionFill.answer.value.map((items: any) => {
          return {
            [items.option]: items.state ? '1' : '0'
          }
        })
        questionAnswer.push({ [question.customID + ActivityEnum.QUESTION_METADATA]: metadata })
        questionAnswer.push({ [question.customID + ActivityEnum.QUESTION_COMMENT]: QuestionFill.comment ? QuestionFill.comment : '' })

        break;
      }
      case ActivityEnum.GRID_TEXT_QUESTION: {
        // console.log(QuestionFill.answer)
        break;
      }
      case ActivityEnum.GRID_INTEGER_QUESTION: {
        // console.log(QuestionFill.answer)
        break;
      }
      default: {
        questionAnswer.push({ [question.customID]: QuestionFill.answer.value ? QuestionFill.answer.value : '' })
        questionAnswer.push({ [question.customID + ActivityEnum.QUESTION_METADATA]: metadata })
        questionAnswer.push({ [question.customID + ActivityEnum.QUESTION_COMMENT]: QuestionFill.comment ? QuestionFill.comment : '' })

        break;
      }
    }
  }

  if (skipp) {
    if (question.options && question.objectType == ActivityEnum.CHECKBOX_QUESTION) {
      question.options.forEach((option: any) => {
        if (option.customOptionID) {
          questionAnswer.push({ [option.customOptionID]: '' })
        }
      })
    } else {
      questionAnswer.push({ [question.customID]: '' })
    }
    questionAnswer.push({ [question.customID + ActivityEnum.QUESTION_METADATA]: skipp })
    questionAnswer.push({ [question.customID + ActivityEnum.QUESTION_COMMENT]: '' })
  }

  return questionAnswer
}

function skippAnswer(activityNavigationTrackerItems: any, questionID: string): string {
  let NavigationItems: any

  // console.log(activityNavigationTrackerItems)
  console.log(questionID)

  NavigationItems = activityNavigationTrackerItems.find((items: any) => items.id == questionID)

  console.log(NavigationItems)
  return NavigationItems.state == ActivityEnum.SKIPPED ? MetadataValueEnum.SKIPPED_ANSWER : null
}

function buildActivityInfo(activity: any) {
  type ActivityInfo = {
    activityLastFinalizationDate: string,
    activityPaperRealizationDate: string,
    activityPaperEmail: string,
    activityCreationDate: string,
    currentStatusDate: string,
    currentStatusName: string,
    activityInterviewerEmail: string,
    activityExternalId: string
  }

  let activityInterviews: any = activity.interviews.length != 0 ? activity.interviews[activity.interviews.length - 1] : null
  let activityStatusHistory: any = {}
  let activityLastFinalization: any
  let activityCreation: any
  let activityPaperRealization: any

  if (activity.statusHistory.length != 0) {
    activityStatusHistory = activity.statusHistory[activity.statusHistory.length - 1]
    activityLastFinalization = activity.statusHistory.reverse().find((items: any) => items.name == ActivityEnum.FINALIZED)
    activityCreation = activity.statusHistory.find((items: any) => items.name == ActivityEnum.CREATED)
    activityPaperRealization = activity.statusHistory.find((items: any) => items.name == ActivityEnum.INITIALIZED_OFFLINE)
  }

  let buildActivityInfo: ActivityInfo = {
    activityLastFinalizationDate: activityLastFinalization ? activityLastFinalization.date : '',
    activityCreationDate: activityCreation ? activityCreation.date : '',
    currentStatusName: activityStatusHistory ? activityStatusHistory.name : '',
    currentStatusDate: activityStatusHistory ? activityStatusHistory.date : '',
    activityPaperRealizationDate: activityPaperRealization ? activityPaperRealization.date : '',
    activityPaperEmail: activityPaperRealization ? activityPaperRealization.user.email : '',
    activityInterviewerEmail: activityInterviews ? activityInterviews.interviewer.email : '',
    activityExternalId: activity.externalID ? activity.externalID : ''
  }

  return buildActivityInfo
}

export default new ExtrationService()
