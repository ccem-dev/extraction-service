import { Router } from 'express'
import ExtractionController from "../../app/controllers/ExtractionController";
const  ExtractionRouter = Router()
ExtractionRouter.put("/create/:activityId", ExtractionController.create)
ExtractionRouter.delete("/remove/:activityId", ExtractionController.remove)

export default ExtractionRouter
