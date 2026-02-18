const express = require('express');
const router = express.Router();
const counter = require('./counter');
const logger = require('./logger');

router.get('/counter-increase', (req, res) => {
    logger.info(`[ENDPOINT] GET '/counter-increase'`);
    const value = counter.increase();
    res.json({ counter: value });
});

router.get('/counter-read', (req, res) => {
    logger.info(`[ENDPOINT] GET '/counter-read'`);
    const value = counter.read();
    res.json({ counter: value });
});

router.get('/counter-reset', (req, res) => {
    logger.info(`[ENDPOINT] GET '/counter-reset'`);
    const value = counter.reset();
    res.json({ counter: value });
});

module.exports = router;
