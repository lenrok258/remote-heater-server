var express = require('express')
var crypto = require('crypto')

var commandServerHandler = require('./command-server')
var webAppHandler = require('./web-app')
var config = require('./config/config.json')

// Authentication
var basicAuth = require('basic-auth');

var auth = function (req, res, next) {
    function unauthorized(res) {
        res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
        setTimeout(function () {
            res.sendStatus(401);
        }, 3000);
    };

    var user = basicAuth(req);

    if (!user || !user.name || !user.pass) {
        return unauthorized(res);
    };

    var rqUserHash = crypto.pbkdf2Sync(user.name, config.auth.hashSalt, 10000, 512, 'sha512')
    var rqPassHash = crypto.pbkdf2Sync(user.pass, config.auth.hashSalt, 10000, 512, 'sha512')
    console.log(rqUserHash.toString('hex'))
    console.log(config.auth.hashLogin)
    if (rqUserHash.toString('hex') === config.auth.hashLogin &&
        rqPassHash.toString('hex') === config.auth.hashPass) {
        return next();
    } else {
        return unauthorized(res);
    };
};

// Routes
var app = express()
app.use(express.static('public'))

app.get('/', auth, webAppHandler);
app.get('/command', commandServerHandler);


// Start server
app.listen(8001, function () {
    console.log('Server listening on port 8001')
})