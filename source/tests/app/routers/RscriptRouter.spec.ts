import request from 'supertest'
import RscriptRouter from '../../../app/routes/RscriptRouter'
import express from "express"

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use("/rscript", RscriptRouter);

describe('RscriptRouter.ts Tests', () => {

  it('should execute create script R ', async done => {
    request(app)
      .put(`/create`)
      .expect(404, done);
  })

  it('should execute get script R ', async done => {
    request(app)
      .get("/rscript/name")
      .expect("Content-Type", /json/)
      .expect(404, done);
  })

  it('should execute remove script R', async done => {
    request(app)
      .delete(`/name`)
      .expect(404, done)
  })
})

