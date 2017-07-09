// CURRY
// currying parameters

'use strict';

let dragon = name =>
                size =>
                    element =>
                        `${name} is a ${size} dragon that breathes ${element}`;

let drac = dragon("arx")("gynormous")("NaCl");
console.log(drac);

