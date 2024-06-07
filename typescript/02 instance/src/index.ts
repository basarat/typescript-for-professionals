let regexp: RegExp = new RegExp('ab+c');

let array: Array<number> = [1, 2, 3];

let set: Set<number> = new Set([1, 2, 3]);

/** A first in first out collection */
class Queue<T> {
  private data: Array<T> = [];
  push(item: T) { this.data.push(item); }
  pop(): T | undefined { return this.data.shift(); }
}

let queue: Queue<number> = new Queue();