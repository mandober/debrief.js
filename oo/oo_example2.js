// oo
// example2

// "class" Person
var Person = {
    oid: 'Person',
    init: function(name, email) {
        this.name = name;
        this.email = email;
    },
    get: function() {
        return `${this.name} <${this.email}>`;
    }
};

// Person instance
var tony = Object.create(Person);
tony.init('Tony', 'tony@ctu.gov');
console.log('tony.get(): ', tony.get());

// "class" User
var User = {
    oid: 'User',
    init: function (name, email, role) {
        Person.init.call(this, name, email);
        this.role = role;
    },
    get: function () {
        return `${Person.get.call(this)}, role: ${this.role}`;
    }
};
// User extends Person
Object.setPrototypeOf(User, Person);

// User instance
var jack = Object.create(User);
jack.init('Jack', 'jack@ctu.gov', 'agent');
console.log('jack.get(): ', jack.get());

