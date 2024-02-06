const mongoose = require('mongoose');
const DB = 'mongodb+srv://soumyasri2245:Soumya22%4034@cluster0.u2ywt3o.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(DB).then(()=>{
     console.log('connection successful');
 }).catch((err) => console.log("no connection " + err));

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));
db.once('open',  function(){
     console.log('Connected to Database');
});

 
module.exports = db;  