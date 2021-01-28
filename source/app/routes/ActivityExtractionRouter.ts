import { Router } from 'express'
import ActivityExtractionController from "../controllers/ActivityExtractionController";
const  ActivityExtractionRouter = Router()
ActivityExtractionRouter.put("/activity", ActivityExtractionController.create)
ActivityExtractionRouter.delete("/activity/:surveyId/:activityId", ActivityExtractionController.remove)

export default ActivityExtractionRouter
