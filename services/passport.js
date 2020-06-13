const passport=require('passport')
const GoogleStrategy=require('passport-google-oauth20').Strategy;
const keys=require('../config/keys');//NO need to say keys.js(i.e extension is not required) sotred in keys since it is returning values;
const mongoose=require('mongoose');
const User=mongoose.model('users'); //2 argument means we are going to load something in mongoose and 1 argument means we are going to fetch somtehing from mongoose
                                    //User object here is our model class
passport.use(new GoogleStrategy({
    clientID:keys.googleclientID,
    clientSecret:keys.googleclientSecret,
    callbackURL:'/auth/google/callback'
},
(accessToken,refreshToken,profile,done) =>{   //This fetch information from google about my account, which will be visible on console
    new User({googleID : profile.id}).save(); //.save() will save it to our database record, profile.id is the id coming from users profile ,new User wil create new user which is a modelclass
    // console.log('access token',accessToken);  //access token ko he google dekhega aur smjhega ki isko ko maine request grant ki thi photo ya email me changes ki to ye it google can allow this request to access.
    // console.log('refresh token',refreshToken);// we are not using access and refresh token, but access token gets refreshed in small amount of time, so it is related to it.
    // console.log('profile:',profile); // this is what we will be using in our project
}
)
);