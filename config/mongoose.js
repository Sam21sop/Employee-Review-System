const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const BASE_URL = dotenv.BASE_URL;


mongoose.connect(BASE_URL).then(()=>{
     console.log('connection successful');
 }).catch((err) => console.log("no connection " + err));

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open',  function(){
     console.log('Connected to Database');
});

 
module.exports = db;  