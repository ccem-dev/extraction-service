import ExtractionsControllers from "./Schema";
import { getModelForClass } from "@typegoose/typegoose";
const ExtractionsControllersModel = getModelForClass(ExtractionsControllers);

export default ExtractionsControllersModel
