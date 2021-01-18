import { Router } from 'express'
import ExtractionController from "../../app/controllers/ExtractionController";
const  ExtractionRouter = Router()
ExtractionRouter.put("/activity/create", ExtractionController.create)
ExtractionRouter.delete("/activity/remove/:surveyId/:activityId", ExtractionController.remove)

export default ExtractionRouter
