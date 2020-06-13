//nodemon can be installed to avoid pain of rerunning the node again after every change
// use 'npm run dev' to run code 
const express=require('express');
const authRoutes=require('./routes/authRoutes');
const mongoose=require('mongoose');
const keys=require('./config/keys');
mongoose.connect(keys.mongoURI);//used to connect to mongodb
require('./models/user');// we are making schema in user.js file
const passportConfig=require('./services/passport'); //to execute passport.js file ordering-first models/user should be present because it is used in passport.js


const app=express();
authRoutes(app); //calling export function by passing app parameter.

const PORT=process.env.PORT || 5000;

app.listen(PORT);
