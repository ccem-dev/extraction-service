import Rscript from "./Schema";
import {getModelForClass} from "@typegoose/typegoose";

const RscriptModel = getModelForClass(Rscript);

export default RscriptModel;