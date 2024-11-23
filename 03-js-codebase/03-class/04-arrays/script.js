console.log("Arrays In JS");

// Arrays - collection of valuers related to each other
// const myArray = [123, 'hello', true, {name: 'John'}];

let x = 10, y = 20, t = 30;
// Create an array with Literals
const numbers = [10, 20, 30, 40, 50, x, y, t];
console.log(numbers);

// Create an array with constructior
const arr = new Array('apple', 'banana', 'grape');
console.log(arr);

console.log(numbers[3]);
console.log(numbers[0] + numbers[4]);

let fact = `I love ${arr[2]}`;
console.log(fact);

let result = arr.length;
console.log(result);

arr[1] = 'pineapple';
console.log(arr);

const newNumbers = [10, 20, 30, 40, 50];

console.log(newNumbers);

// newNumbers.length = 3;
// console.log(newNumbers);

newNumbers[newNumbers.length] = 60;
console.log(newNumbers);

// Array methods
const nums = [22, 43, 11, 54, 23, 77];

// add element at the end of the array
nums.push(99);

// remove the last element of the array
nums.pop();

// add element to the beginning of the array
nums.unshift(100);

// how do we remove the element from the start of the array
nums.shift();

// reverse an array
nums.reverse();

// check if an element exists 
let res = nums.includes(99); // boolean

// get the index of an item
let index = nums.indexOf(111);

// slice - getting you back a part of array without mutating it
let partOfArray = nums.slice(2);
partOfArray = nums.slice(1, 5);

// splice - returns a part of the array and removes the items from array permanently
// partOfArray = nums.splice(1, 4);
nums.splice(3, 1);
nums.splice(1, 2);

console.log(nums);

// console.log(partOfArray);




