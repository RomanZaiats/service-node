'use strict';

const fs = require('fs');
const yaml = require('js-yaml');

class ConfigProvider {
  get currentConfig() {
    return this._currentConfig;
  }

  constructor() {
    this._currentConfig = this.initializeConfig();
  }

  getConfigs() {
    return this._currentConfig;
  }

  initializeConfig() {
    const that = this;
    console.log('Reloading configurations.');

    const logConfig = yaml.safeLoad(
      fs.readFileSync('./config/development.logger.settings.yaml', 'utf8'));
    const logConfigJson = JSON.stringify(logConfig, null, 4);

    return {
      logger: logConfig,
    };
  }
}

module.exports = ConfigProvider;
