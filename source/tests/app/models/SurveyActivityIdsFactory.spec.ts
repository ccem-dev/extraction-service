import SurveyActivityIdsFactory from '../../../app/models/activity/SurveyActivityIdsFactory'

describe('SurveyActivityIdsFactory.ts Tests', () => {
  let surveyActivityIds: SurveyActivityIdsFactory = new SurveyActivityIdsFactory("123",["1234"]);

  it("getSurveyIdMethod should return the values ​​in surveyId", async () => {
    expect(surveyActivityIds.getSurveyId()).toEqual("123");
  });

  it("getActivityIdsMethod should return the values ​​in array activityIds", async () => {
    expect(surveyActivityIds.getActivityIds()).toEqual(["1234"]);
  });
});
