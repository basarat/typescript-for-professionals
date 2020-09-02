// Array
let array: number[] = [1, 2, 3];

// Usage
array = [1];
array = [1, 2, 3, 4, 5];
array = ['hello']; // Error

// Tuple
let tuple: [number, number] = [0, 0];

// Usage
tuple = [1, 1];
tuple = [2, 6];
tuple = [5]; // Error: must be 2 items
tuple = [5, 4, 3]; // Error: must be 2 items
tuple = ['elite', 1337]; // Error: must be number