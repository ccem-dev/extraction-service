import IResponse, { InternalServerErrorResponse, NotFoundResponse, SuccessResponse, NotAcceptableResponse } from '../utils/response';
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
      if (!ObjectId.isValid(activityId)) {
        return new NotAcceptableResponse();
      }

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

          return new SuccessResponse(activity);
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
      if (!ObjectId.isValid(activityId)) {
        return new NotAcceptableResponse();
      }

      resultActivity = await ActivityModel.findOne({
        '_id': ObjectId(activityId), 'isDiscarded': false
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
      throw new InternalServerErrorResponse(e)
    }
  }

  async remove(activityId: string): Promise<IResponse> {
    try {
      if (!ObjectId.isValid(activityId)) {
        return new NotAcceptableResponse();
      }

      let deleteResult = await ExtractionModel.deleteOne({ "activityId": new ObjectId(activityId) });
    } catch (e) {
      throw new InternalServerErrorResponse(e)
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

function attributeQuestion(customID: string, answerValue: any, metadataValue: string, commentValue: string, option: boolean): any[] {
  let answerData: any[] = []
  if (option) {
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

  if (skipp) {
    questionAnswer = skipp
  } else {
    QuestionFill = activityFillingList.find((activity: any) => activity.questionID === question.templateID)

    if (QuestionFill) {
      const metadata = metadataOptions(QuestionFill.metadata.value, question)
      questionAnswer = getQuestionItems(QuestionFill, question, metadata)
    }
  }

  return questionAnswer
}

function getQuestionItems(questionFill: any, question: any, metadataQuestion: string): any {
  let questionItems: any[] = []
  let questionType: string = questionFill ? questionFill.answer.type : question.objectType
  let questionAnswer: string = ''
  let questionComment: string = ''
  let optionAnswer: boolean = true

  switch (questionType) {
    case ActivityEnum.CALENDAR_QUESTION: {
      if (questionFill) {
        questionAnswer = questionFill.answer.value ? questionFill.answer.value.value : null
        questionComment = questionFill.comment
      }
      questionItems = attributeQuestion(question.customID, questionAnswer, metadataQuestion, questionComment, optionAnswer)
      break;
    }
    case ActivityEnum.SINGLE_SELECTION_QUESTION: {
      if (questionFill) {
        questionAnswer = getSingleSelectionExtractionValue(questionFill.answer.value, question)
        questionComment = questionFill.comment
      }
      questionItems = attributeQuestion(question.customID, questionAnswer, metadataQuestion, questionComment, optionAnswer)
      break;
    }
    case ActivityEnum.FILE_UPLOAD_QUESTION: {
      let fileName: string = ''
      if (questionFill) {
        if (questionFill.answer.value) {
          questionFill.answer.value.forEach((items: any, index: number) => {
            if (questionFill.answer.value.length - 1 == index) {
              fileName = fileName.concat(items.name)
            } else {
              fileName = fileName.concat(items.name + ',')
            }
          })
        }
        questionComment = questionFill.comment
      }
      questionItems = questionItems.concat(attributeQuestion(question.customID, fileName, metadataQuestion, questionComment, optionAnswer))
      break;
    }
    case ActivityEnum.CHECKBOX_QUESTION: {
      optionAnswer = false
      if (questionFill) {
        if (questionFill.answer.value) {
          questionItems = questionFill.answer.value.map((items: any) => {
            return {
              [items.option]: items.state ? '1' : '0'
            }
          })
        }
      } else {
        if (question.options) {
          questionItems = question.options.map((option: any) => {
            if (option.customOptionID) {
              return {
                [option.customOptionID]: ''
              }
            }
          })
        }
      }
      questionItems = questionItems.concat(attributeQuestion(question.customID, questionAnswer, metadataQuestion, questionComment, optionAnswer))
      break;
    }
    case ActivityEnum.GRID_TEXT_QUESTION: {
      optionAnswer = false
      if (questionFill) {
        if (questionFill.answer.value) {
          questionFill.answer.value.forEach((item: any) => {
            questionItems = item.map((items: any) => {
              return {
                [items.gridText]: items.value ? items.value : ''
              }
            })
          })
        }
      } else {
        if (question.lines) {
          question.lines.forEach((line: any) => {
            questionItems = line.gridTextList.map((items: any) => {
              if (items) {
                return {
                  [items.customID]: ''
                }
              }
            })
          })
        }
      }
      questionItems = questionItems.concat(attributeQuestion(question.customID, questionAnswer, metadataQuestion, questionComment, optionAnswer))
      break;
    }
    case ActivityEnum.GRID_INTEGER_QUESTION: {
      optionAnswer = false
      if (questionFill) {
        if (questionFill.answer.value) {
          questionFill.answer.value.forEach((item: any) => {
            questionItems = item.map((items: any) => {
              return {
                [items.customID]: items.value ? items.value.toString() : ''
              }
            })
          })
        }
      } else {
        if (question.lines) {
          question.lines.forEach((line: any) => {
            questionItems = line.gridIntegerList.map((items: any) => {
              if (items) {
                return {
                  [items.customID]: ''
                }
              }
            })
          })
        }
      }
      questionItems = questionItems.concat(attributeQuestion(question.customID, questionAnswer, metadataQuestion, questionComment, optionAnswer))
      break;
    }
    case ActivityEnum.TEXT_ITEM: {
      break;
    }
    case ActivityEnum.IMAGE_ITEM: {
      break;
    }
    default: {
      if (questionFill) {
        questionAnswer = questionFill.answer ? questionFill.answer.value : null
        questionComment = questionFill.comment
      }
      questionItems = attributeQuestion(question.customID, questionAnswer, metadataQuestion, questionComment, optionAnswer)
      break;
    }
  }
  return questionItems
}

function navigationItems(activityNavigationTrackerItems: any, questionID: string) {
  return activityNavigationTrackerItems.find((items: any) => items.id == questionID)
}

function skippAnswer(activityNavigationTrackerItems: any, question: any): any {
  let NavigationItems: any

  // console.log(activityNavigationTrackerItems)
  console.log(question.templateID)

  NavigationItems = navigationItems(activityNavigationTrackerItems, question.templateID)

  if (NavigationItems.state == ActivityEnum.SKIPPED) {
    return getQuestionItems(null, question, ActivityEnum.SKIPPED_ANSWER)
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
