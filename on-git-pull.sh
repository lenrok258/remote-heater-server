LOG_FILE=./logs/`date +%Y-%m-%d_%H:%M.log` 

function log {
    echo $1 | tee -a ${LOG_FILE}
}

log "About to kill <<Remote Heater Server>>"
kill $(ps aux | grep -v "grep" | grep "remote-heater-server.js" | awk '{print $2}') | tee -a ${LOG_FILE}
sleep 5

log "About to install and restart <<Remote Heater Server>>"

./install.sh 2>&1 | tee -a ${LOG_FILE}
./remote-heater-server.sh 2>&1 | tee -a ${LOG_FILE}

return 0
