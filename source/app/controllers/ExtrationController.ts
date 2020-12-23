import IResponse from '../utils/response';
import ExtrationService from "../services/ExtrationService";
import { Request, Response } from "express";

export default class ExtrationController {
  static create(req: Request, res: Response): void {
    ExtrationService.create(req.params.activityId)
      .then(result => res.status(result.code).send(result.body))
      .catch(err => res.status(err.code).send(err.body));
  }

  static update(req: Request, res: Response): void {
    ExtrationService.update(req.params.activityId)
      .then(result => res.status(result.code).send(result.body))
      .catch(err => res.status(err.code).send(err.body));
  }

  static remove(req: Request, res: Response): void {
    ExtrationService.remove(req.params.activityId)
      .then(result => res.status(result.code).send(result.body))
      .catch(err => res.status(err.code).send(err.body));
  }
};
