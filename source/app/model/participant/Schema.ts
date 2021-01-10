import { prop, modelOptions } from "@typegoose/typegoose";

@modelOptions({ schemaOptions: { collection: 'participant' }, options: { automaticName: true } })
class Participant { }

export default Participant;
