import request from 'supertest'
import ActivityExtractionRouter from '../../../app/routes/ActivityExtractionRouter'

describe('ActivityExtractionRouter.ts Tests', () => {

  it('should execute create extraction activity ', async done => {
    request(ActivityExtractionRouter)
      .put(`/activity`)
      .send("{}")
      .expect(200)

    done()
  })

  it('should execute remove extraction activity ', async done => {
    request(ActivityExtractionRouter)
      .delete(`/activity`)
      .send("{}")
      .expect(200)

    done()
  })
})

