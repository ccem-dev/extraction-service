import * as mongoose from "mongoose";
import ExtractionSchema from "./Schema";

const ModelName = 'ExtractionActivity';
const CollectionName = 'Extraction-activity';

let ExtractionModel = mongoose.model(ModelName, ExtractionSchema, CollectionName);

// ExtractionModel.discriminator<IExtractionActivity>('ExtractionActivity',ExtractionActivity);

export default ExtractionModel;
