class Arrayz extends Array {
    constructor(...args) {
        super(...args);
        return new Proxy(this, { /* handler */
            get(target, prop) {
                //console.log(prop);

                // if (prop in Object.getOwnPropertyNames(target)) {
                //     console.log(prop);
                // }
                return (prop in target) ? target[prop] : () => new Error(`no such meth`);

                //* negative indices
                // if (typeof prop === "number") {
                //     prop = (prop < 0) ? (this.length + +prop) : prop; /*?*/
                //     return Reflect.get(this, prop);
                // }
                //* no such method
            }
        });
    }

    first() {
        return this[0];
    }

    last() {
        return this[this.length - 1];
    }

    meth() {
        return Reflect.ownKeys(Arrayz.prototype);
    }

    keyz() {
        return Reflect.ownKeys(x);
    }

    // static methods() {
    //     return ["head", "tail", "first", "last"];
    // }

}

var x = new Arrayz(3, 6, 9); /*?*/

Arrayz.prototype instanceof Array; /*?*/
x instanceof Array; /*?*/
x instanceof Arrayz; /*?*/


x.first(); /*?*/
x.meth(); /*?*/
x.keyz(); /*?*/
x.all(); /*?*/

x.last(); /*?*/
x.last;/*?*/

x[1]; /*?*/
x[-1]; /*?*/
