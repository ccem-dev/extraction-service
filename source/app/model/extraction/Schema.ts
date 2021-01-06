import { prop } from "@typegoose/typegoose";
import { Types } from "mongoose";
import ObjectId = Types.ObjectId;

interface Dic {
  [key: string]: Object[]
}

class Extraction {
  @prop({ required: true })
  public activityId?: ObjectId;

  @prop({ required: true })
  public acronym?: string;

  @prop({ required: true })
  public version?: number;

  @prop({ required: true })
  public recruitmentNumber?: number;

  @prop()
  public participant_field_center?: string;

  @prop({ required: true })
  public mode?: string;

  @prop()
  public type?: string;

  @prop({ required: true })
  public category?: string

  @prop({ required: true })
  public participant_field_center_by_activity?: string

  @prop()
  public interviewer?: string

  @prop({ required: true })
  public current_status?: string

  @prop({ required: true })
  public current_status_date?: string
  // "2018-07-11T14:26:26.775",

  @prop({ required: true })
  public creation_date?: string
  // "2017-11-24T14:33:28.837",

  @prop()
  public paper_realization_date?: string
  // "2017-04-05T14:31:50.259",

  @prop()
  public paper_interviewer?: string

  @prop()
  public last_finalization_date?: string
  // "2018-07-11T14:26:26.775",
  @prop()
  public external_id?: string

  @prop({ required: true })
  public obj: Dic = {};
}

export default Extraction;
