const express = require('express');
const app = express(); 
const expressLayout = require('express-ejs-layouts');
const db = require('./config/mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash'); 
const flashMiddleWare = require('./config/flashMiddleware');
const dotenv = require('dotenv').config()


app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('./assets'));
app.set('view engine','ejs');
app.set('views','./views');
app.use(expressLayout);

// mongo store is used to store the session cookie in the db 
app.use(session({
    name: "ERS",
    // change secret during before deployment in production 
    secret: "employeeReviewSystem",
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: MongoStore.create({
        mongoUrl: dotenv.BASE_URL,
        autoRemove: 'disabled'
    },
        (err) => {
            console.log(err || 'connect-mongo setup ok');
        }
    )
}))


app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
app.use(flash());
app.use(flashMiddleWare.setFlash);
app.use('/' , require('./routes/index'));


const PORT = 8000;
app.listen(PORT, function(err){
    if(err){
        console.log("Error in running the app.");
        return ;
    }
    console.log(`Server is running on http://localhost:${PORT}`);
});