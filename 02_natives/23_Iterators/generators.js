'use strict';
// iterators
let table = {
    0: 11,
    1: 22,
    2: 33,

    [Symbol.toStringTag]: "table",

    *[Symbol.iterator]() {
        for (let [key, val] in Object.keys(table)) {
            yield val;
        }
    }

    /*
    [Symbol.iterator]() {
        let keys = Object.keys(this),
            i = 0;
        return {
            next: function () {
                return {
                    value: keys[i],
                    done : i++ >= keys.length
                };
            }
        }
    }
    */
}

let k = Object.keys(table);
console.log('k: ', k);


for (let val of table) {
    console.log(val);
}

var it = table[Symbol.iterator]();
console.log('it : ', it );

// console.log('it.next(): ', it.next());
// console.log('it.next(): ', it.next());
// console.log('it.next(): ', it.next());
// console.log('it.next(): ', it.next());

// Object.prototype[Symbol.toStringTag] = "Object.prototype";

