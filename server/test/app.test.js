const request = require('supertest');
const expect = require('chai').expect;
const app = require('../app');

const correctPayload = { message: 'hello world' };
const wrongPayload = { wrong: 'hello world' };

describe('Echo Request', () => {
    it('echoes the message', (done) => {
        request(app)
            .post('/')
            .send(correctPayload)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
                expect(res.body).to.be.a('object');
                expect(res.body).to.own.include(correctPayload);
                done(err);
            });
    });

    it('gives error message on failure', (done) => {
        request(app)
            .post('/')
            .send(wrongPayload)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .end(function (err, res) {
                expect(res.body).to.be.a('object');
                expect(res.body).to.include({ message: 'message is required' });
                done(err);
            });
    });

    it('gives error message on not found', (done) => {
        request(app)
            .post('/wrong-url')
            .send(wrongPayload)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404)
            .end(function (err, res) {
                expect(res.body).to.be.a('object');
                expect(res.body).to.have.property('message').to.contain('Page not found');
                done(err);
            });
    });
});

