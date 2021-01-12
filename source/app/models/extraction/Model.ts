import Extractions from "./Schema";
import { getModelForClass } from "@typegoose/typegoose";
const ExtractionsModel = getModelForClass(Extractions);

export default ExtractionsModel
