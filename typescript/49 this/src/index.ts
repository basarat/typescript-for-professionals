function double(this: { value: number }) {
  this.value = this.value * 2;
}

const valid = {
  value: 10,
  double,
};

valid.double();

console.log(valid.value); // 20

const invalid = {
  value: 10,
  double,
};

invalid.double(); // Error