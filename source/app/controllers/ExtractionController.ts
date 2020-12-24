import ExtractionService from "../services/ExtractionService";
import { Request, Response } from "express";

export default class ExtrationController {
  static create(req: Request, res: Response): void {
    ExtractionService.create(req.params.activityId)
      .then(result => res.status(result.code).send(result.body))
      .catch(err => res.status(err.code).send(err.body));
  }

  static remove(req: Request, res: Response): void {
    ExtractionService.remove(req.params.activityId)
      .then(result => res.status(result.code).send(result.body))
      .catch(err => res.status(err.code).send(err.body));
  }
};
