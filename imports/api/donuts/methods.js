import {Meteor} from 'meteor/meteor';
import Donuts from '/imports/api/donuts/collection';

Meteor.methods({
    'create_a_donutikes' (one, two, three) {
        return [one, two, three];
    },
    'donuts.list' () {
        return Donuts.find({}).fetch();
    },
    'create_a_donut' () {
        const donuts = Donuts.find({}).count();
        if (donuts > 7) {
            throw new Meteor.Error(500, 'maximum_allowed_donuts', 'You are not allowed to have that many donuts');
        }
        return Donuts.insert({price: 100, isTrue: true, name: "GOGOASA INFURIATA"});
    },
    // 'donuts.list_filtered' () {
    //     return Donuts.find({price: {$gt: 200}}).fetch();
    // },
    'donuts.list_filtered' (_id, data) {
        Donuts.update(_id, {$set: data})
    },
});