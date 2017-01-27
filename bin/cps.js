const app = require('../app');
const routesService = require('../routes');
const fs = require('fs');

const ConfigProvider = require('../config/app-config-provider');

const config = (new ConfigProvider()).getConfigs();
const logger = require('../app-modules/logger').init(config.logger);

 const routes = routesService.init(logger);  
  const server = app.init(routes);
  server.set('port', process.env.PORT || 3000);
  server.timeout = 1200000;
  const host = server.listen(server.get('port'), () => {
    logger.info(`Express server listening on port ${host.address().port}`);
        console.log( 'Express has started' ); 
    });