var express = require('express');
var hostname = 'localhost';
var port = 3000;


var mongoose = require('mongoose');
var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };
var urlmongo = '###';
mongoose.connect(urlmongo, options);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur lors de la connexion')); 
db.once('open', function (){
    console.log("Connexion à la base OK"); 
});


var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

var myRouter = express.Router();
myRouter.route('/')
.all(function(req,res){
  res.json({message : 'Bienvenue sur l\'api'})
});

myRouter.route('/fiche')
.get(function(req,res){
    ficheTechnique.finf(function(err, fiches){
        if (err){
            res.send(err);
        }
        res.json(piscines);
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
app.use(myRouter);
app.listen(port,hostname, function(){
    console.log("ready");
})