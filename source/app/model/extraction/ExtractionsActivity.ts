import { getModelForClass, prop } from "@typegoose/typegoose";

class Extractions {
  @prop({ required: true })
  public acronym?: string;

  @prop({ required: true })
  public activityId?: string;
}

const ExtractionModel = getModelForClass(Extractions);

export default ExtractionModel;
