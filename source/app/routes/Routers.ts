import { Router } from 'express';
import ExtractionRouter from "../routes/ExtractionRouter";
import SurveyRouter from "../routes/SurveyRouter";
import RscriptRouter from "./RscriptRouter";

const routes = Router();
routes.use("/extractions", ExtractionRouter);
routes.use("/survey", SurveyRouter);
routes.use("/rscript", RscriptRouter);

export default routes;
