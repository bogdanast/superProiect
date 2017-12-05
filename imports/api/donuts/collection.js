import { Mongo } from 'meteor/mongo';
const Donuts = new Mongo.Collection('donuts');

//Donuts.update({price: {$gte: 5}}, {$inc: {price: 100}}, {multi: true});
//const y =Donuts.find({}, {fields: {price: 1}}).fetch();

//console.log(y);


export default Donuts;

// const myDonut = Donuts.find({_id: 'xxxxx'}).fetch(); // myDonut = un vector cu un singur obiect
// const myDonut = Donuts.findOne({_id: 'xxxxx'}); // myDonut = un obiect
/*
Mini tutorial Mongo

///////////////// Cum Cautam in baza de date ///////////////

Colectie.find(selector, optiuni).fetch() -> Va returna un vector de obiecte
Colectie.findOne(selector, optiuni) -> Va returna primul rezultat are indeplineste conditiile specificate din selector + optiuni

Exemple in care folosim selectori:

Colectie.find({
    isComestible: true',
    price: {$eq: 20},
    $or: [
     {donutName: 'placinta'},
     {donutName: 'sarmala'}
    ]
})


Exemple in care folosim optiunile:

Colectie.find({}, {$limit: 10 // returneaza doar 10 rezultate (MAXIM)}, sort: {price: -1}})

 */

///////////////// Cum actualizam in baza de date ///////////////

/*
Exemple:
Colectie.update(selector, optiuni)

find({}, {$limit: 10, sort: {price: -1}, $mul:{price: 0.1}})

Colectie.update({price: {$gt: 25}}, {$set: {sellable: true}})
Colectie.update({}, {$inc: {price: 10}})


 */