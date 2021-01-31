const mongoose = require('mongoose');
var JeticRegisterSchema = new mongoose.Schema({

nomEntrepise:{
    type:String
},
Localisation:{
    type:String
},
email:{
    type:String
},
nomRepresentant:{
    type:String
},
prenomRepresentant:{
    type:String
},
stand:{
    type:Boolean,
    default:false
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