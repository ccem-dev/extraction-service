import request from 'supertest'
import ActivityExtractionRouter from '../../../app/routes/ActivityExtractionRouter'
import express from "express"

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use("/extractions", ActivityExtractionRouter);

describe('ActivityExtractionRouter.ts Tests', () => {

  it('should execute create extraction activity ', async done => {
    request(app)
      .put(`/activity`)
      .send("{}")
      .expect(404, done)
  })

  it('should execute remove extraction activity ', async done => {
    request(app)
      .delete(`/activity`)
      .send("{}")
      .expect(404, done)
  })
})

