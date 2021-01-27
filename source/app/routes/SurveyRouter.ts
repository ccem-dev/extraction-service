import { Router } from 'express';
import SurveyController from "../../app/controllers/SurveyController";

const  SurveyRouter = Router();
SurveyRouter.post("/rscript", SurveyController.performRscript);
SurveyRouter.post("/csv/:surveyId", SurveyController.performAsCsv);
SurveyRouter.post("/json/:surveyId", SurveyController.performAsJson);

export default SurveyRouter;
