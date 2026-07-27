const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = num.filter((i) => i % 2 === 0);
console.log("num=", num);
console.log("Even numbers:", even);
const square = num.map((i) => i * i);
console.log("Square numbers:", square);
const sum = num.reduce((s, i) => s + i, 0);
console.log("Sum:", sum);
