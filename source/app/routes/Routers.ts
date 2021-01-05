import { Router } from 'express';
import ExtractionRouter from "../routes/ExtractionRouter";
import PipelineRouter from "../routes/PipelineRouter";

const routes = Router();
routes.use("/extractions", ExtractionRouter);
routes.use("/pipeline", PipelineRouter);

export default routes;
