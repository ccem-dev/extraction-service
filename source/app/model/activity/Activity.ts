import { getModelForClass, prop, modelOptions } from "@typegoose/typegoose";

@modelOptions({ schemaOptions: { collection: 'activity' }, options: { automaticName: true } })
class Activity {}

const ActivityModel = getModelForClass(Activity);

export default ActivityModel;
