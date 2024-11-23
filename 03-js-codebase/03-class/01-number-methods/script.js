console.log('Number Methods in JS');

const num = 123.9988;

// identify how many digits are in the num variable
let result;
result = num.toString().length;

// get fixed decimal points 
result = Number(num.toFixed(3));

// get a specific number of digits
result = num.toPrecision(3);

// get exponential number - for very large or very small numbers
result = num.toExponential(3);

// in different areas the numbers are denoted differently
const newNumber = 123456.452563;
result = newNumber.toLocaleString('en-US');
result = newNumber.toLocaleString('hi-IN');
result = newNumber.toLocaleString('de-DE');
result = newNumber.toLocaleString('ar-EG');

console.log(result, typeof result);
