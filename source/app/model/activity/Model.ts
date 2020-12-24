import Activity from "../activity/Schema";
import { getModelForClass } from "@typegoose/typegoose";
const ActivityModel = getModelForClass(Activity);

export default ActivityModel
