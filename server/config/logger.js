const {
    createLogger,
    format,
    transports
} = require('winston');


const logger = createLogger({
    transports: [
        new transports.File({ filename: 'info.log', level: 'info', format: format.combine(format.timestamp(), format.json()) }),
        new transports.File({ filename: 'error.log', level: 'error', format: format.combine(format.timestamp(), format.json()) }),

    ],
});

module.exports = logger;