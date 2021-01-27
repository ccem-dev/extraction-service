import { Router } from 'express'
import ExtractionController from "../../app/controllers/ExtractionController";
const  ExtractionRouter = Router()
ExtractionRouter.put("/activity", ExtractionController.create)
ExtractionRouter.delete("/activity/:surveyId/:activityId", ExtractionController.remove)

export default ExtractionRouter
