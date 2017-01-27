const logger = require('./winstonClient');
const winston = require('winston');
const fs = require('fs');

exports.init = (settings) => {
  const instance = logger.init(settings, winston, fs);
  return instance;
};
