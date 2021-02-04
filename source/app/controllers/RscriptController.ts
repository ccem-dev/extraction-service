import RscriptService from "../services/RscriptService";
import { Request, Response} from "express";

class RscriptController {
  createOrUpdate(req: Request, res: Response): void {
    RscriptService.createOrUpdate(req.body.name, req.body.script)
      .then(result => res.status(result.code).send(result.body))
      .catch(err => res.status(err.code).send(err.body));
  }

  get(req: Request, res: Response): void {
    RscriptService.get(req.params.name)
      .then(result => res.status(result.code).send(result.body))
      .catch(err => res.status(err.code).send(err.body));
  }

  delete(req: Request, res: Response): void {
    RscriptService.delete(req.params.name)
      .then(result => res.status(result.code).send(result.body))
      .catch(err => res.status(err.code).send(err.body));
  }
}

export default new RscriptController();