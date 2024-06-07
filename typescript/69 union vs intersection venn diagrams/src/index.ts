export type Name = { name: string };
export type Age = { age: number };

type Union = Name | Age | (Name & Age);

let union: Union;
union = { name: 'Jane' };
union = { age: 29 }
union = { name: 'Jane', age: 29 };

function filter(union: Union) {
  if ('name' in union) { // Name
    union.name; // string
  }

  if ('age' in union) { // Age
    union.age; // number
  }

  if ('name' in union && 'age' in union) { // Name & Age
    union.name;
    union.age;
  }
}