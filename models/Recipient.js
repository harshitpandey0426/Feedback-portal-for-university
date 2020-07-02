const mongoose = require('mongoose');
const { Schema } = mongoose;
const recipientSchema = new Schema({
    email : String,
    responded : {type : Boolean,default : false} //has responded earlier or not
});
module.exports = recipientSchema;