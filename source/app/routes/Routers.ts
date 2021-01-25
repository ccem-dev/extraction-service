import { Router } from 'express';
import ExtractionRouter from "../routes/ExtractionRouter";
import PipelineRouter from "../routes/PipelineRouter";
import RscriptRouter from "./RscriptRouter";

const routes = Router();
routes.use("/extractions", ExtractionRouter);
routes.use("/pipeline", PipelineRouter);
routes.use("/rscript", RscriptRouter);

export default routes;
