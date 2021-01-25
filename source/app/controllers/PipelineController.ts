import PipelineService from "../services/PipelineService";
import { Request, Response } from "express";

class PipelineController {

  performRscript(req: Request, res: Response): void {
    PipelineService.performRscript(req.body.surveyId, req.body.RscriptName, req.body.controllFields)
      .then(result => res.status(result.code).send(result.body.data))
      .catch(err => res.status(err.code).send(err.body));
  }

  performAsJson(req: Request, res: Response): void {
    PipelineService.performAsJson(req.body.surveyId, req.body.controllFields)
      .then(result => res.status(result.code).send(result.body.data))
      .catch(err => res.status(err.code).send(err.body));
  }

  performAsCsv(req: Request, res: Response): void {
    PipelineService.performAsCsv(req.body.surveyId, req.body.controllFields)
      .then(result => res.status(result.code).send(result.body))
      .catch(err => res.status(err.code).send(err.body));
  }
}

export default new PipelineController();