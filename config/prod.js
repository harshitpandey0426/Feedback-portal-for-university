module.exports = {
    //we add these env varaiables on heroku
    googleClientID : process.env.GOOGLE_CLIENT_ID ,
    googleClientSecret : process.env.GOOGLE_CLIENT_SECRET ,
    mongoURI : process.env.MONGO_URI ,
    cookiekey : process.env.COOKIE_KEY,
    stripeSecretKey : process.env.STRIPE_SECRET_KEY,
    stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    sendGridKey: process.env.SEND_GRID_KEY,
    redirectDomain: process.env.REDIRECT_DOMAIN
};

