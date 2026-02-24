//Imports Express framework
const express = require('express');
//Imports application logger and routes
const logger = require('./logger');
const routes = require('./routes');

//Creates Express application
const app = express();
//Runs in port 3000
const PORT = 3000;

logger.info('[MAIN] Starting');

//Registers application routes
app.use('/', routes);

//Starts HTTP server
const server = app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

//Shutdown handler
process.on('SIGNIT', () => {
    logger.info('[MAIN] Stopping');
    server.close(() => process.exit(0));
});

module.exports = app;
