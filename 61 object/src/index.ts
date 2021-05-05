let car = { company: 'ford', model: 'mustang' };
let person = { name: 'John', age: 23 };

const objectToValue = new WeakMap();
objectToValue.set(car, 50000);
objectToValue.set(person, Infinity);

objectToValue.set(456, 123);