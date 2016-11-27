fs = require('fs');

var DB_FILENAME = './db/command_current.json';

var COMMAND = {
    TURN_ON_HEATER: 'TURN_ON_HEATER',
    TURN_OFF_HEATER: 'TURN_OFF_HEATER',
    LEISURE_TIME: 'LEISURE_TIME'
}

function openDb() {
    var dbFileDescriptor = fs.openSync(DB_FILENAME, 'a+');
    fs.closeSync(dbFileDescriptor);
    var dbContent = fs.readFileSync(DB_FILENAME, 'utf-8') || '{}';
    return JSON.parse(dbContent);
}

function readCurrentValue() {
    db = openDb()
    return db;
}

function saveCurrentValue(command) {
    db = openDb()
    db.command = command
    fs.writeFileSync(DB_FILENAME, JSON.stringify(db), 'utf-8');
}

module.exports = {
    COMMAND: COMMAND,
    readCurrentValue: readCurrentValue,
    saveCurrentValue: saveCurrentValue
}