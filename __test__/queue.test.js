'use strict';

const Queue = require('../queue.js');


describe('Testing dequeue on queue', () => {
  it('Can successfully dequeue out of a value', () => {
    const queue = new Queue();
    queue.enqueue('a');
    expect(queue.dequeue()).toBe('a');
  });

  it('Can successfully empty a queue after  dequeues', () => {
    const queue = new Queue();
    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');
    queue.enqueue('d');
    queue.enqueue('e');
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toBeTruthy();
  });

});

describe('Testing peek on queue', () => {
  it('Can successfully peek into a queue', () => {
    const queue = new Queue();
    queue.enqueue('a');
    expect(queue.peek()).toBe('a');
  });

 
});
