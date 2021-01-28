import { Router } from 'express';
import SurveyController from "../../app/controllers/SurveyController";

const  SurveyRouter = Router();
SurveyRouter.post("/rscript", SurveyController.performRscript);
SurveyRouter.get("/csv/:surveyId", SurveyController.performAsCsv);
SurveyRouter.get("/json/:surveyId", SurveyController.performAsJson);
SurveyRouter.get("/get-survey-activities-ids/:surveyId", SurveyController.getSurveyActivitiesIds);
SurveyRouter.get("/get-all-ids", SurveyController.getAllActivitiesIds);

export default SurveyRouter;
