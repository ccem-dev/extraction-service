import express, { Request, Response } from "express";
import ExtrationController from "../controllers/ExtrationController";
import ExtrationModel from "../model/extration/model";

export default class ExtrationRouter {
  public static initialize(app: express.Application) {
    let basePath: string = "/extration";
    let createPath: string = "/create";
    let updatePath: string = "/update";
    let removePath: string = "/remove";

    app.post(basePath + createPath + "/:activityId", async (req: Request, res: Response) => {

      await ExtrationController.create(req, res);

    });

    app.put(basePath + updatePath + "/:activityId", async (req: Request, res: Response) => {

      await ExtrationController.update(req, res);

    });

    app.delete(basePath + removePath + "/:activityId", async (req: Request, res: Response) => {

      await ExtrationController.remove(req, res);

    });
  }
};
