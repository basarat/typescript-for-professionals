function log(value: unknown) {
  if (typeof value == 'number') {
    console.log(value.toFixed(2));
  } else {
    console.log(value);
  }
}

log(123.456);
log('Hello world');