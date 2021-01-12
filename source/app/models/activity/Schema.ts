import { prop, modelOptions } from "@typegoose/typegoose";

@modelOptions({ schemaOptions: { collection: 'activity' }, options: { automaticName: true } })
class Activity { }

export default Activity;
