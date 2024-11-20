// These will be stored in stack
let myName = 'John';
let myLastName = 'Doe';
let myAge = 40;

// Objects are referenced and stored in heap
let myCar = {
  brand: 'Tesla',
  model: 'Model 3',
  color: 'Black',
  year: 2024
}

let myWifesCar = myCar;
myWifesCar.color = 'Pink';

console.log(myCar);