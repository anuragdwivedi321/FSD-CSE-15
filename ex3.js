const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = num.filter((i) => i % 2 === 0); //filter method is used to create a new array with all elements that pass the test implemented by the provided function. In this case, we are filtering out even numbers from the num array.
console.log("num=", num);

console.log("Even numbers:", even);
const square = num.map((i) => i * i); //map method is used to create a new array with the results of calling a provided function on every element in the calling array.
console.log("Square numbers:", square);

const sum = num.reduce((s, i) => s + i, 0); //reduce method is used to execute a provided function against an accumulator and each element in the array (from left to right) to reduce it to a single output value.
console.log("Sum:", sum);
