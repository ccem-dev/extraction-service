import { Router } from 'express';
import PipelineController from "../../app/controllers/PipelineController";

const  PipelineRouter = Router();
PipelineRouter.get("/:pipelineName", PipelineController.perform);

export default PipelineRouter;
