// Import et config d'express

var express = require('express');
var hostname = 'localhost';
var port = 3000;
var app = express();

// Import et config de mongoose
var mongoose = require('mongoose');
var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

// Url de connection mongodb
var urlmongo = '###';

// Connection a la BDD
mongoose.connect(urlmongo, options);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur lors de la connexion')); 
db.once('open', function (){
    console.log("Connexion à la base OK"); 
});

// Utilisation de body parser pour pouvoir parser les requetes http
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Schema de la BDD
var ficheTechniqueSchema = mongoose.Schema({
    titre: String, 
    soustitre: String 
   // point1:{
    //    titre: String,
   //     text: String
   // },
    //point2:{
    //    titre: String,
    //    text: String
//}, 
    //point3:{
//titre: String,
    //    text: String
//}, 
    //point4:{
    //    titre: String,
    //    text: String
    //}
});

var ficheTechnique = mongoose.model('ficheTechnique', ficheTechniqueSchema);

// Routeur de l'API
var myRouter = express.Router();

// Racine renvoyant un message de bienvenue peu importe la méthode utilisé
myRouter.route('/')
.all(function(req,res){
  res.json({message : 'Bienvenue sur l\'api'})
});

// API déstiné au fiche technique avec toute les methodes dont nous avons besoin (CRUD)
myRouter.route('/fiche')
.get(function(req,res){
    ficheTechnique.find(function(err, fiches){
        if (err){
            res.send(err);
        }
        res.json(fiches);
    });
})
.post(function(req,res){
    var fiche = new ficheTechnique();
    fiche.titre = req.body.titre;
    fiche.soustitre = req.body.soustitre;
   // fiche.point1.titre = req.body.point1.titre;
   // fiche.point1.text = req.body.point1.text;
   // fiche.point2.titre = req.body.point2.titre;
   // fiche.point2.text = req.body.point2.text;
  //  fiche.point3.titre = req.body.point3.titre;
   // fiche.point3.text = req.body.point3.text;
   // fiche.point4.titre = req.body.point4.titre;
   // fiche.point4.text = req.body.point4.text;
    fiche.save(function(err){
        if(err){
            res.send(err);
        }
        res.json({message: 'Stockée en bdd'});
    });
});

// Démarage du serveur
app.use(myRouter);
app.listen(port,hostname, function(){
    console.log("ready");
})