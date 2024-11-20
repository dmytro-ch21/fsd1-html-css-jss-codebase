// Strings - represent sequence of characters (text)
const firstName = 'John';
console.log(firstName, typeof firstName);

const str = "John's"
console.log(str);

const text = 'Someone said - "Java Script is boring"';
console.log(text);

// Number 
const myAge = 30.9;
const myTemp = 75;

console.log(myTemp, typeof myTemp);
console.log(myAge, typeof myAge);


// Boolean 
const hasKids = false;
console.log(hasKids, typeof hasKids);

// Null
const streetAddress = null;
console.log(streetAddress, typeof streetAddress);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null


// Undefined
let count; 
console.log(count, typeof count);

// Symbol 
const id = Symbol('id');
console.log(id, typeof id);

// BigInt - since number data type can sto a specific range 
const largeNumber = BigInt(120937746678732357654678123458763124);
const largeNumberInSimpleNumber = 120937746678732357654678123458763124n;
console.log(largeNumberInSimpleNumber, typeof largeNumberInSimpleNumber);
console.log(largeNumber, typeof largeNumber);
console.log(largeNumber);

// Reference Types 
// Arrays
const someNumbers = [2, 4, 6, 2, 1, 2];
console.log(someNumbers, typeof someNumbers);

// JS - Objects 
const car = {
  model: "Tesla",
  make: "CyberTruck",
  year: 2024,
  color: 'Titanium'
}

console.log(car, typeof car);

// JS - functions 
// it says function but it is an object at core 
function sayHi() {
  console.log('Hello!');
}

console.log(sayHi, typeof sayHi);