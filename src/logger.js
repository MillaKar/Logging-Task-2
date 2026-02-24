// Imports required Winston
const { createLogger, transports, format } = require('winston');

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp(), // adds timestamp
        format.json() // logs are in JSON
    ),
    transports: [
        // Prints logs to console
        new transports.Console(),
        // Stores error level logs
        new transports.File({ filename: 'logs/error.log', level: 'error' }),
        // Stores all logs
        new transports.File({ filename: 'logs/combine.log' })
    ]
});

//Exports logger for use in files
module.exports = logger;