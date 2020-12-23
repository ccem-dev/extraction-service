import express, { Request, Response } from "express";
import ExtractionController from "../../app/controllers/ExtractionController";

export default class ExtractionRouter {
  public static initialize(app: express.Application) {
    let basePath: string = "/extraction";
    let createPath: string = "/create";
    let removePath: string = "/remove";

    app.post(basePath + createPath + "/:activityId", async (req: Request, res: Response) => {

      await ExtractionController.create(req, res);

    });

    app.delete(basePath + removePath + "/:activityId", async (req: Request, res: Response) => {

      await ExtractionController.remove(req, res);

    });
  }
};
