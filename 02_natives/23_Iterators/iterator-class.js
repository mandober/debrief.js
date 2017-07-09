class anotherArrayIterator {
    constructor(array) {
        this.array = array;
        this.index = 0;
    }

    next() {
        var result = {
            value: undefined,
            done: true
        };
        if (this.index < this.array.length) {
            result.value = this.array[this.index++];
            result.done = false;
        }
        return result;
    }
}


class Company {
    constructor() {
        this.employees = [];
    }

    addEmployees(...names) {
        this.employees = this.employees.concat(names);
    }

    [Symbol.iterator]() {
        return new ArrayIterator(this.employees);
    }
}


class ArrayIterator {
    constructor(array) {
        if (!Array.isArray(array)) return new TypeError(`[ArrayIterator] Parameter must be an array.`);
        this.array = array;
        this.index = 0;
    }

    next() {
        return {
            value: this.array[this.index],
            done: this.index++ >= this.array.length
        };
    }

}

let company = new Company();
company.addEmployees("Tim", "Sue", "Joy", "Tom");

for (let employee of company) {
    console.log('employee: ', employee);
}

let it = company[Symbol.iterator]();
console.log('it.next(): ', it.next());
console.log('it.next(): ', it.next());
console.log('it.next(): ', it.next());
console.log('it.next(): ', it.next());
console.log('it.next(): ', it.next());


var a = [1,2,3];
var ite = new ArrayIterator(a);
console.log('ite: ', ite);
