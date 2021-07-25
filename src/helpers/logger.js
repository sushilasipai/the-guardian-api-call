const winston = require("winston");

const logConfiguration = {
  transports: [
    //gives warning message on console
    new winston.transports.Console({
      level: "info",
    }),
    //saves error message on a file
    new winston.transports.File({
      level: "error",
      filename: "logs/errors.log",
    }),
  ],
};

const logger = winston.createLogger(logConfiguration);

module.exports = logger;
