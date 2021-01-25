import { Router } from 'express';
import PipelineRouter from "../routes/PipelineRouter";
import RscriptRouter from "./RscriptRouter";

const routes = Router();
routes.use("/pipeline", PipelineRouter);
routes.use("/rscript", RscriptRouter);

export default routes;
