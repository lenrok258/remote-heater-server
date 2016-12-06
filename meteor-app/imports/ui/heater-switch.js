import './heater-switch.html'
import '../api/heater-switch.js'

Template.heaterSwitch.events({
    'change .onoffswitch-checkbox' (event, template) {
        const heaterOn = event.target.checked
        const requestedTemperature = template.find('input#target-temp').value

        console.log('heater on? = ' + heaterOn)
        console.log('requestedTemperature = ' + requestedTemperature)
    }
})