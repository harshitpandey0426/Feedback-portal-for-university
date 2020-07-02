const mongoose = require('mongoose');
const { Schema } = mongoose;
//mongoose have a property schema assign it to instance { schema }

const userSchema = new Schema({
    googleID : String,
    credits : { type : Number, defaullt: 0}

});


mongoose.model('users',userSchema);
//telling mongoose we want to create new collection