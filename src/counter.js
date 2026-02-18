let count = 0;
const logger = require('./logger');

const read = () => {
    logger.info(`[COUNTER] read ${count}`);
    return count;
};

const increase = () => {
    count += 1;
    logger.info(`[COUNTER] increase ${count}`);
    return count;
};

const reset = () => {
    count = 0;
    logger.info(`[COUNTER] zeroed ${count}`);
    return count;
};

module.exports = { read, increase, reset };