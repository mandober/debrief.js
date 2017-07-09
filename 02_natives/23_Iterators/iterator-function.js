function MakeIterator(array) {
    if (!Array.isArray(array)) return new TypeError(`[MakeIterator] Parameter must be an array.`);
}

MakeIterator.prototype.next = function (array) {
    return {
        value: array[i],
        done: i++ >= array.length
    }
}
