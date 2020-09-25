namespace final {
  type Person = {
    displayName: string,
    email: string,
  };

  type PersonDictionary = {
    [username: string]: Person | undefined,
  };

  const persons: PersonDictionary = {
    // jane: { displayName: 'Jane Doe', email: 'jane@example.com' },
  };

  persons['john'] = { displayName: 'John Doe', email: 'john@example.com' };

  console.log(persons['john']);

  delete persons['john'];

  const result = persons['missing'];
  console.log(result, result.email); // undefined, Error

  persons['john'] = { displayName: 'John Doe', emale: 'john@example.com' }; // Error
}