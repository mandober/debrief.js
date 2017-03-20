// FUNCTIONS
// Constructor functions

'use strict';

function Hero(name) {
    this.name = name;
    this.occupation = 'Ninja';
    this.whoAreYou = function () {
        return "I'm " + this.name + " and I'm a " + this.occupation;
    };
}

var h1 = new Hero('Michelangelo');
var h2 = new Hero('Donatello');
h2.whoAreYou(); //"I'm Donatello and I'm a Ninja"

