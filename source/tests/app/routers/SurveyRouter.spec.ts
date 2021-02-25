import request from 'supertest'
import SurveyRouter from '../../../app/routes/SurveyRouter'
import express from "express"

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use("/survey", SurveyRouter);

describe('SurveyRouter.ts Tests', () => {

  it('should execute create script R for survey', async done => {
    request(app)
      .post(`/rscript`)
      .send('{}')
      .expect(404, done);
  })

  it('should execute get csv ', async done => {
    request(app)
      .get("/rscript/name")
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(404, done);

  })

  it('should execute get json', async done => {
    request(app)
      .get("/rscript/name")
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(404, done);
  })
})

