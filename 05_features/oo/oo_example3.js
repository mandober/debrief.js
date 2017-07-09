// oo
// example3

'use strict';

// "class" Person
var Person = {
    oid: 'Person',
    init: function(name, email) {
        this.name = name;
        this.email = email;
    },
    get: function () {
        return `${this.name} <${this.email}>`;
    }
};

// Person instance
var tony = Object.create(Person);
tony.init('Tony', 'tony@ctu.gov');
console.log('tony.get(): ', tony.get());


// "class" User extends Person
var User = Object.create(Person);
User.oid = 'User';
User.parent = Object.getPrototypeOf(User);

User.init = function (name, email, role) {
    this.__proto__.init.call(User, name, email);
    this.role = role;
};

User.get = function () {
    return `${Person.get.call(this)}, role: ${this.role}`;
};

// User instance
var jack = Object.create(User);
jack.init('Jack', 'jack@ctu.gov', 'agent');
console.log('jack.get(): ', jack.get());

