import SurveyService from "../services/SurveyService";
import { Request, Response } from "express";

class SurveyController {

  performRscript(req: Request, res: Response): void {
    SurveyService.performRscript(req.body.surveyId, req.body.RscriptName)
      .then(result => res.status(result.code).send(result.body.data))
      .catch(err => res.status(err.code).send(err.body));
  }

  performAsJson(req: Request, res: Response): void {
    SurveyService.performAsJson(req.params.surveyId)
      .then(result => res.status(result.code).send(result.body.data))
      .catch(err => res.status(err.code).send(err.body));
  }

  performAsCsv(req: Request, res: Response): void {
    SurveyService.performAsCsv(req.params.surveyId)
      .then(result => res.status(result.code).send(result.body))
      .catch(err => res.status(err.code).send(err.body));
  }
}

export default new SurveyController();