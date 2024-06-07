type Person = {
  displayName: string,
  email: string,
};

type PersonDictionary = {
  [username: string]: Person,
};

const persons: PersonDictionary = {
  // jane: { displayName: 'Jane Doe', email: 'jane@example.com' },
};

persons['john'] = { displayName: 'John Doe', email: 'john@example.com' };

console.log(persons['john']);

delete persons['john'];