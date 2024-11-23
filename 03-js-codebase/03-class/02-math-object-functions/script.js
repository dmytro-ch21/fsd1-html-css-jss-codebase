console.log("Math Methods in JS");

let result;

const x = 16;

const num = 123.444;

result = Math.sqrt(x);
result = Math.abs(-7);
result = Math.round(4.3);
result = Math.round(num * 100) / 100;
result = Math.ceil(4.111);
result = Math.floor(4.99);
result = Math.pow(2, 3);
result = Math.min(22, 44, 3, 2, 54, 23, -124);
result = Math.max(22, 44, 3, 2, 54, 23, -124);
result = Math.random(); // 0 - 1
result = Math.floor(Math.random() * 10); // 0 - 1

console.log(result);
