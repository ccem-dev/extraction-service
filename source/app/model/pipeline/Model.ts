import Pipeline from "./Schema";
import { getModelForClass } from '@typegoose/typegoose';

const PipelineModel = getModelForClass(Pipeline);

export default PipelineModel;
