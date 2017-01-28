const service = module.exports = {};

service.init = (Routes) => {
    const express = require('express');
    const app = express();
    const BodyParser = require('body-parser');

    app.use(BodyParser.json());
    app.use(BodyParser.urlencoded({ extended: false }));

    app.use('/', Routes);

    // 404
    app.use((req, res)=>{
        res.type('text/plain');
        res.status(404); 
        res.send('404 — Not Found');
    });

    // 500
    app.use((err, req, res, next)=>{        
        console.error(err.stack);        
        res.type('text/plain');        
        res.status(500);        
        res.send('500 — Server error'); 
    }); 

    return app;
};

exports.init = service.init;