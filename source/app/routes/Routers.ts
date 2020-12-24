import { Router } from 'express'
import ExtractionRouter from "../routes/ExtractionRouter";

const routes = Router()
routes.use("/extractions", ExtractionRouter)

export default routes
