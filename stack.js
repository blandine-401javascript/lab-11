'use strict';
const Node = require('./node.js');


class Stack {
  constructor() {
    this.top = null;
  }

  push(val) {
    const node = new Node(val, this.top);
    this.top = node;
  }

  pop() {
    if (this.top) {
      const temp = this.top;
      this.top = this.top.next;
      return temp.val;
    }
    console.error('Empty Stack');
  }

  peek() {
    if (this.top) {
      return this.top.val;
    }
    console.error('Empty Stack');
  }

  isEmpty() {
    return this.top === null;
  }
}


module.exports = Stack;
