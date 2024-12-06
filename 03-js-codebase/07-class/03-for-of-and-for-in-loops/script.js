console.log("For Of and For In Loops");

// Array 
// const products = ['laptop', 'phone', 'tablet', 'pc'];

// Option 1
// for (let index = 0; index < products.length; index++) {
//     console.log(products[index]);  
// }

// For Of Loop - is used to iterate over iterable objects
// for(const product of products){ // product will be reinitialized every iteration
//     console.log(product);
// }

// Array with objects
// const users = [
//     {name: 'John', age: 35},
//     {name: 'Jane', age: 30},
//     {name: 'Jake', age: 15},
//     {name: 'Jude', age: 5},
// ];
// console.log('Users over 30 y.o');
// for(const user of users){
//     if(user.age >= 30){
//         console.log(user.name);
//     }
// }

// Iterating over strings
// const str = 'Hello World';

// // option 1
// for (let index = str.length - 1; index >= 0; index--) {
//     // console.log(str.charAt(index));
//     console.log(str[index]);
// }

// // Option 2
// for(const letter of str){
//     console.log(letter);
// }


// For In allows us to iterate over the objects

// const car = {
//     make: 'BMW',
//     model: 'M5',
//     doors: 5,
//     type: 'Sedan',
//     maxSpeed: 160,
//     hp: 300
// }

// for(const key in car){
//     console.log(car[key]);
// }


// You can use this for arrays as well
// const products2 = ['laptop', 'phone', 'tablet', 'pc'];

// for(const index in products2){
//     console.log(products2[index]);
// }





