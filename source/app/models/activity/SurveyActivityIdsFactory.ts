class SurveyActivityIdsFactory {
  private surveyId: string;
  private activityIds: string[];

  constructor(surveyId: string, activityIds: string[]) {
    this.surveyId = surveyId;
    this.activityIds = activityIds;
  }

  getSurveyId(){
    return this.surveyId;
  }

  getActivityIds(){
    return this.activityIds;
  }
}

export default SurveyActivityIdsFactory;