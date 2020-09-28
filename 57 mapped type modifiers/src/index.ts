export class State<T> {
  constructor(public current: T) { }
  update(next: Partial<T>) {
    this.current = { ...this.current, ...next };
  }
}

const state = new State({ x: 0, y: 0 });
state.update({ y: 123 });
console.log(state.current); // { x: 0, y: 123 }