import PipelineService from "../services/PipelineService";
import { Request, Response } from "express";

class PipelineController {
  performAsJson(req: Request, res: Response): void {
    PipelineService.performAsJson(req.body.surveyId, req.body.Rscript)
      .then(result => res.status(result.code).send(result.body.data))
      .catch(err => {
        console.error('erro:', err);
        res.status(err.code).send(err.body)
      });
  }

  performAsCsv(req: Request, res: Response): void {
    PipelineService.performAsCsv(req.body.surveyId, req.body.Rscript)
      .then(result => res.status(result.code).send(result.body))
      .catch(err => {
        console.error('erro:', err);
        res.status(err.code).send(err.body)
      });
  }
}

export default new PipelineController();