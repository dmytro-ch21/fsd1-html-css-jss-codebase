console.log('Type Conversions In JS');

// const name = prompt('Enter your name: ');
// console.log('Hello ' + name);

// const age = prompt('Enter your age: ');
// console.log(age, typeof age);

// console.log('In 2 years you will be: ', age + 2);

// Conversions

let someNumber = '20';
// console.log(someNumber, typeof someNumber);

// String to a number
// someNumber = parseInt(someNumber); // it will identify the numbers until the first not digit character
// someNumber = Number(someNumber);
// unary operator
someNumber = +someNumber;

// console.log(someNumber, typeof someNumber);

// floating number

let newNumber = '25.9';
// newNumber = Number(newNumber);
// newNumber = +newNumber;
newNumber = parseFloat(newNumber);
// console.log(newNumber, typeof newNumber);

let realNumber = null;
// realNumber = realNumber.toString();
realNumber = String(realNumber); 
// realNumber = '' + realNumber;
// console.log(realNumber, typeof realNumber);

// Boolean Conversion 
let someValue = NaN;
let boolResult = Boolean(someValue);
// console.log(boolResult);

// Type Coercion
let result;

let x = 5;
let y = '10';
result = x + y;

// Multiplication example
// result = x * y;
// result = x + null;
// result = x + true;
// result = x + false;
// result = x + undefined;
// result = 'ten' * 5;


console.log(result, typeof result);






