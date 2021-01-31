const mongoose = require('mongoose');
var ProjetSchema = new mongoose.Schema({

message1:{
    type:String
},
message2:{
    type:String
},
message3:{
    type:Number
},
message4:{
    type:String
},
message5:{
    type:String
},
message6:{
    type:String
},
message7:{
    type:String
},
date:{
    type:Date,
    default:Date.now()
},
});

mongoose.model('Projet',  ProjetSchema);