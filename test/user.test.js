const request = require('supertest')
const app = require('./server')

afterAll((done) => {
    done()
})

describe('User', () => {
    test('List User', async () => {
        const res = await request(app).get('/api/user')
        //expect(res.statusCode).toEqua(200)
        expect(res.status).toBe(200)
    })
})