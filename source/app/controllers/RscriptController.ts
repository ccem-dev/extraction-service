import RscriptService from "../services/RscriptService";
import { Request, Response} from "express";

class RscriptController {
  create(req: Request, res: Response): void {
    RscriptService.create(req.body.name, req.body.script)
      .then(result => res.status(result.code).send(result.body))
      .catch(err => res.status(err.code).send(err.body));
  }

  createDefault(req: Request, res: Response): void {
    console.log(req.body)
    RscriptService.createDefault(req.body.script)
      .then(result => res.status(result.code).send(result.body))
      .catch(err => res.status(err.code).send(err.body));
  }

  get(req: Request, res: Response): void {
    RscriptService.get(req.params.name)
      .then(result => res.status(result.code).send(result.body))
      .catch(err => res.status(err.code).send(err.body));
  }

  getDefault(req: Request, res: Response): void {
    RscriptService.getDefault()
      .then(result => res.status(result.code).send(result.body))
      .catch(err => res.status(err.code).send(err.body));
  }

  update(req: Request, res: Response): void {
    RscriptService.update(req.body.name, req.body.script)
      .then(result => res.status(result.code).send(result.body))
      .catch(err => res.status(err.code).send(err.body));
  }

  updateDefault(req: Request, res: Response): void {
    RscriptService.updateDefault(req.body.script)
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