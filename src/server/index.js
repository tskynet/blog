// Import et config d'express
var express = require('express');
var hostname = 'localhost';
var port = 3000;
var app = express();
var bdd = require('./bdd.js');
var router = require('./api/ficheAPI.js');

// Utilisation de body parser pour pouvoir parser les requetes http
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Démarage du serveur
app.use(router.myRouter);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.listen(port,hostname, function(){
    console.log("ready");
})