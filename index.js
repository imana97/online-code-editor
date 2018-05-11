var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var app = express();

var api = new ParseServer({
    databaseURI: 'mongodb://localhost:27017/onlineCodeEditor', // Connection string for your MongoDB database
    appId: 'myAppId',
    masterKey: 'EghjhdMSZkujqkodhSQ5rRZLqHmuUbg7zOnu86zNJalsdfk43lf', // Keep this key secret!
    serverURL: 'https://calocode.com/parse' // Don't forget to change to https if needed
});

// Serve the Parse API on the /parse URL prefix
app.use('/parse', api);

app.listen(1337, function() {
    console.log('parse-server-example running on port 1337.');
});