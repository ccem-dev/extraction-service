import { Router } from 'express';
import PipelineController from "../../app/controllers/PipelineController";

const  PipelineRouter = Router();
PipelineRouter.get("/json", PipelineController.performAsJson);
PipelineRouter.get("/csv", PipelineController.performAsCsv);

export default PipelineRouter;
