import { prop } from "@typegoose/typegoose";

class Extraction {
  @prop({ required: true })
  public acronym?: string;

  @prop({ required: true })
  public activityId?: string;
}

export default Extraction;
