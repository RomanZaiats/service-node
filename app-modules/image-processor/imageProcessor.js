const imageProcessor = {};

imageProcessor.init = (logger, fs, gm) => {
    this._logger = logger;
    this._fs = fs;
    this._gm = gm;
};

imageProcessor.putWatermark = (imagePath,outPath,watermarkPath, coordinates) => {
    this._logger.info('putWatermark function has started.')
    return new Promise((resolve, reject) =>{
        this._gm(imagePath).
        draw([`image Over ${coordinates.x},${coordinates.y} 0,0 "${watermarkPath}"`]).
        noProfile().
        write(outPath, (err) => {
            if(err){
                reject(err);
            }
            resolve('done!!!');
        });
    }).catch((error) => {
        console.log(error);
    });
};

exports.init = (logger, fs, gm) => {
    imageProcessor.init(logger, fs, gm);
    return imageProcessor;
};