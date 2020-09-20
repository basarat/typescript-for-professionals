console.log(null == null);           // true (of course)
console.log(undefined == undefined); // true (of course)

console.log(undefined == null);      // true

console.log(false == null);          // false
console.log(0 == null);              // false
console.log('' == null);             // false

const result = someBooleanOrNullOrUndefined();
if (result == null) {
  console.log('Null or Undefined', result); // null | undefined
}
if (result != null) {
  console.log('Boolean', result); // true | false
}