import ActivityExtractionService from "../services/ActivityExtractionService";
import { Request, Response } from "express";

class ActivityExtrationController {
  async create(req: Request, res: Response): Promise<void> {
    await ActivityExtractionService.create(req.body)
      .then(result => res.status(result.code).send(result.body))
      .catch(err => res.status(err.code).send(err.body));
  }

  async remove(req: Request, res: Response): Promise<void> {
    await ActivityExtractionService.remove(req.params.surveyId, req.params.activityId)
      .then(result => res.status(result.code).send(result.body))
      .catch(err => res.status(err.code).send(err.body));
  }
};

export default new ActivityExtrationController()
