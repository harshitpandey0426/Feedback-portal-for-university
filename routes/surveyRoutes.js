const _     = require('lodash');
const Path  = require('path-parser'); 
const { URL }  = require('url'); //integrated module in nodejs will help us to iterate and parse route
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const recipientSchema = require('../models/Recipient');
const Survey = mongoose.model('surveys');//did it differently this time
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');


const Survey = mongoose.model('surveys');


//asking mongoose to do fetch this
app.get('/api/surveys', requireLogin ,  async ( req , res ) => {//we want this person to be logedin , therefore using middleware requirelogin
    const surveys = await Survey.find({ _user: req.user.id }).select({ recipients: false }); //find will look into our surveys and find for the specigic target we are looking for
    res.send(surveys);//surveys extracted are sent
});// select ensures we do not want to include recepients properties

//we have to check first if user is logged and desired credits to send survey form
// body of the req will contain title subject body etc
// we will pull these properties here




app.get('/api/surveys/:surveyId/:choice',(req,res) => {// redirect to this link wheneevr user click on yes or no
    res.send('Thanks for voting');
});

// extractimg surveyid and choice from route so that we can filter out urls at sendgrid
//we are doing all this to get only one event even if the user has pressed 'yes' multiple times
app.post('/api/surveys/webhooks',( req , res ) => {
        const events = _.map(req.body,(event) =>{ //looking out for different events
        const pathname =new URL(event.url).pathname //for every event we just extract the route or pathname
        const p = new Path('/api/surveys/:surveyId/:choice');//put a match if it is not able to extract surveyid and choice it will return null
        const match=p.test(pathname);
        if(match) // if a match is found return that match
        return {email: event.email,surveyId: match.surveyId,choise: match.choice};

    });
    const compactEvents = _.compact(events);// it will take care of undefined elements, it wont return them
    const uniqueEvents = _.uniqBy(compactEvents,'email','surveyId') // this will make sure there is no duplicate with emailand surveyId



        // this is s mongo db logic, 
        // we want to update the count of yes and no, so we will select only those whose resnond is false now
    .each(({ surveyId, email, choice }) => {//we only care about surveyId ,email,choice
        Survey.updateOne({
            
            _id          : surveyId, // it should have our req surveyid
            recipients  : {
                $elemMatch : { email : email , respond : false }//it will take only those events which have the email id we want and also the one who have responded
            }
           },
           {
            //update responded property of a recipient
            $inc: { [choice]: 1}, //this will increment 'yes' or 'no' cunt
            $set: { 'recipients.$.responded': true }, // and set the responded to true
            lastResponded: new Date()// updated last responded propety
           }
        ).exec();
    })
    .value();

});
// have not done code refractor on the above code to have better understanding


// app.post('/api/surveys/webhooks',( req , res ) => {
//     const p = new Path('/api/surveys/:surveyId/:choice');
// module.exports = app => {
    
    app.post('/api/surveys',requireLogin, requireCredits, async (req,res) =>{
        const { title, subject, body, recipients} = req.body;

        const survey = new Survey({
            title,
            subject,
            body,
            recipients: recipients.split(',').map(email => ({ email: email.trim() })),                 
            _user: req.user.id,
            dateSent: Date.now()
        });
//split by comma since we get list of comma seperated eamails
// map will take email address will make array of emails obejcts
// jinko default value de di hai unko nahi dalenge yaha
//req.user.id wil assign id generated by mongoose
// put the date when this code runs that date will be assign

            const mailer = new Mailer( survey , surveyTemplate(survey)  );//here we send out email, passed into mailer file,second argument is what will be displayed in body
            // await mailer.send();
            try{
                await mailer.send();
                await survey.save();
                req.user.credits -= 1; //updated credits
                const user = await req.user.save();
                
                
                res.send(user);
                } catch(err) {
                    res.status(422).send(err);
                }
        
    });
}