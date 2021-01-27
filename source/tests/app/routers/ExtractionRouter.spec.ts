import request from 'supertest'
import ExtractionRouter from '../../../app/routes/ActivityExtractionRouter'

describe('ExtractionRouter.ts Tests', () => {

  it('should execute create extraction activity ', async done => {
    request(ExtractionRouter)
      .put(`/activity`)
      .send("{}")
      .expect(200)

    done()
  })

  it('should execute remove extraction activity ', async done => {
    request(ExtractionRouter)
      .delete(`/activity`)
      .send("{}")
      .expect(200)

    done()
  })
})

