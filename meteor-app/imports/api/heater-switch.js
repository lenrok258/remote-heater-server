import {
    Meteor
} from 'meteor/meteor';
import {
    Mongo
} from 'meteor/mongo';
import {
    check
} from 'meteor/check';


export const HeaterSwitch = new Mongo.Collection('heater-switch');

if (Meteor.isServer) {
    // This code only runs on the server
    // Only publish tasks that are public or belong to the current user
    Meteor.publish('heater-switch', function heaterSwitch() {
        return HeaterSwitch
            .find({})
            .sort({
                createdAt: -1
            })
            .limit(1)
    });
}

Meteor.methods({
    'heater.switch' (enabled, temperature) {
        check(enabled, Boolean);
        check(temperature, Number)

        // Make sure the user is logged in before inserting a task
        // if (!this.userId) {
        //     throw new Meteor.Error('not-authorized');
        // }

        HeaterSwitch.insert({
            enabled: enabled,
            temperature: temperature,
            createdAt: new Date(),
            // owner: this.userId,
            // username: Meteor.users.findOne(this.userId).username,
        });
    }
});