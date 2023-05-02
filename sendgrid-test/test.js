// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey("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");
const msg = {
  to: "harshit.xavier@gmail.com",
  from: "harshit.pandey@students.iiit.ac.in",
  subject: "Sending with Twilio SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};
sgMail.send(msg);



