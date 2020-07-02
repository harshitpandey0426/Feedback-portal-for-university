//here we will write logic to handle the token received by payment through stripe
// after looking at the documentation on stripe we are building this ,goto npmjs.com type stripe fro wrapper,select create a charge from left side then see the synatx
// we will install stripe library for our backend part
const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey); //from syntax written in documentation
const requireLogin = require('../middlewares/requireLogin');
module.exports = app => {
    app.post('/api/stripe', requireLogin, async (req,res) => {
        // express will call this function requireLogin internally no need to put parenhtesis
        // we cann pass in any number of middlewares in app.post or app.get
      
        console.log(req.body);
       const charge = await stripe.charges.create({ //this syntax is seen from documentation,put await before the function which returns promise
            amount : 500,
            currency : 'usd',
            description : '$5 for  credits',
            source : req.body.id

        });
        //req.user is our user model
        req.user.credits += 5;
        const user = await req.user.save(); //save the updated user model
        res.send(user); // send back the data we want to comunicate to the browser

    });

};