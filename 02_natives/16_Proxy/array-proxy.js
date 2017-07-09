target = [0,1,2,3,4];

handler = {
    get(target, prop) {
        console.log(prop);
        prop = (prop < 0) ? (target.length + +prop) : prop; /*?*/
        return target[prop];
    }
};

var arr = new Proxy(target, handler);

// range('1..16..2').map ...
//       [1..16..2].map ...
// map (+1) [1..5]
// eval('map (+1) [1..5]')







function Stack() {
    return new Proxy(this, { /* handler */

        get(target, prop) {
            //console.log(prop);
            return (prop in target) ? target[prop] : () => new Error(`no such meth`);
        }

    });
}

Stack.prototype.bar = function () {
    return `I am meth that exist`;
}

s = new Stack(); /*?*/

s.bar(); /*?*/
//=> you called bar. Good job!

s.meth(); /*?*/
//=> you called meth but it doesn't exist

s.meth; /*?*/



class Arrayz extends Array {
    constructor(...args) /*?*/
    {
        super(...args); /*?*/
        return new Proxy(this, { /* handler */
            get(target, prop) {
                console.log(prop);
                return (prop in target) ? target[prop] : () => new Error(`no such meth`);
            }
        });
    }

    head() {
        return this[0];
    }
}

var x = new Arrayz(3, 6, 9); /*?*/
x.head(); /*?*/
x.tail(); /*?*/
