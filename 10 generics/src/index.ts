/** A FIFO (First In First Out) collection */
class Queue<T> {
  data = [];
  push(item: T) { this.data.push(item); }
  pop(): T { return this.data.shift(); }
}

const queue = new Queue<number>();
queue.push(123);
queue.push(456);

console.log(queue.pop().toPrecision(1));
console.log(queue.pop().toPrecision(1));