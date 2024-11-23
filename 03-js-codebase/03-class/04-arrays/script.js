// console.log("Arrays In JS");

// // Arrays - collection of valuers related to each other
// // const myArray = [123, 'hello', true, {name: 'John'}];

// let x = 10, y = 20, t = 30;
// // Create an array with Literals
// const numbers = [10, 20, 30, 40, 50, x, y, t];
// console.log(numbers);

// // Create an array with constructior
// const arr = new Array('apple', 'banana', 'grape');
// console.log(arr);

// // access elements 
// console.log(numbers[3]);
// console.log(numbers[0] + numbers[4]);

// // use element in templates and concat
// let fact = `I love ${arr[2]}`;

// // length is a property noty a method
// let result = arr.length;

// // reassign the value of an element
// arr[1] = 'pineapple';

// const newNumbers = [10, 20, 30, 40, 50];

// // decrease the length of an array
// newNumbers.length = 3;

// // add a value to the end of the array
// newNumbers[newNumbers.length] = 60;

// // Array methods
// const nums = [22, 43, 11, 54, 23, 77];

// // push() - add element at the end of the array
// nums.push(99);

// // pop() - remove the last element of the array
// nums.pop();

// // unshift() - add element to the beginning of the array
// nums.unshift(100);

// // shift() - how do we remove the element from the start of the array
// nums.shift();

// // reverse() - reverse an array
// nums.reverse();

// // includes() - check if an element exists 
// let res = nums.includes(99); // boolean

// // indexOf() - get the index of an item
// let index = nums.indexOf(111);

// // slice() - getting you back a part of array without mutating it
// let partOfArray = nums.slice(2);
// partOfArray = nums.slice(1, 5);

// // splice() - returns a part of the array and removes the items from array permanently
// // partOfArray = nums.splice(1, 4);
// // console.log(partOfArray);

// // in splice the very first argument is the index where you start 
// // the second argument is how many elements you will return and remove from original array
// nums.splice(3, 1); 
// nums.splice(1, 2);
// console.log(nums);

// sort() - sort the array
const newNums = [99, 0, -1, 3, 22, 15];

// newNums.sort(); // asc order

// desc - make sure you first sort() and then reverse()

newNums.sort();
newNums.reverse();

// console.log(newNums);

// join() - bind all idems into one string and have a delimiter in between
let result = newNums.join('-');
// console.log(result);

// chaining methods
let str = 'Hello world';
result = str.split('').reverse().join('');
// console.log(result);


// concat - merge arrays together

const names1 = ['John', 'Mark', 'Nick'];
const names2 = ['Bart', 'Homer', 'Lisa', 'Jane'];
let allNames = names1.concat(names2);
// console.log(allNames);

// Nested arrays

const fruits = ['apple', 'banana', 'grape', 'orange'];
const veggies = ['tomato', 'potato', 'cucumber'];

// fruits.push(veggies);

// console.log(fruits);

// console.log(fruits[4][2]);

const fruitsAndVeggies = [fruits, veggies];
console.log(fruitsAndVeggies);

console.log(fruitsAndVeggies[1][1]);

// Spread operator
const spreadFruitsAndVeggies = [...fruits, ...veggies];
console.log(spreadFruitsAndVeggies);

// flatten an array
const arrOfNums = [1, 2, 3, 4, [10, 20, 30], [-9, -19, -22], 99, 77, 43];
console.log(arrOfNums);

let flatArrOfNums = arrOfNums.flat();

console.log(flatArrOfNums);

// we can check if a value is an array
console.log(Array.isArray('hello'));
console.log(Array.isArray(flatArrOfNums));

const strArray = Array.from('hello');
console.log(strArray);





