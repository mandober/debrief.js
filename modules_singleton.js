// MODULES
// module singleton pattern

var foo = (function CoolModule() {
    'use strict';

    var something = "cool",
        another = [1, 2, 3];

    function doSomething() {
        console.log(something);
    }

    function doAnother() {
        console.log(another.join( " ! " ));
    }

    return {
        doSomething: doSomething,
        doAnother: doAnother
    };

})();

foo.doSomething(); // cool
foo.doAnother(); // 1 ! 2 ! 3
