const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/SemaineDeLinnivation', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, (err) => {
    if (!err) { console.log('MongoDB connectée avec success.') } else { console.log('Erreur lors de la connexion a la BD Mongo : ' + err) }
});

/*
//Online Db
mongoose.connect('mongodb+srv://kambel:08074105Azerty@cluster0.glv5j.mongodb.net/<dbname>?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, (err) => {
    if (!err) { console.log('MongoDB connectée avec success.') } else { console.log('Erreur lors de la connexion a la BD Mongo : ' + err) }
});
*/
//Online Db
//mongodb+srv://kambel:08074105Azerty@cluster0.glv5j.mongodb.net/<dbname>?retryWrites=true&w=majority

//Local DB
//mongodb://localhost:27017/SemaineDeLinnivation
require('../schemas/JeticRegister.schema');
require('../schemas/Hackathonregister.schema');