// implement method-missing hook

function Stack() {
    return new Proxy(this, { /* handler */

        get(target, prop) {
            if (Reflect.has(target, prop)) {
                return Reflect.get(target, prop);
            } else {
                return function methodMissing() {
                    console.log(`no such prop: ${prop}`);
                }
            }
        }

    });
}

Stack.prototype.bar = function () {
    return `you called bar. Good job!`;
}

s = new Stack(); /*?*/

s.bar(); /*?*/
//=> you called bar. Good job!

s.meth(); /*?*/
//=> you called meth but it doesn't exist

