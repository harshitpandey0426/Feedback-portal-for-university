// capital M beacuse it will export a function
const sendgrid = require('sendgrid');
const helper = sendgrid.mail; // will build this useing mail property of send grid
const keys = require('../config/keys');

// we are doing it this way beacuase sendgrid wants us to do
class Mailer extends helper.Mail {// first we have to make constructor in a class whenever we make it like this
    constructor({ subject , recipients }, content){ //content is body of email
        super();
        //these properties are req to send mail correctly which is processed by send grid
        this.sgApi = sendgrid(keys.sendGridKey);//passed our sendgrid key here
        this.from_email = new helper.Email('harshit.pandey@students.iiit.ac.in');
        this.subject    = subject;
        this.body       = new helper.Content('text/html',content);
        this.recipients = this.formatAddresses(recipients); //list of recipients
        this.addContent(this.body);//extending Mail has some built in functionality, it has this function addcontent()
        this.addClickTracking();
        this.addRecipients();
    
    
    }


    formatAddresses(recipients){//iterate over list of receipients and extract them
        return recipients.map( ( { email }) => {
            return new helper.Email(email); // pass the email just extracted
        });
    }

    //unfortunately there is no explainantion for this, even the document just says write this code
    addClickTracking(){
        const trackingSettings = new helper.TrackingSettings();
        const clickTracking    = new helper.ClickTracking( true , true );

        trackingSettings.setClickTracking(clickTracking);
        this.addTrackingSettings(trackingSettings);
    }
    //adding the list of recipents to the mailer
    addRecipients(){
        const personalize = new helper.Personalization(); 
        this.recipients.forEach(recipient => {
            personalize.addTo(recipient);
        });
        this.addPersonalization(personalize);
    }

    async send(){// take this mailer and send it to sendgrid
        const request = this.sgApi.emptyRequest({ // documented part hard to understand
            method : 'POST',
            path   : '/v3/mail/send',
            body   : this.toJSON() // conveted this whole thing in json
        });


        const response = await this.sgApi.API(request); // send this request to sendgrid, this function is also provided by send grid
        return response;
    }
     
}


