const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {
    describe('server test route', () => {
        it('should return 200 OK', async () => {
            const response = await request(server).get('/');
            expect(response.status).toEqual(200);
        })
        it('should return JSON object', async () => {
            const response = await request(server).get('/');
            expect(response.type).toEqual('application/json');
        })
    })
    describe('GET /artists', () => {
        it('return array', () => {
            return request(server)
                .get('/artists')
                .then(res => {
                    expect(Array.isArray(res.body)).toBe(true);
                })
        })
    })
    describe('POST /artists', () => {
        it('should insert a musician into the db', () => {
            return request(server)
                .post('/artists')
                .send({
                    name: "DMB"
                })
                .then(res => {
                    expect(res.body).toBe(9);
                })
        })
    })
    describe('POST /artists', () => {
        it('returns 200 ok', () => {
            return request(server)
                .post('/artists')
                .send({
                    name: "Bob Marley"
                })
                .then(res => {
                    expect(res.status).toBe(201);
                })
        })
    })
})