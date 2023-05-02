// next will pass the erequest to the next middleware in the chain
// this will check if the user is signed in
// we call this ,iddleware next
module.exports =  (req , res, next) => {
    if(!req.user){
        return res.status(401).send({ error: 'You must Log in!' });
    }
    //if ogged in then everthing is fine let it proceed 
    next();
};
// /now in whichever route we need user to be logged in we will use this

