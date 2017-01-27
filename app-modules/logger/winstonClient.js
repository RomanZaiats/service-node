const service = {};

service.init = (settings, winston, fs) => {
  if (!fs.existsSync(settings.path)) {
    fs.mkdirSync(settings.path);
  }

  const tsFormat = () => (new Date()).toString();
  return new (winston.Logger)({
    transports: [
      new (winston.transports.File)({
        filename: `${settings.path}\\${settings.filename}`,
        timestamp: tsFormat,
        maxsize: 5242880
      })
    ]
  });
};

exports.init = (settings, winston, fs) => {
  const instance = service.init(settings, winston, fs);
  return instance;
};

