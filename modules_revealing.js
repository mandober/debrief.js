'use strict';

// MODULES
// pattern 1: Revealing Module pattern

/*
The most common usage of closure in JavaScript is the module pattern. Modules let you
define private implementation details (variables, functions) that are hidden from the outside
world, as well as a public API that is accessible from the outside
*/

function User() {

    var username,
        password;

    function doLogin(user, pw) {
        username = user;
        password = pw;
        console.log('user: ' + user);
        console.log('pass: ' + pw);
        // the rest of the login work...
    }

    return publicAPI = {
        login: doLogin
    };

}

// create a `User` module instance
var fred = User();
fred.login("fred", "12Battery34!");

// another
var wilma = User();
wilma.login("wilma", "abc");

/*
Executing User() creates an instance of the User module -- a whole new scope is
created, and thus a whole new copy of each of these inner variables/functions.
We assign this instance to fred. If we run User() again, we'd get a new instance
entirely separate from fred.

WARNING: We are not calling `new User()` here, on purpose, despite the fact that probably
seems more common to most. User() is just a function, not a class to be instantiated, so
it's just called normally. Using new would be inappropriate and actually waste resources.
*/