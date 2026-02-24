//REST API integration tests. Tests Express endpoints using Supertest
const request = require('supertest');
const assert = require('assert');

// Imports Express application
const app = require('../src/main');

// Imports counter to reset state between tests
const counter = require('../src/counter');

describe('Counter REST API', () => {

    //Reset counter before every test to ensure independent execution
    beforeEach(() => {
        counter.reset();
    });

    //Tests reading initial counter value
    it('GET /counter-read should return 0 initially', async () => {
        const res = await request(app).get('/counter-read');

        assert.strictEqual(res.status, 200);
        assert.strictEqual(res.body.counter, 0);
    });

    //Tests counter increase endpoint
    it('GET /counter-increase should increase counter', async () => {
        const res = await request(app).get('/counter-increase');

        assert.strictEqual(res.status, 200);
        assert.strictEqual(res.body.counter, 1);
    });

    //Tests multiple increases
    it('should increase counter multiple times', async () => {
        await request(app).get('/counter-increase');
        const res = await request(app).get('/counter-increase');

        assert.strictEqual(res.body.counter, 2);
    });

    //Tests reset endpoint
    it('GET /counter-reset should reset counter', async () => {
        await request(app).get('/counter-increase');

        const res = await request(app).get('/counter-reset');

        assert.strictEqual(res.status, 200);
        assert.strictEqual(res.body.counter, 0);
    });

});