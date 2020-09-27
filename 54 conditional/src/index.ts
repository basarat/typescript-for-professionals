export type TypeName<T> =
  T extends string ? 'string' :
  T extends number ? 'number' :
  T extends boolean ? 'boolean' :
  T extends undefined ? 'undefined' :
  T extends symbol ? 'symbol' :
  T extends bigint ? 'bigint' :
  T extends Function ? 'function' :
  'object';

function typeName<T>(t: T): TypeName<T> {
  return typeof t as TypeName<T>;
}

const str = typeName('hello world');
const num = typeName(123);
const bool = typeName(true);
const undef = typeName(undefined);
const sym = typeName(Symbol('star'));
const big = typeName(24n);
const func = typeName(function () { });
const obj = typeName(null);