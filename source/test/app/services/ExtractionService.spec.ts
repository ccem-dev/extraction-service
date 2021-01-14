import ExtractionService from '../../../app/services/ExtractionService'
import ActivityModel from '../../../app/models/activity/Model'
import SurveyModel from '../../../app/models/survey/Model'
import ParticipantModel from '../../../app/models/participant/Model'
import ExtractionModel from '../../../app/models/extractions_controllers/Model'
import data from "../../data/json-importer"
import IResponse, { InternalServerErrorResponse, NotFoundResponse, SuccessResponse, NotAcceptableResponse } from '../../../app/utils/response';

let PARTICIPANT = data.participant
let SURVEY = data.survey
let ACTIVITY = data.activity

jest.mock('../../../app/models/activity/Model.ts')

describe('ExtractionService.ts Tests', () => {
  const activityId = '5a38062628f10d1043711079'
  const acronym = 'ATX'
  const version = 80
  const rn = 123456

  it("getActivityMethod return values activity", async () => {
    try {
      const mockActivity = ActivityModel as jest.Mocked<typeof ActivityModel>
      mockActivity.findOne.mockResolvedValue(ACTIVITY)
      const spy = jest.spyOn(mockActivity, 'findOne')
      await ExtractionService.getActivity(activityId)
      expect(spy).toHaveBeenCalled()

      spy.mockRestore();
    } catch (e) {
      expect(e).toEqual(new InternalServerErrorResponse());
    }
  })

  it("getSurveyMethod return values survey", () => {
    const spy = jest.spyOn(SurveyModel, 'findOne').mockImplementation((items: any): any => { return Promise.resolve(SURVEY) });
    ExtractionService.getSurvey(acronym, version)
    expect(spy).toHaveBeenCalled()

    spy.mockRestore();
  })

  it("getParticipantMethod return values participant", () => {
    const spy = jest.spyOn(ParticipantModel, 'findOne').mockImplementation((items: any): any => { return Promise.resolve(PARTICIPANT) });
    ExtractionService.getParticipant(rn)
    expect(spy).toHaveBeenCalled()

    spy.mockRestore();
  })

  it("createExtractionMethod create values extraction", async () => {
    const mockActivity = ActivityModel as jest.Mocked<typeof ActivityModel>
    mockActivity.findOne.mockResolvedValue(ACTIVITY)
    const spyExtraction = jest.spyOn(ExtractionModel, 'updateOne').mockImplementation((items: any): any => { return Promise.resolve({}) });
    const spyActivity = jest.spyOn(mockActivity, 'findOne')
    const spyParticipant = jest.spyOn(ParticipantModel, 'findOne').mockResolvedValue(PARTICIPANT);
    const spySurvey = jest.spyOn(SurveyModel, 'findOne').mockResolvedValue(SURVEY);

    await expect(ExtractionService.create(activityId)).resolves.toEqual({ "body": { "data": true }, "code": 200 });
    expect(spyActivity).toHaveBeenCalled()
    expect(spyParticipant).toHaveBeenCalled()
    expect(spySurvey).toHaveBeenCalled()
    expect(spyExtraction).toHaveBeenCalled()

    spyActivity.mockRestore();
    spyParticipant.mockRestore();
    spySurvey.mockRestore();
    spyExtraction.mockRestore();
  })

  it("removeMethod return values participant", () => {
    const spy = jest.spyOn(ExtractionModel, 'deleteOne').mockImplementation((items: any): any => { return Promise.resolve({}) });
    ExtractionService.remove(activityId)
    expect(spy).toHaveBeenCalled()

    spy.mockRestore();
  })

})
