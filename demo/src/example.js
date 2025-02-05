const fun = () => { };

Object.setPrototypeOf(fun, { debug: 'fancy' });

console.log(fun.debug); // fancy

console.log(Object.hasOwn(fun, 'debug')); // false
