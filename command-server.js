var command_db = require('./db/command_db')

function handleRequest(req, res) {
    var commandToSendBack = command_db.readCurrent();

    var commandValue = commandToSendBack.command;
    if (commandValue !== 'LEISURE_TIME') {
        command_db.setCommand(command_db.COMMAND.LEISURE_TIME)
    }

    res.json(commandToSendBack)
}

module.exports = handleRequest