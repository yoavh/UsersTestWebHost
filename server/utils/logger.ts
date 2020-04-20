import appRoot from 'app-root-path';
import winston from 'winston';
import dotenv from 'dotenv';
dotenv.config();

// define the custom settings for each transport (file, console)
const options = {
  file: {
    level: 'info',
    filename: `${appRoot}/logs/app.log`,
    handleExceptions: true,
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.logstash()
    ),
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    // colorize: false,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple()
    ),
  },
};

// instantiate a new Winston Logger with the settings defined above
const logger = winston.createLogger({
  levels: winston.config.syslog.levels,
  transports: [new winston.transports.File(options.file)],
  exitOnError: false, // do not exit on handled exceptions
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console(options.console));
}

// create a stream object with a 'write' function that will be used by `morgan`
// logger.stream = {
//   write: (message: string) => {
//     // use the 'info' log level so the output will be picked up by both transports (file and console)
//     logger.log('info', message);
//   },
// };

export default logger;
