//Imports Express router
const express = require('express');
const router = express.Router();
//Imports counter logic and logger
const counter = require('./counter');
const logger = require('./logger');

//Endpoint: GET /counter-increase (increases value and returns the updated value)
router.get('/counter-increase', (req, res) => {
    logger.info(`[ENDPOINT] GET '/counter-increase'`);
    const value = counter.increase();
    res.json({ counter: value });
});

//Endpoint: GET /counter-read (returns current counter value)
router.get('/counter-read', (req, res) => {
    logger.info(`[ENDPOINT] GET '/counter-read'`);
    const value = counter.read();
    res.json({ counter: value });
});

// Enpoint: GET /counter-reset (resets counter value to zero)
router.get('/counter-reset', (req, res) => {
    logger.info(`[ENDPOINT] GET '/counter-reset'`);
    const value = counter.reset();
    res.json({ counter: value });
});

//Exports router to be used by the main application
module.exports = router;
