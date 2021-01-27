import { Router } from 'express';
import SurveyController from "../../app/controllers/SurveyController";

const  SurveyRouter = Router();
SurveyRouter.post("/rscript", SurveyController.performRscript);
SurveyRouter.post("/json", SurveyController.performAsJson);
SurveyRouter.post("/csv", SurveyController.performAsCsv);

export default SurveyRouter;
