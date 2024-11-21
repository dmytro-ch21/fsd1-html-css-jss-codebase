// Operators in JS
console.log('Operators in JS');

// console.log(10 + 2); 
// console.log(10 - 2);
// console.log(10 * 2);
// console.log(10 / 2);
// console.log(7 % 5);
// console.log(3 ** 2);

let result;

result = -4 + 10;
result = result - 2;
result = 10 * 20;
result = result / 5;
result = result % 11;
result = 4 ** 4;

// console.log(result);

// (+) Math with numbers, or you can use with string for concatenation 
const text = 'Yoll' + 'Academy';
const firstName = 'John';
const lastName = 'Doe';
const fullName = firstName + ' ' + lastName;
// console.log(fullName);


// Increment and decrement 
let count = 1;
++count;
// count++;
// console.log(count);

count--;
// count = count - 1;
// console.log(count);


// Assignment operators
let num = 100;

// num = num + 5; // 105
// num += 5;
// num -= 5;
// num *= 2;
// num /= 2; 
// num %= 14;
// num **= 5;

// console.log(num);

// Comparison Operators
// Equality (==) or (===)
// console.log(2 == '2'); // == -> loose comparison and it wount check the types, will check if values are the same
// console.log(2 === '2'); // === -> strict comparison and it will check the values and the types to match

const x = 5; 
const y = 5;

let comparisonResult = x === y;
comparisonResult = x != y; 
comparisonResult = x !== y;

comparisonResult = 10 > 10;
comparisonResult = 10 >= 10;

comparisonResult = 6 < 6;
comparisonResult = 6 <= 6;

console.log(comparisonResult);


console.log(2 == '2');