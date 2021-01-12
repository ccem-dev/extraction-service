import Extraction from "../extraction/Schema";
import { getModelForClass } from "@typegoose/typegoose";
const ExtractionModel = getModelForClass(Extraction);

export default ExtractionModel
