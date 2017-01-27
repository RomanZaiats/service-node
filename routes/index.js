const service = module.exports = {};

service.init = (logger) => {
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

    return router;
};

exports.init = service.init;