// function Sum(a, b) {
//     return a+b;
// }

const Sum = (a=0, b=0) => a + b; //here we are using default parameters in the function definition. If no arguments are passed, a and b will default to 0.


console.log("sum",Sum(10)); //output: sum 10
console.log("sum",Sum(10, 20)); //output: sum 30
console.log("sum",Sum()); //output: sum 0 