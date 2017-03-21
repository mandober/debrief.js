// OBJECTS
// Making objects through constructor calls

'use strict';

function Hero(name) {
    this.name = name;
    this.occupation = 'Ninja';
    this.whoAreYou = function () {
        return "I'm " + this.name + " and I'm a " + this.occupation;
    };
}

// USAGE
var h = new Hero('Donatello');
h.whoAreYou(); //"I'm Donatello and I'm a Ninja"



// `.constructor` property
//
// NOT RELIABLE: name is arbitrary -- doesn't mean 'constructed by';
// that property can be easily overwritten.
// anyway, using it, you can create a new object as if saying: 
// "I don't care how this particular object was created -- I want another just like it":
var r = new h.constructor('Rafaello');
h3.name; // "Rafaello"


// `instanceof` operator
// test if obj was created with specific constructor function (NOT RELIABLE):
h instanceof Hero; // true
h instanceof Object; // true

