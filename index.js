var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var app = express();

var api = new ParseServer({
    databaseURI: 'mongodb://localhost:27017/onlineCodeEditor', // Connection string for your MongoDB database
    appId: '239845729348',
    cloud:__dirname + '/cloud/main.js',
    masterKey: 'EghjhdMSZkujqkodhSQ5rRZLqHmuUbg7zOnu86zNJalsdfk43lf', // Keep this key secret!
    serverURL: 'http://online-code-editor.calocode.com/parse' // Don't forget to change to https if needed
});

// Serve the Parse API on the /parse URL prefix
app.set('port', (process.env.PORT || 5000));
app.use('/',express.static(__dirname + '/front/dist'));
app.use('/parse', api);


app.listen(app.get('port'), function() {
    console.log('parse-server-example running on port 1337.');
});