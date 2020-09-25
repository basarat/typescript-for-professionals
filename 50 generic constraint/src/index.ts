type NameFields = { firstName: string, lastName: string };

function addFullName<T extends NameFields>(obj: T): T & { fullName: string } {
  return {
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`,
  };
}

const john = addFullName({
  email: 'john@example.com',
  firstName: 'John',
  lastName: 'Doe'
});

console.log(john.email); // john@example.com
console.log(john.fullName); // John Doe

const jane = addFullName({ firstName: 'Jane', lastName: 'Austen' });