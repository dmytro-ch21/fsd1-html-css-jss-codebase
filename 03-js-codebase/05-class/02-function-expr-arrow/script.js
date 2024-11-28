console.log("JS Function Expression and Arrow");

// Basic declaration (Function declaration)
function add(x, y) {
  // function is hoisted
  return x + y;
}

// console.log(add(10, 20));

// Function Expression
const multiply = function (x, y) {
  // not hoisted
  return x * y;
};

// console.log(multiply(10, 2));

// Arrow Functions - Not Hoisted
// const subtract = (x, y) => {
//   return x - y;
// };

const subtractShort = (x, y) => x - y;
console.log(subtractShort(10, 5));

// // if you have only one parameter - you can ommit paranthesys
// const multiplyByTwo = num => num * 2;

// console.log(multiplyByTwo(30));

// Array - iterate over
// const nums = [10, 20, 30, 40, 50];

// nums.forEach(function(num){
//     console.log(num);
// });

// nums.forEach(num => console.log(num));

// when we need to return an object we will use () to avoid confusion
const createUser = () => ({name: 'John', age: 30});