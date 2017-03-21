// OO
// delegation

'use strict';

var Task = {
    setID: function (ID) {
        this.id = ID;
    },

    outputID: function () {
        console.log('Task ID: ' + this.id);
    }
};

// make `SubTask` delegate to `Task`
var SubTask = Object.create(Task);

SubTask.prepTask = function (ID, Label) {
    this.setID(ID);
    this.label = Label;
};

SubTask.outputTaskDetails = function () {
    this.outputID();
    console.log('Label: ' + this.label);
};

// usage
SubTask.prepTask(1, "Learn JS Delegation");
SubTask.outputTaskDetails();

SubTask.prepTask(2, "Forget about classes in JS");
SubTask.outputTaskDetails();
