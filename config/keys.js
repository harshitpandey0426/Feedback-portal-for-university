// we will figure out what set of credentials to return
// we will use another environment variable for this
// if(process.env.NODE_ENV === 'production')
// {
//     //we are in production so return prod set of keys
//     module.exports = require('./prod');
// }
// else{
//     // we are in development so return dev set of keys
//     module.exports = require('./dev'); // if we fall in this 'else' then we will export whole dev keys to whoever is asking for it
// }

// see what credential to written
//either of development or production

if( process.env.NODE_ENV === 'production')
{
    // we are in production
    module.exports = require('./prod'); 
}
else
{
    //return dev keys
    module.exports = require('./dev');
}
