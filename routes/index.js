const service = module.exports = {};

service.init = (logger, imageProcessor) => {
    const express = require('express');
    const router = express.Router();

    router.get('/', (req, res) => {        
        res.type('text/plain');        
        res.send('Content process servise'); 
    });

    router.get('/about', (req, res) => {        
        res.type('text/plain');        
        res.send('About'); 
    });

    router.post('/watermarkedImage', (req,res) => {
        imageProcessor.putWatermark(req.body.imagePath,
          req.body.outPath, req.body.watermarkPath,
          req.body.coordinates).then((data) => {
            if (data && data.length > 0) {
                res.status(200).send(data);
            } else {
                res.status(200).send([]);
            }}).catch((err) => {
                    logger.error(err);
                    res.status(500).send({
                    Status: 'Internal Server Error' 
                });
            });
    });

    return router;
};

exports.init = service.init;