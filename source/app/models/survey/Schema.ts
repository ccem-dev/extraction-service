import { prop, modelOptions } from "@typegoose/typegoose";

@modelOptions({ schemaOptions: { collection: 'survey' }, options: { automaticName: true } })
class Survey { }

export default Survey;
