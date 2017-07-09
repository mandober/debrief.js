/**
 * @class     {Object}  Node
 * @property  {number}  count  Keeps count of nodes.
 * @property  {Object}  next   Points to the succeeding node of the list.
 * @property  {Object}  prev   Points to the preceding node of the list.
 */
export default class Node {
    constructor(value) {
        let node = Object.create(null);
        node.data = value;
        node.next = null;
        node.prev = null;
        return node;
    }
}
