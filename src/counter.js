// In-memory counting state (value resets when restarting)
let count = 0;
//Import logger for counter event logging
const logger = require('./logger');

//Reads current counter value
const read = () => {
    logger.info(`[COUNTER] read ${count}`);
    return count;
};

//Increases counter value by one and then returns the updated value
const increase = () => {
    count += 1;
    logger.info(`[COUNTER] increase ${count}`);
    return count;
};

//Resets the counter value to zero
const reset = () => {
    count = 0;
    logger.info(`[COUNTER] zeroed ${count}`);
    return count;
};

//Exports counter behaviours
module.exports = { read, increase, reset };