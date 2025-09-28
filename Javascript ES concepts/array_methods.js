// array methods example in javascript
const nums = [1, 2, 3, 4, 5];

const squared = nums.map(n => n * n)
const evens = nums.filter(n => n % 2 === 0); // this will filter out even numbers 2 and 4
const add = nums.reduce((acc, n) => acc + n, 0) 
console.log(squared);
console.log(evens)
console.log(add)