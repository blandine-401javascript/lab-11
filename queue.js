'use strict';

const Node =require('./node.js');

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(val) {
    const node = new Node(val);
    if (!this.front) {
      this.front = node;
      this.back = node;
    } else {
      this.back.next = node;
      this.back = node;
    }
  }

  dequeue() {
    if (this.front) {
      const temp = this.front;
      this.front = this.front.next;
      return temp.val;
    }
    console.error('Empty Queue');
  }

  peek() {
    if (this.front) {
      return this.front.val;
    }
    console.error('Empty Queue');
  }

  isEmpty() {
    return this.front === null;
  }
}

module.exports = Queue;
