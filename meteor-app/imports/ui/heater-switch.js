import './heater-switch.html'

Template.heaterSwitch.events({
    'change .onoffswitch-checkbox' (even, template) {
        event.preventDefault();

        const heaterOn = event.target.checked
        const requestedTemperature = template.find('input#target-temp').value

        console.log('heater on? = ' + heaterOn)
        console.log('requestedTemperature = ' + requestedTemperature)
    }
})