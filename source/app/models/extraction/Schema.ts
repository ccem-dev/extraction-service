import { prop } from "@typegoose/typegoose";
import { Types } from "mongoose";
import ObjectId = Types.ObjectId;

class Extractions {
  @prop({ required: true })
  public activityId?: ObjectId;

  @prop({ required: true })
  public customId?: string;

  @prop({ required: true })
  public value?: string;

}

export default Extractions;
