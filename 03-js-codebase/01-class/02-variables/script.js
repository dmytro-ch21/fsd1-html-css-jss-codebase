// Variables are containers to store data
// In JS there are 3 different variables -> var, let, const

// Pay attention to
// type of vatiable comes first and it is a keyword - you need to type specifically as is
// names of variables use the camelCase approach, first word with small letter and others capitalized
let firstName = "John";
let lastName = "Doe";

console.log(firstName, lastName);

var age = 30; // initialize first

console.log(age);

// Naming Conventions

// let 1name = 'Dima'; - cannot start with numbers
// let name+last = 'Cho'; - cannot have special characters

// Name Formatting
// name, age, num

// multi-word formatting
// firstName - camelCase
// first_name - underscore, snake case
// FirstName - PascalCase
// firstname - lowercase

// Reassigning variables
let myAge = 35;
console.log(myAge);

// reassign value of already declared value
myAge = 31;
console.log(myAge);

myAge = myAge + 1; // myAge = 31 + 1 = 32;
console.log(myAge);

// Constants - const

const x = 1000;
// x = 2000; - cannot be reassigned
console.log(x);

// const score; // constants cannot be only declared, it should be initialized as well

// cost with objects and arrays

const person = {
  name: "Dima",
};
console.log(person);

// person = {}; cannot reassign

// but you can modify an object
person.name = "Mike";
console.log(person);

// Declare multiple variables at once
let a, b, c;
console.log(a, b, c);

// Declare and initialize multiple variables
const d = 20,
  f = 30,
  p = 100;

  console.log(d, f, p);