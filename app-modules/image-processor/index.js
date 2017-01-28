const fs = require('fs');
const gm = require('gm');

exports.init = (logger) => {
  const instance = require('./imageProcessor.js')
    .init(logger, fs, gm);
  return instance;
};
