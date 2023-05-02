module.exports =  (req , res, next) => {
    if(req.user.credits<1){
        return res.status(403).send({ error: 'You dont have enough credits' });
    }
    //if logged in then everthing is fine let it proceed 
    next();
};


