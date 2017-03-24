// OBJECTS
// extending function's prototype

'use strict';

function Player(n, s, r) {
    this.name = n;
    this.score = s;
    this.rank = r;
}

Player.prototype.logInfo = function () {
    console.log("I'm", this.name);
}

Player.prototype.promote = function () {
    this.rank++;
    console.log("My new rank is", this.rank);
}

// USAGE
var fred = new Player("Fred", 10000, 5);
fred.logInfo();
fred.promote();