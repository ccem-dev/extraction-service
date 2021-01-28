import ActivityExtractions from '../../../../app/models/activity/ActivityExtractionFactory'
import ActivityExtractionFactory from '../../../../app/models/activity/ActivityExtractionFactory'
import data from "../../../data/json-importer.test"

describe('ActivityExtractionFactory.ts Tests', () => {
  let activityAll = data.activity;
  let extraction: ActivityExtractions;

  beforeEach(() => {
    extraction = ActivityExtractionFactory.fromJson(activityAll);
  });

  it("fromJsonMethod must convert the values ​​to a ActivityExtractionFactory", async () => {
    expect(extraction).toBeInstanceOf(ActivityExtractionFactory);
  });

  it("toJsonStringMethod must convert the values ​​to a string", async () => {
    let activity: string = extraction.toJsonString();
    expect(activity).toBe(JSON.stringify(extraction));
  });

  it("toJsonObjectMethod must convert the values ​​to a object", async () => {
    let activityObj: object = extraction.toJsonObject();
    expect(activityObj).toBeInstanceOf(Object);
  });

  it("getActivityIdMethod should return the values ​​in id", async () => {
    expect(extraction.getActivityId()).toEqual("5a3aad9828f10d10437110de");
  });

  it("getAcronymMethod should return the values ​​in acronym", async () => {
    expect(extraction.getAcronym()).toEqual("ACTDC");
  });

  it("getCategoryMethod should return the values ​​in category", async () => {
    expect(extraction.getCategory()).toEqual("C0");
  });

  it("getCreationDateMethod should return the values ​​in creationDate", async () => {
    expect(extraction.getCreationDate()).toEqual("2020-12-18T16:55:55.511");
  });

  it("getCurrentStatusMethod should return the values ​​in currentStatus", async () => {
    expect(extraction.getCurrentStatus()).toEqual("FINALIZED");
  });

  it("getCurrentStatusDateMethod should return the values ​​in currentStatusDate", async () => {
    expect(extraction.getCurrentStatusDate()).toEqual("2020-12-18T16:59:41.188");
  });

  it("getExternalIdMethod should return the values ​​in externalId", async () => {
    expect(extraction.getExternalId()).toEqual("123");
  });

  it("getInterviewMethod should return the values ​​in interview", async () => {
    expect(extraction.getInterview()).toEqual("fulano@gmail.com");
  });

  it("getLastFinalizationDateMethod should return the values ​​in lastFinalizationDate", async () => {
    expect(extraction.getLastFinalizationDate()).toEqual("2020-12-18T16:55:55.511");
  });

  it("getModeMethod should return the values ​​in mode", async () => {
    expect(extraction.getMode()).toEqual("ONLINE");
  });

  it("getPaperInterviewMethod should return the values ​​in paperInterview", async () => {
    expect(extraction.getPaperInterview()).toEqual("");
  });

  it("getPaperRealizationDateMethod should return the values ​​in paperRealizationDate", async () => {
    expect(extraction.getPaperRealizationDate()).toEqual("");
  });

  it("getParticipantFieldCenterMethod should return the values ​​in participantFieldCenter", async () => {
    expect(extraction.getParticipantFieldCenter()).toEqual("RJ");
  });

  it("getParticipantFieldCenterByActivityMethod should return the values ​​in participantFieldCenterByActivity", async () => {
    expect(extraction.getParticipantFieldCenterByActivity()).toEqual("RJ");
  });

  it("getRecruitmentNumberMethod should return the values ​​in recruitmentNumber", async () => {
    expect(extraction.getRecruitmentNumber()).toEqual("5001007");
  });

  it("getTypeMethod should return the values ​​in type", async () => {
    expect(extraction.getType()).toEqual("");
  });

  it("getVersionMethod should return the values ​​in version", async () => {
    expect(extraction.getVersion()).toEqual(1);
  });

  it("setVariablesMethod should attribute values and getVariablesMethod should return the values ​​in version", async () => {
    let variables = {
      "ACTDC7": "32"
    };
    extraction.setVariables(variables);
    expect(extraction.getVariables()).toEqual(variables);
  });

});
