import IResponse, { InternalServerErrorResponse, NotFoundResponse, SuccessResponse, NotAcceptableResponse } from '../utils/response'
import ActivityEnum from "../enum/activityEnum"
import ElasticsearchService from "./ElasticsearchService"
import ActivityExtractions from "../models/activity/ActivityExtractionFactory"

class ActivityExtractionService {
  private readonly ACTIVITY_EXTRACTION_INDEX_SUFFIX = "extractions_survey_";

  getIndexName(surveyId: string) {
    return this.ACTIVITY_EXTRACTION_INDEX_SUFFIX + surveyId;
  }

  async create(extractions: any): Promise<IResponse> {
    let activityFillingList: any[]
    let activityNavigationTrackerItemsSkipped: any[]
    let surveyItemContainer: any[]
    let surveyId: string
    let dictionary: any

    try {
      if (!extractions.activity) {
        return new NotFoundResponse({ message: "Activity not found" })
      }

      let extraction: ActivityExtractions = ActivityExtractions.fromJson(extractions.activity)
      activityFillingList = this.jsonObject(extractions.activity.fillingList)
      activityNavigationTrackerItemsSkipped = extractions.activity.navigationTrackingItems

      if (!extractions.survey && !extractions.survey.itemContainer) {
        return new NotFoundResponse({ message: "Survey not found" })
      }

      surveyItemContainer = extractions.survey.itemContainer
      surveyId = extractions.survey.id
      dictionary = await this.dictionaryCustomIdAndValue(activityFillingList, activityNavigationTrackerItemsSkipped, surveyItemContainer)
      extraction.setVariables(dictionary)

      await this.createExtraction(surveyId, extraction)
      return new SuccessResponse()
    } catch (e) {
      console.error(e)
      return new InternalServerErrorResponse(e)
    }
  }

  async remove(surveyId: string, activityId: string): Promise<IResponse> {
    try {
      await ElasticsearchService.getClient().delete({
        index: this.getIndexName(surveyId),
        id: activityId,
        refresh: true
      })
      return new SuccessResponse()
    } catch (e) {
      if (e && e.meta && e.meta.statusCode == '404') {
        console.info(e.meta.body)
        return new NotFoundResponse()
      }
      console.error(e)
      return new InternalServerErrorResponse(e)
    }
  }

  private async createExtraction(surveyId: string, extractions: ActivityExtractions) {
    try {
      await ElasticsearchService.getClient().update({
        index: this.getIndexName(surveyId),
        id: extractions.getActivityId(),
        refresh: true,
        body: {
          doc: extractions.toJsonObject(),
          doc_as_upsert: true
        }
      })
    } catch (e) {
      console.error(e)
      throw new Error(e)
    }
  }

  private async dictionaryCustomIdAndValue(activityFillingList: any, activityNavigationTrackerItems: any, surveyItemContainer: any) {
    let answerAllQuestions: any = {}
    let answerQuestions: any[]

    if (surveyItemContainer.length != 0) {
      surveyItemContainer.forEach((question: any) => {
        answerQuestions = this.extractionAnswerCustomID(activityFillingList, activityNavigationTrackerItems, question)
        if (answerQuestions.length != 0) {
          answerQuestions.forEach((items: any) => {
            Object.assign(answerAllQuestions, items)
          })
        }
      })
    }

    return answerAllQuestions
  }

  private jsonObject(item: any) {
    return item ? JSON.parse(item) : null
  }

  private metadataOptions(value: string, question: any): string {
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

  private getSingleSelectionExtractionValue(answer: any, question: any) {
    let singleSelectionExtractionValue: string = ""

    if (question.options) {
      question.options.forEach((option: any) => {
        if (option.value.toString() == answer) {
          singleSelectionExtractionValue = option.extractionValue
        }
      })
    }

    return singleSelectionExtractionValue
  }

  private attributeQuestion(customId: string, answerValue: any, metadataValue: string, commentValue: string, option: boolean): any[] {
    let answerData: any[] = []
    if (option) {
      answerData.push({ [customId]: answerValue ? answerValue.toString() : '' })
    }

    answerData.push({ [customId + ActivityEnum.QUESTION_METADATA]: metadataValue ? metadataValue : '' })
    answerData.push({ [customId + ActivityEnum.QUESTION_COMMENT]: commentValue ? commentValue : '' })

    return answerData
  }

  private extractionAnswerCustomID(activityFillingList: any, activityNavigationTrackerItems: any, question: any): any {
    let questionAnswer: any[] = []
    let QuestionFill: any

    const skippy = this.skippyAnswer(activityNavigationTrackerItems, question)

    if (skippy) {
      questionAnswer = skippy
    } else {
      QuestionFill = activityFillingList.find((activity: any) => activity.questionID === question.templateID)

      if (QuestionFill) {
        const metadata = this.metadataOptions(QuestionFill.metadata.value, question)
        questionAnswer = this.getQuestionItems(QuestionFill, question, metadata)
      }
    }
    return questionAnswer
  }

  private getQuestionItems(questionFill: any, question: any, metadataQuestion: string): any {
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
        questionItems = this.attributeQuestion(question.customID, questionAnswer, metadataQuestion, questionComment, optionAnswer)
        break
      }
      case ActivityEnum.SINGLE_SELECTION_QUESTION: {
        if (questionFill) {
          questionAnswer = this.getSingleSelectionExtractionValue(questionFill.answer.value, question)
          questionComment = questionFill.comment
        }
        questionItems = this.attributeQuestion(question.customID, questionAnswer, metadataQuestion, questionComment, optionAnswer)
        break
      }
      case ActivityEnum.FILE_UPLOAD_QUESTION: {
        if (questionFill) {
          questionAnswer = this.getQuestionFileUploadItems(question, questionFill)
          questionComment = questionFill.comment
        }
        questionItems = questionItems.concat(this.attributeQuestion(question.customID, questionAnswer, metadataQuestion, questionComment, optionAnswer))
        break
      }
      case ActivityEnum.CHECKBOX_QUESTION: {
        optionAnswer = false
        questionItems = this.getQuestionCheckboxItems(question, questionFill)

        questionItems = questionItems.concat(this.attributeQuestion(question.customID, questionAnswer, metadataQuestion, questionComment, optionAnswer))
        break
      }
      case ActivityEnum.GRID_TEXT_QUESTION: {
        optionAnswer = false
        questionItems = this.getQuestionGridTextItems(question, questionFill)

        questionItems = questionItems.concat(this.attributeQuestion(question.customID, questionAnswer, metadataQuestion, questionComment, optionAnswer))
        break
      }
      case ActivityEnum.GRID_INTEGER_QUESTION: {
        optionAnswer = false
        questionItems = this.getQuestionGridIntegerItems(question, questionFill)

        questionItems = questionItems.concat(this.attributeQuestion(question.customID, questionAnswer, metadataQuestion, questionComment, optionAnswer))
        break
      }
      case ActivityEnum.TEXT_ITEM: {
        break
      }
      case ActivityEnum.IMAGE_ITEM: {
        break
      }
      default: {
        if (questionFill) {
          questionAnswer = questionFill.answer ? questionFill.answer.value : null
          questionComment = questionFill.comment
        }
        questionItems = this.attributeQuestion(question.customID, questionAnswer, metadataQuestion, questionComment, optionAnswer)
        break
      }
    }
    return questionItems
  }

  private getQuestionFileUploadItems(question: any, questionFill: any): string {
    let fileName: string = ''
    if (questionFill.answer.value) {
      questionFill.answer.value.forEach((items: any, index: number) => {
        if (questionFill.answer.value.length1 == index) {
          fileName = fileName.concat(items.name)
        } else {
          fileName = fileName.concat(items.name + ',')
        }
      })
    }
    return fileName
  }

  private getQuestionGridIntegerItems(question: any, questionFill: any): any[] {
    let questionItems: any[] = []
    if (questionFill && questionFill.answer.value) {
      questionFill.answer.value.forEach((item: any) => {
        questionItems = questionItems.concat(item.map((items: any) => {
          return {
            [items.customID]: items.value ? items.value.toString() : ''
          }
        }))
      })
    } else if (question.lines) {
      question.lines.forEach((line: any) => {
        questionItems = questionItems.concat(line.gridIntegerList.map((items: any) => {
          if (items) {
            return {
              [items.customID]: ''
            }
          }
        }))
      })
    }

    return questionItems
  }

  private getQuestionGridTextItems(question: any, questionFill: any): any[] {
    let questionItems: any[] = []
    if (questionFill && questionFill.answer.value) {
      questionFill.answer.value.forEach((item: any) => {
        questionItems = questionItems.concat(item.map((items: any) => {
          return {
            [items.gridText]: items.value ? items.value : ''
          }
        }))
      })
    } else if (question.lines) {
      question.lines.forEach((line: any) => {
        questionItems = questionItems.concat(line.gridTextList.map((items: any) => {
          if (items) {
            return {
              [items.customID]: ''
            }
          }
        }))
      })
    }

    return questionItems
  }

  private getQuestionCheckboxItems(question: any, questionFill: any): any[] {
    if (questionFill && questionFill.answer.value) {
      return questionFill.answer.value.map((items: any) => {
        return {
          [items.option]: items.state ? '1' : '0'
        }
      })
    } else if (question.options) {
      return question.options.map((option: any) => {
        if (option.customOptionID) {
          return {
            [option.customOptionID]: ''
          }
        }
      })
    }
  }

  private navigationItems(activityNavigationTrackerItems: any, questionID: string) {
    return activityNavigationTrackerItems.find((items: any) => items.id == questionID)
  }

  private skippyAnswer(activityNavigationTrackerItemsSkipped: any, question: any): any {
    let NavigationItem: any

    if (activityNavigationTrackerItemsSkipped.length == 0) {
      return null
    }

    NavigationItem = this.navigationItems(activityNavigationTrackerItemsSkipped, question.templateID)

    if (NavigationItem && NavigationItem.state == ActivityEnum.SKIPPED) {
      return this.getQuestionItems(null, question, ActivityEnum.SKIPPED_ANSWER)
    }
  }

}

export default new ActivityExtractionService()
