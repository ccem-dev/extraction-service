import * as mongoose from "mongoose";
import ExtrationSchema from "./Schema";

const ModelName = 'ExtrationActivity';
const CollectionName = 'extration-activity';

let ExtrationModel = mongoose.model(ModelName, ExtrationSchema, CollectionName);

// ExtrationModel.discriminator<IExtrationActivity>('ExtrationActivity',ExtrationActivity);

export default ExtrationModel;
