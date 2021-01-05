import PipelineService from "../services/PipelineService";
import { Request, Response } from "express";

class PipelineController {
  perform(req: Request, res: Response): void {
    PipelineService.perform(req.params.pipelineName)
      .then(result => res.status(result.code).send(result.body))
      .catch(err => {
        console.error('erro:', err);
        res.status(err.code).send(err.body)
      });
  }
}

export default new PipelineController();