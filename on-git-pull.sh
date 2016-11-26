LOG_FILE=./logs/`date +%Y-%m-%d_%H:%M.log` 

function log {
    echo $1 | tee -a ${LOG_FILE}
}

log "About to install and restart <<Remote Heater Server>>"

./install.sh 2>&1 | tee -a ${LOG_FILE}
./remote-heater-server.sh 2>&1 | tee -a ${LOG_FILE}

return 0
