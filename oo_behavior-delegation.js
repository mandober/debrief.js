// OO
// Behavior Delegation

// OLOO (objects linking other objects)
// OOLO (only objects linking objects)

var TaskHelper = {
    setId: function (id) {
        this.id = id;
    },
    getId: function () {
        return this.id;
    }
};

// make `TaskHelper` delegate to `Task`
// var TaskHelper = Object.create(Task);
//
// TaskHelper.prepareTask = function(id, label) {
//     this.setId(id);
//     this.label = label;
// };
//
// TaskHelper.outputTaskDetails = function() {
//     this.getId();
//     console.log(this.label);
// };

// or, first create obj then proto-link it
var Task = {
    setTask: function (id, label) {
        this.setId(id);
        this.label = label;
    },
    getTask: function () {
        return `id: ${this.getId()}\nlabel: ${this.label}`;
    }
};

Object.setPrototypeOf(Task, TaskHelper);


// usage:
var t = Object.create(Task);
t.setTask(1, 'Check this out');
console.log(t.getTask());
