module.exports={
    googleClientID:process.env.GOOGLE_CLIENT_ID, //we will also copy all these name on heroku in env varaible to let it know
    googleClientSecret:process.env.GOOGLE_CLIENT_SECRET,
    mongoURI:process.env.MONGO_URI,
    cookieKey:process.env.COOKIE_KEY
};