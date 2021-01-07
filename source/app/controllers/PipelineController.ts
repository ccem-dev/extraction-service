import PipelineService from "../services/PipelineService";
import { Request, Response } from "express";

class PipelineController {
  performAsJson(req: Request, res: Response): void {
    PipelineService.performAsJson(req.params.pipelineName)
      .then(result => res.status(result.code).send(result.body))
      .catch(err => {
        console.error('erro:', err);
        res.status(err.code).send(err.body)
      });
  }

  performAsCsv(req: Request, res: Response): void {
    PipelineService.performAsCsv(req.params.pipelineName)
      .then(result => res.status(result.code).send(result.body))
      .catch(err => {
        console.error('erro:', err);
        res.status(err.code).send(err.body)
      });
  }
}

export default new PipelineController();