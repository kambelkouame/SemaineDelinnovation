const mongoose = require('mongoose');
var ProjetSchema = new mongoose.Schema({

nom:{
    type:String
},
prenom:{
    type:String
},
contact:{
    type:Number
},
email:{
    type:String
},
nomProjet:{
    type:String
},
description:{
    type:String
},
Besoin:{
    type:String
},
date:{
    type:Date,
    default:Date.now()
},
});

mongoose.model('Projet',  ProjetSchema);