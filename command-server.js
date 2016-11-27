var command_db = require('./db/command_db')

function handleRequest(req, res) {
    var commandToSendBack = command_db.readCurrentValue();
    res.json(commandToSendBack)
}

module.exports = handleRequest