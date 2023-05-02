//nodemon can be installed to avoid pain of rerunning the node again after every change
// use 'npm run dev' to run code 
const express = require('express');
const authRoutes = require('./routes/authRoutes');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');//to let express and passport know that we are making use of cookie authenticatoin
const keys = require('./config/keys');
mongoose.connect(keys.mongoURI);//used to connect to mongodb
require('./models/user');// we are making schema in user.js file
const passportConfig = require('./services/passport'); //to execute passport.js file ordering-first models/user should be present because it is used in passport.js
const bodyParser = require('body-parser');
require('./models/Survey');

const app=express();
app.use(bodyParser.json()) //this bodyparser is a middleware ,if any time post req will come this middleware will parse the body  and assign it to the req.body property of the incoming request object
app.use(
    cookieSession ({
        maxAge: 30*24*60*60*1000, //30 days
        keys : [keys.cookieKey] // to encrypt our cookie
    })
);
app.use(passport.initialize());
app.use(passport.session());
 //calling export function by passing app parameter.
// NODE_ENV is env varaible set by heroku
if(process.env.NODE_ENV === 'production' ){
    // express will serve our production assets
    // like main.js file or .cc files
    app.use(express.static('client/build')); // look in client/build folder to check if there is a file with this name if 'yes' go ahead and respond it

    // Express will serve out index.html file
    // if it does not recognise the route
    const path = require('path');
    app.get('*',(req,res) => {
        res.sendFile(path.resolve(__dirname,'client','build','index.html')); // if you dont know what this route is doing  assume react route side of our application is responsible for this
    });
    
}
//passing app function in them
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);


const PORT = process.env.PORT || 5000;

app.listen(PORT);



