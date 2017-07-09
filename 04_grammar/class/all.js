// @ts-check
'use strict';
'use carefully - work in progress';
/**
 * Data structure: LINKED LISTS (LL)
 *
 * @version 0.0.0.170430
 * @description Linked lists implemented with classes.
 *
 * Classes:
 * - Node
 *   - DoublyNode
 * - LinkedList
 *   - SinglyLinkedList
 *   - DoublyLinkedList
 *   - SinglyLinkedCircularList
 *   - DoublyLinkedCircularList
 *
 * List types: singly|doubly linked linear|circular
 *
 * Methods: append, prepend, insert, traverse, has, delete
 *
 * Properties of linked-list instances:
 * - head: points to the first node
 * - tail: points to the last node (doubly-linked lists only)
 * - count: tracks nodes count
 *
 * Node's properties:
 * - data: node's payload
 * - next: references the succeeding node
 * - prev: references the preceding node (doubly-linked lists only)
 */


class Node {
    constructor(value) {
        let node = Object.create(null);
        node.data = value;
        node.next = null;
        return node;
    }
}

class DoublyNode extends Node {
    constructor(value) {
        let node = super(value);
        node.prev = null;
        return node;
    }
}

class LinkedList {
    constructor() {
        this.count = 0;
        this.head = null;
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

    [Symbol.iterator]() {
        let k = this.traverse(),
            i = 0;
        return {
            next: function () {
                return {
                    value: k[i],
                    done: i++ >= k.length
                };
            }
        }
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


} // LL


class SinglyLinkedList extends LinkedList {
    append(value) {
        if (this.head === null) { // if list is empty
            this.head = new Node(value);
        } else {
            let lastNode = this._findLastNode(this.head, null);
            lastNode.next = new Node(value);
        }
        this.count++;
        return this;
    }
} // SLL

class DoublyLinkedList extends LinkedList {
    constructor() {
        super();
        this.tail = null;
    }

    append(value) {
        if (this.head === null) {
            this.head = this.tail = new DoublyNode(value);
        } else {
            let newNode = new DoublyNode(value);
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.count++;
        return this;
    }
} // DLL

class SinglyLinkedCircularList extends SinglyLinkedList {
    append(value) {
        // if list is empty, newly created node is the first node
        if (this.head === null) {
            let newNode = new Node(value);
            this.head = newNode;
            newNode.next = this.head;
            // otherwise, find last node, the one whose
            // `next` points to the first (`this.head`)
        } else {
            let newNode = new Node(value),
                headNode = this.head,
                lastNode = this._findLastNode(headNode, headNode);
            lastNode.next = newNode;
            newNode.next = headNode;
        }
        // increase node count, return the list
        this.count++;
    }

} // SLCL

class DoublyLinkedCircularList extends DoublyLinkedList {
    constructor() {
        super();
        this.tail = null;
    }

    append(value) {
        if (this.head === null) {
            let newNode = new DoublyNode(value);
            this.tail = this.head = newNode;
            newNode.next = this.head;
            //newNode.prev = this.head; // not needed
        } else {
            let newNode = new DoublyNode(value),
                headNode = this.head,
                tailNode = this.tail; // this.head.prev = this.tail

            tailNode.next = headNode.prev = newNode; // tail.next => new, head.prev => new
            newNode.prev = tailNode; // new.prev => ex tail node
            //this.tail = newNode;
            newNode.next = headNode; // new.next => head node
        }
        this.count++;
        return this;
    }

} // DLCL



// node export
if (typeof module !== "undefined") {
    module.exports = {
        SinglyLinkedList: SinglyLinkedList,
        DoublyLinkedList: DoublyLinkedList,
        SinglyLinkedCircularList: SinglyLinkedCircularList,
        DoublyLinkedCircularList: DoublyLinkedCircularList,
    }
}
