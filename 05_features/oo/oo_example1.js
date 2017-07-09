// oo

// example.1
var answerProt = {
    get: function() {
        return this.val;
    },
    a: 'answerProt'
};

// Object.create()
var firmAnswer = Object.create(answerProt);
firmAnswer.val = 42;

// setPrototypeOf()
var liteAnswer = {
    val: 3.14
};
Object.setPrototypeOf(liteAnswer, answerProt);

console.log('firmAnswer.get(): ', firmAnswer.get());
console.log('firmAnswer.a: ', firmAnswer.a);
console.log('liteAnswer.get(): ', liteAnswer.get());
console.log('liteAnswer.a: ', liteAnswer.a);


console.log('===================================================');

// example.2

var TaskProt = {
    init: function init(value) {
        this._val = value;
    },
    get: function get() {
        return this._val;
    }
};

var liteTask = Object.create(TaskProt);
liteTask.init(42);
console.log('liteTask.get(): ', liteTask.get());

var piTask = Object.create(TaskProt);
piTask.init(3.14);
console.log('piTask.get(): ', piTask.get());

var firmTaskProt = Object.create(TaskProt);
firmTaskProt.get = function () {
    return TaskProt.get.call(this) + '!';
};

var luckyTask = Object.create(firmTaskProt);
luckyTask.init(8);
console.log('luckyTask.get(): ', luckyTask.get());
