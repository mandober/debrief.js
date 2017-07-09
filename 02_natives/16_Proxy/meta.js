var target = {
    parr: []
};

var handler = {
    get: function (target, property) {
        target.parr.push(property);
        return property in target ? target[property] : "no";
    }
};

var prox = new Proxy(target, handler);


target.one;
target.nine = 9;

prox.two;
prox.tree;
prox.four;
prox.five;
prox.six;

prox.parr; /*?*/
target.parr; /*?*/

var pk = Reflect.ownKeys(prox);
console.log(pk);

var tk = Reflect.ownKeys(target);
console.log(tk);





