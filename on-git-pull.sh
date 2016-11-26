cd $(dirname $0)
source $HOME/.profile

LOG_FILE=./logs/setup_`date +%Y-%m-%d_%H:%M.log`

function log {
    echo $1 | tee -a ${LOG_FILE}
}

log "About to install and restart <<Remote Heater Server>>"

./install.sh | tee -a ${LOG_FILE}
./remote-heater-server.sh | tee -a ${LOG_FILE}

return 0
