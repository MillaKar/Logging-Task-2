//Counter unit tests. Tests in-memory counter behaviour.
const assert = require('assert');

// Imports counter module
const counter = require('../src/counter');

describe('Counter functionality', () => {

    //Reset counter before each test to ensure independent test cases.
    beforeEach(() => {
        counter.reset();
    });

    //Counter should start from zero.
    it('should start from 0', () => {
        const value = counter.read();
        assert.strictEqual(value, 0);
    });

    //Counter should increase by one.
    it('should increase counter value', () => {
        counter.increase();
        const value = counter.read();

        assert.strictEqual(value, 1);
    });

    //Counter should increase multiple times.
    it('should increase counter multiple times', () => {
        counter.increase();
        counter.increase();

        const value = counter.read();
        assert.strictEqual(value, 2);
    });

    //Counter reset should set value to zero.
    it('should reset counter to 0', () => {
        counter.increase();
        counter.reset();

        const value = counter.read();
        assert.strictEqual(value, 0);
    });

});