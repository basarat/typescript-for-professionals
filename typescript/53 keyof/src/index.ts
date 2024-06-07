type Person = {
  name: string,
  age: number,
  location: string,
};

const john: Person = {
  name: 'John',
  age: 35,
  location: 'Melbourne',
};

function logGet<Obj, Key extends keyof Obj>(obj: Obj, key: Key) {
  const value = obj[key];
  console.log('Getting:', key, value);
  return value;
}

const age = logGet(john, 'age'); // 35
console.log(logGet(john, 'email')); // Error