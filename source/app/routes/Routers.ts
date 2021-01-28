import { Router } from 'express'
import ActivityExtractionRouter from "./ActivityExtractionRouter";
import SurveyRouter from "../routes/SurveyRouter";
import RscriptRouter from "./RscriptRouter";

const routes = Router();
routes.use("/extractions", ActivityExtractionRouter);
routes.use("/survey", SurveyRouter);
routes.use("/rscript", RscriptRouter);

export default routes
