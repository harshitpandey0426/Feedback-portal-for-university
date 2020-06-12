const express=require('express');
const passport=require('passport')
const GoogleStrategy=require('passport-google-oauth20').Strategy;

const keys=require('./config/keys');//NO need to say keys.js(i.e extension is not required)
const app=express();

passport.use(new GoogleStrategy({
        clientID:keys.googleclientID,
        clientSecret:keys.googleclientSecret,
        callbackURL:'/auth/google/callback'
    },
    (accessToken,refreshToken,profile,done) =>{
        console.log('access token',accessToken);
        console.log('refresh token',refreshToken);
        console.log('profile:',profile);

    }
    )
);

app.get('/auth/google',passport.authenticate(  // Googlestrategy has some code written at back which know that if someone calls google
    'google',{                                 //then we have to use code written inside googlestrategy
        scope:['profile','email']              // Scope tells google what access we want inside clients profile so we want his profile and email.
    }                                          //You may also ask permission to read emails or images in google drive , those are different scope.
));                                         //   redirect url is used by google to ensure that client gives thr details to a valid organisation


app.get('/auth/google/callback',passport.authenticate(  //from the 'code' in url passport will identify that it has to call this app.get
                                                        // not the previos one
    'google'
));


const PORT=process.env.PORT || 5000;

app.listen(PORT);
