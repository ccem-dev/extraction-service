import ExtractionService from '../../../app/services/ExtractionService'
import ActivityModel from '../../../app/models/activity/Model'
import SurveyModel from '../../../app/models/survey/Model'
import ParticipantModel from '../../../app/models/participant/Model'
import ExtractionModel from '../../../app/models/extractions_controllers/Model'

describe('ExtractionService.ts Tests', function () {
  const activityId = '5a38062628f10d1043711079'
  const acronym = 'ATX'
  const version = 80
  const rn = 123456

  it("getActivityMethod return values activity", () => {
    const spy = jest.spyOn(ActivityModel, 'findOne').mockImplementation((items: any): any => { return Promise.resolve({}) });
    ExtractionService.getActivity(activityId)
    expect(spy).toHaveBeenCalled()

    spy.mockRestore();
  })

  it("getSurveyMethod return values survey", () => {
    const spy = jest.spyOn(SurveyModel, 'findOne').mockImplementation((items: any): any => { return Promise.resolve({}) });
    ExtractionService.getSurvey(acronym, version)
    expect(spy).toHaveBeenCalled()

    spy.mockRestore();
  })

  it("getParticipantMethod return values participant", () => {
    const spy = jest.spyOn(ParticipantModel, 'findOne').mockImplementation((items: any): any => { return Promise.resolve({}) });
    ExtractionService.getParticipant(rn)
    expect(spy).toHaveBeenCalled()

    spy.mockRestore();
  })

  xit("createExtractionMethod create values extraction", () => {
    const spy = jest.spyOn(ExtractionModel, 'updateOne').mockImplementation((items: any): any => { return Promise.resolve({}) });

    jest.spyOn(ActivityModel, 'findOne').mockImplementation((items: any): any => { return  Promise.resolve({})} );
    ExtractionService.create(activityId)
    expect(ActivityModel.findOne).toHaveBeenCalled()
    expect(spy).toHaveBeenCalled()

    spy.mockRestore();
  })

})
