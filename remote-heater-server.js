var express = require('express')
var commandServerHandler = require('./command-server')
var webAppHandler = require('./web-app')

var app = express()
app.use(express.static('public'))

app.get('/', webAppHandler);
app.get('/command', commandServerHandler);

app.listen(8001, function () {
    console.log('Server listening on port 8001')
})