import Participant from "../participant/Schema"
import { getModelForClass } from "@typegoose/typegoose";
const ParticipantModel = getModelForClass(Participant);

export default ParticipantModel
