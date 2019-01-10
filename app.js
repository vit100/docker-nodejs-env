const express = require('express');
require('dotenv').config();


var app = express();

app.get("/",(req,res,next)=>{
    var env = JSON.stringify(process.env);
    res.end(env);
});

app.listen(process.env.PORT || 100, ()=>{console.log(`Listening on port ${process.env.PORT ||100}`)});
