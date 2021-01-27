import { Router } from 'express'
import ExtractionRouter from "./ActivityExtractionRouter";

const routes = Router()
routes.use("/extractions", ExtractionRouter)

export default routes
