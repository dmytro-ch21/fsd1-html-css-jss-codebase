console.log("JS Function Basics");

// A function is a way to group code together
// You can then, call the function to execute that code multiple times

// declare a function
function sayHi() {
  console.log("Hello, from function");
  console.log("This code can be reused!");
  console.log("Byeee!");
}

// call the function
// sayHi();
// sayHi();
// sayHi();

// Ususally you will need to pass some data
// Parameters and Arguments
function sayHello(name) {
  // params are bind to the scope of this function
  console.log(`Hello, I'm ${name}`);
}

const x = "Dima";
// sayHello(x);
// sayHello('John');

// You can declare multiple parameters
function addNumbers(num1, num2) {
  console.log(num1 + num2);
}

// Usually, we will want to process the data and then return it back to the caller
function subtractNumbers(num1, num2) {
  // everything before return statemnt will be run
  //   console.log('before return');
  return num1 - num2;
  console.log("after return");
  // you cannot have any other lines of code after the return statement
}

const result = subtractNumbers(20, 10);
// console.log(result);
// console.log(subtractNumbers(33, 12));

// Parameters and Arguments in depth
// we can assign to the parameter a default value to prevent any issues
// and avoind having our param set do undefined
function createUser(user = "No info") {
  return `User with name ${user} has been created!`;
}

let res = createUser("John");

// console.log(res);

// Rest parameter
// with the rest operator it will collect all the arugments and place into an array
// then you can iterate over the array and process it
function sumAll(...nums) {
  let total = 0;
  for (let num of nums) {
    total += num;
  }
  return total;
}

res = sumAll(10, 20, 30, 430);

console.log(res);

// Object as parameter

function logUser(user) {
  // object {name: '', age: 0}
  return `User ${user.name} is ${user.age} years old! Hello There.`;
}

const user = {
  name: "John Doe",
  age: 30,
};

// res = logUser(user);

console.log(logUser(user));

// cretae a function that randomnly picks a number from given array, or list of nums
const numbers = [11, 2, 3, 44, 55, 4];

// console.log(Math.random() * numbers.length);



// const randIndex = Math.floor(Math.random() * numbers.length); // 0 - 1, 5.9999677836 -> 5
// console.log(numbers[randIndex]);

function getRandom(arr){
    const randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
}

// console.log(getRandom(numbers));



