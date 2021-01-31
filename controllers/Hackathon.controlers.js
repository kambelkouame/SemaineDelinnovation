const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
const path = require('path');


const Hackathon = mongoose.model('Hackathon');
const Jetic = mongoose.model('Jetic');




// Inserer  de Nouveau Participant

function insertparticipant(req, res) {
    if(req.body.nomEquipe==""){
        res.jsonp({message:'monthLimit is empty'})
    }else if(req.body.niveau==""){
        res.jsonp({message:'weekLimit is empty'})
    }else if(req.body.nomChefEquipe==""){
        res.jsonp({message:'weekLimit is empty'})
    }else if(req.body.contactChefEquipe==""){
        res.jsonp({message:'weekLimit is empty'})
    }else if(req.body.emailChefEquipe==""){
        res.jsonp({message:'weekLimit is empty'})
    }else if(req.body.nomMembre1==""){
        res.jsonp({message:'weekLimit is empty'})
    }else if(req.body.prenomMembre1==""){
        res.jsonp({message:'weekLimit is empty'})
    }else if(req.body.emailMembre1==""){
        res.jsonp({message:'weekLimit is empty'})
    }else if(req.body.contactMembre1==""){
        res.jsonp({message:'weekLimit is empty'})
    }else if(req.body.nomMembre2==""){
        res.jsonp({message:'weekLimit is empty'})
    }else if(req.body.prenomMembre2==""){
        res.jsonp({message:'weekLimit is empty'})
    }else if(req.body.emailMembre2==""){
        res.jsonp({message:'weekLimit is empty'})
    }else if(req.body.contactMembre2==""){
        res.jsonp({message:'weekLimit is empty'})
    }else{
  
            
                    var hackathon = new Hackathon();
                    hackathon.nomEquipe = req.body.nomEquipe;
                    hackathon.niveau = req.body.niveau;
                    hackathon.nomChefEquipe = req.body.nomChefEquipe;
                    hackathon.prenomChefequipe = req.body.prenomChefequipe;
                    hackathon.contactChefEquipe = req.body.contactChefEquipe;
                    hackathon.emailChefEquipe = req.body.emailChefEquipe;
                    hackathon.nomMembre1 = req.body.nomMembre1;
                    hackathon.prenomMembre1 = req.body.prenomMembre1;
                    hackathon.emailMembre1 = req.body.emailMembre1;
                    hackathon.contactMembre1 = req.body.contactMembre1;
                    hackathon.nomMembre2 = req.body.nomMembre2;
                    hackathon.prenomMembre2 = req.body.prenomMembre2;
                    hackathon.emailMembre2 = req.body.emailMembre2;
                    hackathon.contactMembre2 = req.body.contactMembre2;
                    hackathon.password = req.body.password;
                    hackathon.Status = req.body.Status;
                    hackathon.Resultat = req.body.Resultat;
                    hackathon.save(async (err, doc) => {
                        if (!err) {
                            res.jsonp({ message: 'success', id: hackathon._id })
                        }
                        else {
        
                            res.jsonp({ message: "erreur" + err })
        
                        }  
        })
            
    
         
      
}
}


//Modifier le statut d'un participant passer de Invalide => Valide

function UpdateStatut(req, res) {
  
    console.log(req.params)
        Hackathon.updateOne({ _id: req.params.id }, { Statut: 'valide' }, function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.jsonp({message: "ok"});
            }
        }); 
                  
}

//Fonction de Verification { id+montant de la semaine +montant du mois +montant du jour }



// insert Hackathon Participant
router.post('/insertHackParticipant', (req, res) => {
    insertparticipant(req, res);
});

//Update  le statut d'un participant passer de Invalide => Valide

router.get('/updateStatut/:id', (req, res) => {
    UpdateStatut(req, res);
});



//Get AML By Id
router.get('/getHackathonParticipantByID/:id', (req, res) => {
    Hackathon.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.jsonp({ AML: doc })
        }
    });
});

//Delete AMl By ID
router.get('/deleteHackthonParticipant/:id', (req, res) => {
    Hackathon.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.jsonp({ message: 'Participant a ete supprimé' })
        }
        else {
            res.json({ message: 'Erreur lors de la suppression du Participant :' + err });
        }
    });
});


//get Hackathon Participant

router.get('/getHackathonParticipant', (req, res) => {
    Hackathon.find((err, docs) => {
        if (!err) {

            res.json({ Hackathon: docs })
        }
        else {
            res.send('Erreur dans l affichage des Participants:' + err);
        }
    });
});



module.exports = router;