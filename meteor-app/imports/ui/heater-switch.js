import './heater-switch.html'

Template.heaterSwitch.events({

    'submit #heater-switch-form' (event) {
        event.preventDefault();

        // const target = event.target;
        // const requestedTemperature = event.target['target-temp'].value


        console.log(event)
        alert('trolo2')
    }

})