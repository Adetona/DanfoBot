'use strict';

// Imports dependencies and set up http server


const  express = require('express');

const app = express();



  app.get('/', function(req, res){
      res.send('Hi I am a messenger bot');
    });


app.listen(process.env.PORT || 5000, () => console.log('DanfoBot is listening'));
