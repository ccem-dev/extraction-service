import { Router } from 'express';
import PipelineController from "../../app/controllers/PipelineController";

const  PipelineRouter = Router();
PipelineRouter.get("/json/:pipelineName", PipelineController.performAsJson);

export default PipelineRouter;
