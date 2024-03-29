const passport=require('passport')
//will export this whole routes through a function
module.exports = (app) => { //making an export function since we can not use 'app' here directly.
app.get('/auth/google',passport.authenticate(  // Googlestrategy has some code written at back which know that if someone calls google
    'google',{                                 //then we have to use code written inside googlestrategy
        scope:['profile','email']              // Scope tells google what access we want inside clients profile so we want his profile and email.
    }                                          //You may also ask permission to read emails or images in google drive , those are different scope.
));                                         //   redirect url is used by google to ensure that client gives thr details to a valid organisation


app.get('/auth/google/callback',passport.authenticate(  //from the 'code' in url passport will identify that it has to call this app.get not the previous one
    'google',
    (req,res) => { // passport will see as a middleware if user is successfully logged in the redirect it back to /surveys route
        res.redirect('/surveys');
      }
));

app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

app.get('/api/logout',(req,res)=>{
    req.logout(); // as soon as this logout function is called passport attaches it to the req object
    // res.send(req.user);// just to send some acknowlwedgement
    res.redirect('/');
});

};


