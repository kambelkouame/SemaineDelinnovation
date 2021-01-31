require(.../config/module.import)

function insertJeticparticipant(req, res) {


    if (req.body.nom == "") {
        res.jsonp({ message: 'monthLimit is empty' })
    } else if (req.body.prenom == "") {
        res.jsonp({ message: 'weekLimit is empty' })
    } else if (req.body.fonction == "") {
        res.jsonp({ message: 'dayLimit is empty' })
    } else if (req.body.ecole == "") {
        res.jsonp({ message: 'creator is empty' })
    } else if (req.body.concours == "") {
        res.jsonp({ message: 'creator is empty' })
    } else if (req.body.email == "") {
        res.jsonp({ message: 'creator is empty' })
    } else if (req.body.contact == "") {
        res.jsonp({ message: 'creator is empty' })
    } else {


        var jetic = new Jetic();
        jetic.nom = req.body.nom;
        jetic.prenom = req.body.prenom;
        jetic.fonction = req.body.fonction;
        jetic.ecole = req.body.ecole;
        jetic.concours = req.body.concours;
        jetic.email = req.body.email;
        jetic.contact = req.body.contact;
        jetic.save(async (err, doc) => {
            if (!err) {
                res.jsonp({ message: 'success', id: jetic._id })
            }
            else {

                res.jsonp({ message: "erreur" + err })

            }
        })




    }
}


//Modifier le statut d'un participant passer de Invalide => Valide

function UpdateStatut(req, res) {

    Hackathon.updateOne({ Statut: "invalide" }, { Statut: "valide" }, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            console.log(req.params)
            AML.updateOne({ _id: req.params.id }, { statut: true }, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.jsonp({ message: "ok" });
                }
            });
        }
    });

}

//Fonction de Verification { id+montant de la semaine +montant du mois +montant du jour }


router.post('/insertJeticParticipant', (req, res) => {
    insertparticipant(req, res);
});

//Update Statut
router.get('/updateStatut/:id', (req, res) => {
    UpdateStatut(req, res);
});


//Update AML
router.post('/updateAML', (req, res) => {
    updateAML(req, res);
});



//Update AML
router.post('/updateAml', (req, res) => {
    AMl.findOneAndUpdate({ id: req.body.id }, req.body, { new: true }, (err, doc) => {
        if (!err) {
            res.jsonp({ AML: req.body })
        }
        else {
            res.send('Erreur lors  de la modification : ' + err);
        }
    });
});

//Get Jetic By Id
router.get('/getJeticParticipantByID/:id', (req, res) => {
    Jetic.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.jsonp({ AML: doc })
        }
    });
});

//Delete AMl By ID
router.get('/deleteJeticParticipant/:id', (req, res) => {
    Jetic.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.jsonp({ message: 'AML a ete supprimé' })
        }
        else {
            res.json({ message: 'Erreur lors de la suppression de l\'AML :' + err });
        }
    });
});


//get Participant

router.get('/getJeticParticipant', (req, res) => {
    Jetic.find((err, docs) => {
        if (!err) {

            res.json({ AML: docs })
        }
        else {
            res.send('Erreur dans l affichage de l\'AML:' + err);
        }
    });
});



module.exports = router;