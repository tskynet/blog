var express = require('express');
var app = express();
var bdd = require('../bdd');
// Routeur de l'API
var myRouter = express.Router();


// Schema de la BDD
var ficheTechniqueSchema = bdd.mongoose.Schema({
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

var ficheTechnique = bdd.mongoose.model('ficheTechnique', ficheTechniqueSchema);
// Racine renvoyant un message de bienvenue peu importe la méthode utilisé
myRouter.route('/')
.all(function(req,res){
  res.json({message : 'Bienvenue sur l\'api'})
});

// API déstiné au fiche technique avec toute les methodes dont nous avons besoin (CRUD)
myRouter.route('/fiche')
// Obtenir la liste de toutes les fiches
.get(function(req,res){
    ficheTechnique.find(function(err, fiches){
        if (err){
            res.send(err);
        }
        res.json(fiches);
    });
})
// Ajouter une fiche
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

myRouter.route('/fiche/:fiche_id')
// Obtenir une fiche en particulier
.get(function(req,res){
    ficheTechnique.findById(req.params.fiche_id, function(err, fiche){
        if (err){
            res.send(err);
        }
            res.json(fiche);
    });
})
// Modifier une fiche
.put(function(req, res){
    ficheTechnique.findById(req.params.fiche_id, function(err, fiche){
        if (err){
            res.send(err);
        }
        fiche.titre = req.body.titre;
        fiche.soustitre = req.body.soustitre;
        fiche.save(function(err){
            if(err){
                res.send(err);
            }
            res.json({message: 'Mis a jour'});
        });
    });
})
// Supprimer une fiche
.delete(function(req,res){
    ficheTechnique.remove({_id: req.params.fiche_id}, function(err, fiche){
        if (err){
            res.send(err);
        }
        res.json({message: "Supprimé"})
    });
});

module.exports.myRouter = myRouter;