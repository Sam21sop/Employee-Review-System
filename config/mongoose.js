const mongoose = require('mongoose');
const BASE_URL = 'mongodb+srv://sopan:0BXzeYUSBMNBWc7d@mydb.8p6posr.mongodb.net/?retryWrites=true&w=majority'


mongoose.connect(BASE_URL).then(()=>{
     console.log('connection successful');
 }).catch((err) => console.log("no connection " + err));

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open',  function(){
     console.log('Connected to Database');
});

 
module.exports = db;  