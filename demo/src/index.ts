function arrayOpen<T>(a: T, b: T) {
  return [a, b];
}

const free = arrayOpen(1, 2);
//     ^?

function arrayConstrained<T extends number>(a: T, b: T) {
  return [a, b];
}



