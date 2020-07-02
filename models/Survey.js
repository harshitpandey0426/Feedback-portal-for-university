const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient')
const surveySchema = new Schema({
    title : String,
    body : String,
    subject : String,
    recipients : [RecipientSchema], //to form subdocument collection Recipient schema is defined in reciepent file
    yes : {type: Number, default: 0},
    no : {type: Number, default: 0},
    _user : { type: Schema.Types.ObjectId, ref : 'User'}, // to map this schema to a particular user using his id, underscore is not req but it is to make understandable, and reference is given to user collection
    dateSent : Date, // we will record the date someone has sent sarvey
    lastResponded : Date //last time we got a response
    

});
mongoose.model('surveys',surveySchema);
//!st argument is surveys - the name of the collection
// 2nd argument is name of our schema