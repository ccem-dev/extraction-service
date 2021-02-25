import { Router } from "express";
import RscriptController from "../controllers/RscriptController";

const RscriptRouter = Router();

RscriptRouter.put("/create", RscriptController.createOrUpdate);
RscriptRouter.get("/:name", RscriptController.get);
RscriptRouter.delete("/:name", RscriptController.delete);

export default RscriptRouter;