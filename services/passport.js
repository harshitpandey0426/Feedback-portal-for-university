const passport= require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');
//one argument means : we are fetching from it
//two arguments : we are loading from it


passport.serializeUser( ( user , done ) => {
  done( null , user.id );
  // user.id recognise user by id assigned by mongo
  //reason why we are not using profile id? bz profile id is 
  // unique to google id, but user id allocated to google,fb logon
});


passport.deserializeUser( ( id , done ) => {
// return the mongo id
  User.findById(id)
    .then(user => {
      done(null,user);
    });
});






passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy : true
      },
      async (accessToken , refreshToken , profile , done ) => {
       const existingUser = await  User.findOne({ googleID : profile.id  })
     
            if(existingUser)
            {
              return done( null , existingUser );
            } 
           
            const user =  await  new User({ googleID : profile.id }).save()
            done (null , user );
          }
        )
  );


