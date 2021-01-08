import IResponse, { InternalServerErrorResponse, NotFoundResponse, SuccessResponse } from '../utils/response';
import { Types } from "mongoose";
import ExtractionModel from "../model/extraction/Model";
import ActivityModel from "../model/activity/Model";
import SurveyModel from "../model/survey/Model";
import ObjectId = Types.ObjectId;
import ActivityEnum from "../enum/activityEnum"

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
        if (survey && activityFillingList.length != 0 && !activity.isDisabled) {
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

function metadataOptions(value: string, question: any): string {
  let metadataValue: string = ""

  if (question.metadata) {
    question.metadata.options.forEach((option: any) => {
      if (option.value.toString() == value) {
        metadataValue = option.extractionValue
      }
    })
  }

  return metadataValue
}

function getSingleSelectionExtractionValue(answer: any, question: any) {
  let singleSelectioExtractionValue: string = ""

  if (question.options) {
    question.options.forEach((option: any) => {
      if (option.value.toString() == answer) {
        singleSelectioExtractionValue = option.extractionValue
      }
    })
  }

  return singleSelectioExtractionValue
}

function attributeQuestion(customID: string, answerValue: any, metadataValue: string, commentValue: string): any[] {
  let answerData: any[] = []
  if (answerValue) {
    answerData.push({ [customID]: answerValue ? answerValue.toString() : '' })
  }
  answerData.push({ [customID + ActivityEnum.QUESTION_METADATA]: metadataValue ? metadataValue : '' })
  answerData.push({ [customID + ActivityEnum.QUESTION_COMMENT]: commentValue ? commentValue : '' })

  return answerData
}

function extractionAnswerCustomID(activityFillingList: any, activityNavigationTrackerItems: any, question: any): any {
  let questionAnswer: any[] = []
  let QuestionFill: any

  console.log(question.customID)

  const skipp = skippAnswer(activityNavigationTrackerItems, question)

  QuestionFill = activityFillingList.find((activity: any) => activity.questionID === question.templateID)

  if (QuestionFill) {
    const metadata = metadataOptions(QuestionFill.metadata.value, question)

    switch (QuestionFill.answer.type) {
      case ActivityEnum.FILE_UPLOAD_QUESTION: {
        let fileName: string = ''
        if (QuestionFill.answer.value) {
          QuestionFill.answer.value.forEach((items: any, index: number) => {
            if (QuestionFill.answer.value.length-1 == index) {
              fileName = fileName.concat(items.name)
            } else {
              fileName = fileName.concat(items.name + ',')
            }
          })
        }
        questionAnswer = questionAnswer.concat(attributeQuestion(question.customID, fileName, metadata, QuestionFill.comment))
        break;
      }
      case ActivityEnum.SINGLE_SELECTION_QUESTION: {
        questionAnswer = attributeQuestion(question.customID, getSingleSelectionExtractionValue(QuestionFill.answer.value, question), metadata, QuestionFill.comment)

        break;
      }
      case ActivityEnum.CALENDAR_QUESTION: {
        const value = QuestionFill.answer.value ? QuestionFill.answer.value.value : null
        questionAnswer = attributeQuestion(question.customID, value, metadata, QuestionFill.comment)
        break;
      }
      case ActivityEnum.CHECKBOX_QUESTION: {
        if (QuestionFill.answer.value) {
          questionAnswer = QuestionFill.answer.value.map((items: any) => {
            return {
              [items.option]: items.state ? '1' : '0'
            }
          })
        }
        questionAnswer = questionAnswer.concat(attributeQuestion(question.customID, null, metadata, QuestionFill.comment))
        break;
      }
      case ActivityEnum.GRID_TEXT_QUESTION: {
        if (QuestionFill.answer.value) {
          QuestionFill.answer.value.forEach((item: any) => {
            questionAnswer = item.map((items: any) => {
              return {
                [items.gridText]: items.value ? items.value : ''
              }
            })
          })
        }
        questionAnswer = questionAnswer.concat(attributeQuestion(question.customID, null, metadata, QuestionFill.comment))
        break;
      }
      case ActivityEnum.GRID_INTEGER_QUESTION: {
        console.log(QuestionFill.answer)
        if (QuestionFill.answer.value) {
          QuestionFill.answer.value.forEach((item: any) => {
            questionAnswer = item.map((items: any) => {
              return {
                [items.customID]: items.value ? items.value.toString() : ''
              }
            })
          })
        }
        questionAnswer = questionAnswer.concat(attributeQuestion(question.customID, null, metadata, QuestionFill.comment))
        break;
      }
      default: {
        questionAnswer = attributeQuestion(question.customID, QuestionFill.answer.value, metadata, QuestionFill.comment)
        break;
      }
    }
  }

  if (skipp) {
    questionAnswer = skipp
  }

  return questionAnswer
}

function skippAnswer(activityNavigationTrackerItems: any, question: any): any {
  let NavigationItems: any
  let questionSkipp: any[] = []

  // console.log(activityNavigationTrackerItems)
  console.log(question.templateID)

  NavigationItems = activityNavigationTrackerItems.find((items: any) => items.id == question.templateID)
  if (NavigationItems.state == ActivityEnum.SKIPPED) {
    switch (question.objectType) {
      case ActivityEnum.CHECKBOX_QUESTION: {
        if (question.options) {
          questionSkipp = question.options.map((option: any) => {
            if (option.customOptionID) {
              return {
                [option.customOptionID]: ''
              }
            }
          })
        }
        questionSkipp = questionSkipp.concat(attributeQuestion(question.customID, null, ActivityEnum.SKIPPED_ANSWER, null))
        break;
      }
      case ActivityEnum.GRID_TEXT_QUESTION: {
        if (question.lines) {
          question.lines.forEach((line: any) => {
            questionSkipp = line.gridTextList.map((items: any) => {
              if (items) {
                return {
                  [items.customID]: ''
                }
              }
            })
          })
        }
        questionSkipp = questionSkipp.concat(attributeQuestion(question.customID, null, ActivityEnum.SKIPPED_ANSWER, null))
        break;
      }
      case ActivityEnum.GRID_INTEGER_QUESTION: {
        if (question.lines) {
          question.lines.forEach((line: any) => {
            questionSkipp = line.gridIntegerList.map((items: any) => {
              if (items) {
                return {
                  [items.customID]: ''
                }
              }
            })
          })
        }
        questionSkipp = questionSkipp.concat(attributeQuestion(question.customID, null, ActivityEnum.SKIPPED_ANSWER, null))
        break;
      }
      case ActivityEnum.TEXT_ITEM: {
        break;
      }
      case ActivityEnum.IMAGE_ITEM: {
        break;
      }
      default: {
        questionSkipp = attributeQuestion(question.customID, null, ActivityEnum.SKIPPED_ANSWER, null)
        break;
      }
    }
    return questionSkipp
  }

  console.log(NavigationItems.state)

  return null
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
