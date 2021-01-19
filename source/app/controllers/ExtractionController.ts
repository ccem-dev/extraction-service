import ActivityExtractionService from "../services/ActivityExtractionService";
import { Request, Response } from "express";

class ExtrationController {
  create(req: Request, res: Response): void {
    ActivityExtractionService.create(req.body)
      .then(result => res.status(result.code).send(result.body))
      .catch(err => res.status(err.code).send(err.body));
  }

  remove(req: Request, res: Response): void {
    ActivityExtractionService.remove(req.params.surveyId, req.params.activityId)
      .then(result => res.status(result.code).send(result.body))
      .catch(err => res.status(err.code).send(err.body));
  }
};

export default new ExtrationController()
