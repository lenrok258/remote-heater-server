import './heater-switch.html'
import '../api/heater-switch.js'

Template.heaterSwitch.events({
    'change .onoffswitch-checkbox' (event, template) {
        const heaterOn = event.target.checked
        const requestedTemperature = Number(template.find('input#target-temp').value)
        persistHeaterSwitch(heaterOn, requestedTemperature)
    }
})

Template.heaterSwitch.events({
    'change #target-temp' (event, template) {
        const heaterOn = template.find('.onoffswitch-checkbox').checked
        const requestedTemperature = Number(event.target.value)
        persistHeaterSwitch(heaterOn, requestedTemperature)
    }
})

function persistHeaterSwitch(heaterOn, requestedTemperature) {
    console.log('heater on? = ' + heaterOn)
    console.log('requestedTemperature = ' + requestedTemperature)

    Meteor.call('heater.switch', heaterOn, requestedTemperature);
}