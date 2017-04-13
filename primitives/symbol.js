// symbols

var mysym = Symbol("my own symbol");

mysym; // Symbol(my own symbol)
mysym.toString(); // "Symbol(my own symbol)"
typeof mysym; // "symbol"
Object.prototype.toString.call(mysym); // "[object Symbol]"

var obj = {};
obj[mysym] = "foobar";

Object.getOwnPropertySymbols(obj);// [ Symbol(my own symbol) ]

