const mongoose = require('mongoose');
var HackathonregisterSchema = new mongoose.Schema({

nomEquipe:{
    type:String
},
niveau:{
    type:String
},
nomChefEquipe:{
    type:String
},
prenomChefequipe:{
    type:String
},
contactChefEquipe:{
    type:Number
},
emailChefEquipe:{
    type:String
},
nomMembre1:{
    type:String
},
prenomMembre1:{
    type:String,
  
},
emailMembre1:{
    type:String
},
contactMembre1:{
    type:Number,
},
nomMembre2:{
    type:String
},
prenomMembre2:{
    type:String,
    
},
emailMembre2:{
    type:String
},
contactMembre2:{
    type:Number
},
Code:{
    type:Number
},
ShirtStatus:{
    type:Boolean,
    default:false
},

password:{
    type:String
},
Statut:{
    type:String,
    default:"invalide"
},
Resultat:{
    type:Number,
    default:0
},
date:{
    type:Date,
    default:Date.now()
},
});

mongoose.model('Hackathon',  HackathonregisterSchema);