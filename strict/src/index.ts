class Person {
  constructor(
    public name: string,
    public age: number
  ) {
  }
}

const adam = new Person('Adam', 120000);
console.log(adam.name, adam.age); // 'Adam', 120000