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

// Assign to myWifesCar a reference to myCar
let myWifesCar = myCar;
console.log(myWifesCar);

// Change the color of the car object
myWifesCar.color = 'Pink';

// Print myCar
console.log(myCar);