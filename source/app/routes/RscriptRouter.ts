import { Router } from "express";
import RscriptController from "../controllers/RscriptController";

const RscriptRouter = Router();

RscriptRouter.put("/create", RscriptController.create);
RscriptRouter.put("/create/default", RscriptController.createDefault);

RscriptRouter.get("/:name", RscriptController.get);
RscriptRouter.get("/default", RscriptController.getDefault);

RscriptRouter.put("/update", RscriptController.update);
RscriptRouter.put("/update/default", RscriptController.updateDefault);

RscriptRouter.delete("/:name", RscriptController.delete);

export default RscriptRouter;