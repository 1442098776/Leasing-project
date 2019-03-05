// var express=require("express");
// var app = require('express')(),
//     server=require('http').createServer(app);
//     server.listen(8880);
//     app.use(express.static("./dist"));
//     app.get('/',function(req,res){
//         res.sendFile(__dirname+'/index');
//     })
const express = require('express') 
const path = require('path') 
const app = express() 
app.use(express.static(path.join(__dirname, 'dist'))) 
app.listen(3001,() => { 
 console.log('app listening on port 3001.') 
}) 