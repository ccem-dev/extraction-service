import { getModelForClass, prop, modelOptions } from "@typegoose/typegoose";

@modelOptions({ schemaOptions: { collection: 'survey' }, options: { automaticName: true } })
class Survey {}

const SurveyModel = getModelForClass(Survey);

export default SurveyModel;
