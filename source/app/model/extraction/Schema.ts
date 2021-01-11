import { prop } from "@typegoose/typegoose";
import { Types } from "mongoose";
import ObjectId = Types.ObjectId;

interface Dic {
  [key: string]: any[]
}

class Extraction {
  @prop({ required: true })
  public activityId?: ObjectId;

  @prop({ required: true })
  public acronym?: string;

  @prop({ required: true })
  public version?: string;

  @prop({ required: true })
  public recruitmentNumber?: string;

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

  @prop({ required: true })
  public creation_date?: string

  @prop()
  public paper_realization_date?: string

  @prop()
  public paper_interviewer?: string

  @prop()
  public last_finalization_date?: string

  @prop()
  public external_id?: string

  @prop({ required: true })
  public variables: Dic = {}
}

export default Extraction;
