const nums = [0, 1, 2];

if (nums[3] != null) {
  const example: number = nums[3];  // Not okay!
  console.log(example.toFixed(2)); // Error at runtime
}

for (const num of nums) {
  console.log(num.toFixed(2));
}

nums.forEach(num => console.log(num.toFixed(2)));

const trusted = [0, 1, 2];
console.log(trusted[2]?.toFixed(2));