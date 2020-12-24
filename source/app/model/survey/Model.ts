import Survey from "../survey/Schema";
import { getModelForClass } from "@typegoose/typegoose";
const SurveyModel = getModelForClass(Survey);

export default SurveyModel
