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
  res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    res.sendFile(path.join(__dirname+'/index.html'));
});

app.use(express.static('/'));
//app.use(express.static(__dirname + '/'));


app.listen(process.env.PORT || 5000, () => console.log('DanfoBot is listening at 5000'));
