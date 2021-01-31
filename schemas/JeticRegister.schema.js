const mongoose = require('mongoose');
var JeticRegisterSchema = new mongoose.Schema({

nom:{
    type:String
},
prenom:{
    type:String
},
fonction:{
    type:String
},
ecole:{
    type:String
},
concours:{
    type:Boolean,
    default:false
},
email:{
    type:String
},
contact:{
    type:Number
},
date:{
    type:Date,
    default:Date.now()
},
});

mongoose.model('Jetic',  JeticRegisterSchema);