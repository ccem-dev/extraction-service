import { Router } from 'express';
import PipelineController from "../../app/controllers/PipelineController";

const  PipelineRouter = Router();
PipelineRouter.post("/rscript", PipelineController.performRscript);
PipelineRouter.post("/json", PipelineController.performAsJson);
PipelineRouter.post("/csv", PipelineController.performAsCsv);

export default PipelineRouter;
