class ActivityExtractions {
  private activityId?: string;
  private acronym?: string;
  private version?: number;
  private recruitment_number?: string;
  private participant_field_center?: string;
  private mode?: string;
  private type?: string;
  private category?: string;
  private participant_field_center_by_activity?: string;
  private interviewer?: string;
  private current_status?: string;
  private current_status_date?: string;
  private creation_date?: string;
  private paper_realization_date?: string;
  private paper_interviewer?: string;
  private last_finalization_date?: string;
  private external_id?: string;
  private variables?: any;

  constructor(id?: string, acronym?: string, version?: number, recruitmentNumber?: string,
    participant_field_center?: string, mode?: string, category?: string, participant_field_center_by_activity?: string,
    interviewer?: string, current_status?: string, current_status_date?: string, creation_date?: string, paper_realization_date?: string,
    paper_interviewer?: string, last_finalization_date?: string, external_id?: string, type?: string, variables?: any) {
    this.activityId = id;
    this.acronym = acronym;
    this.version = version;
    this.recruitment_number = recruitmentNumber;
    this.participant_field_center = participant_field_center;
    this.mode = mode;
    this.type = type || '';
    this.category = category;
    this.participant_field_center_by_activity = participant_field_center_by_activity;
    this.interviewer = interviewer || '';
    this.current_status = current_status;
    this.current_status_date = current_status_date;
    this.creation_date = creation_date;
    this.paper_realization_date = paper_realization_date || '';
    this.paper_interviewer = paper_interviewer || '';
    this.last_finalization_date = last_finalization_date || '';
    this.external_id = external_id || '';
    this.variables = variables;
  }

  public static fromJson(items: any) {
    let extractions: any = new ActivityExtractions();
    for (let index in items) {
      if (extractions.hasOwnProperty(index)) {
        extractions[index] = items[index];
      }
    }
    return extractions;
  }

  public toJsonString() {
    return JSON.stringify(this);
  }

  public toJsonObject() {
    let clone = Object.assign({}, JSON.parse(this.toJsonString()));
    delete clone.variables;
    return Object.assign({}, clone, this.variables);

    // return Object.assign({}, {
    //   activityId: this.activityId,
    //   acronym: this.acronym,
    //   version: this.version,
    //   recruitment_number: this.recruitment_number,
    //   participant_field_center: this.participant_field_center,
    //   mode: this.mode,
    //   type: this.type,
    //   category: this.category,
    //   participant_field_center_by_activity: this.participant_field_center_by_activity,
    //   interviewer: this.interviewer,
    //   current_status: this.current_status,
    //   current_status_date: this.current_status_date ,
    //   creation_date: this.creation_date,
    //   paper_realization_date: this.paper_realization_date,
    //   paper_interviewer: this.paper_interviewer,
    //   last_finalization_date: this.last_finalization_date,
    //   external_id: this.external_id
    // }, this.variables);
  }

  public getActivityId() {
    return this.activityId;
  }

  public getAcronym() {
    return this.acronym;
  }

  public getVersion() {
    return this.version;
  }

  public getRecruitmentNumber() {
    return this.recruitment_number
  }

  public getParticipantFieldCenter() {
    return this.participant_field_center
  }

  public getMode() { return this.mode; }

  public getType() { return this.type; }

  public getCategory() { return this.category; }

  public getParticipantFieldCenterByActivity() { return this.participant_field_center_by_activity }

  public getInterview() { return this.interviewer }

  public getCurrentStatus() { return this.current_status }

  public getCurrentStatusDate() { return this.current_status_date }

  public getCreationDate() { return this.creation_date }

  public getPaperRealizationDate() { return this.paper_realization_date }

  public getPaperInterview() { return this.paper_interviewer }

  public getLastFinalizationDate() { return this.last_finalization_date }

  public getExternalId() { return this.external_id }

  public setVariables(variables: any) {
    this.variables = variables;
  }

  public getVariables() {
    return this.variables;
  }
}

export default ActivityExtractions;
