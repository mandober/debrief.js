let Node = require('./class/node');

/**
 * @class     {Object}  LinkedList
 * @property  {number}  count  Keeps count of nodes.
 * @property  {Object}  head   Points to the first node of the list.
 * @property  {Object}  tail   Points to the last node of the list.
 */
export default class LinkedList {
    constructor() {
        this.count = 0;
        this.head = null;
        this.tail = null;
    }

    traverse(callback) {
        var current = this.head,
            arr = [];
        while (current !== null) {
            callback ? arr.push(callback(current.data)) : arr.push(current.data);
            current = current.next;
        }
        return arr;
    }

    has(value) {
        var current = this.head;
        while (current !== null) {
            if (current.data === value) return true;
            current = current.next;
        }
        return false;
    }

    _findLastNode(node, lastLink) {
        return (node.next === lastLink) ? node : this._findLastNode(node.next, lastLink);
    }

    _findNodeByPayload(node, payload) {
        while (node !== null) {
            if (node.data === payload) return node;
            node = node.next;
        }
        return null;
    }

    _findPreviousNodeByPayload(node, payload) {
        while (node.next !== null) {
            if (node.next.data === payload) return node;
            node = node.next;
        }
        return null;
    }

}
