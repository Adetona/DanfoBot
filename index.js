'use strict';

// Imports dependencies and set up http server


const  express = require('express');
const app = express();
const path = require('path');



/*  app.get('/', function(req, res){
      res.send('Hi I am a messenger bot');
    });*/

    //assuming app is express Object.
app.get('/',function(req,res) {
    res.sendFile(path.join(__dirname+'/index.html'));
});


app.listen(process.env.PORT || 5000, () => console.log('DanfoBot is listening'));
