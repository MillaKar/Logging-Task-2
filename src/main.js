const express = require('express');
const logger = require('./logger');
const routes = require('./routes');

const app = express();
const PORT = 3000;

logger.info('[MAIN] Starting');

app.use('/', routes);

const server = app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

process.on('SIGNIT', () => {
    logger.info('[MAIN] Stopping');
    server.close(() => process.exit(0));
});
