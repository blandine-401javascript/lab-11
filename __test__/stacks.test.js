'use strict';

const Stack = require('../stack.js');

describe('Testing push on stack', () => {
  it('Can successfully push onto a stack?', () => {
    const stack = new Stack();
    stack.push('a');
    expect(stack.top.val).toBe('a');
  });

  test('Can successfully push multiple values ', () => {
    const stack = new Stack();
    stack.push('a');
    stack.push('b');
    stack.push('c');
    stack.push('d');
    stack.push('e');
    expect(stack.top.val).toBe('e');
  });
});

describe('Testing pop on stack', () => {
  it('Can successfully pop off the stack', () => {
    const stack = new Stack();
    stack.push('a');
    expect(stack.pop()).toBe('a');
  });

  it('Can successfully empty a stack after multiple pops', () => {
    const stack = new Stack();
    stack.push('a');
    stack.push('b');
    stack.push('c');
    stack.push('d');
    stack.push('e');
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toBeTruthy();
  });

  // test('Fails to pop on empty stack', () => {
  //   errorSpy.mockClear();
  //   const stack = new Stack();
  //   stack.pop();
  //   expect(errorSpy).toHaveBeenCalled();
  // });
});
