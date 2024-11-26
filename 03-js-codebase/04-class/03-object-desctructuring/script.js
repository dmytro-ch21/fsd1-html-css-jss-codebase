console.log("JS Object Nesting and Spread Operator");

// // sometimes we have some variables already declared and we want to add them to an object
// const firstName = "Bart";
// const lastName = "Doe";

// const user = {
//   id: 1,
//   firstName,
//   lastName,
// };

// console.log(user);

// // Destructuring The Object

// const product = {
//   id: 1,
//   name: "Laptop",
//   price: 1000.99,
//   stock: 5,
//   info: {
//     make: "Dell",
//     model: "XPS 11",
//   },
// };

// // const id = product.id;
// // 1. The variables in {} are declared as id and name
// // 2. The prperties of product object with same names will be accessed
// // 3. The value of id and name from product object is assigned to newly created variables
// const {
//   id,
//   name,
//   info: { make },
// } = product;
// // console.log(id, name, make);

// // destructuring with change of variables
// console.log(product);
// // const { id: productId, name: productName } = product;

// const productId = product.id;
// const productName = product.name;


// console.log(productId, productName);

// // Array destructuring
// const arr = [10, 20, 30, 40, 50];


// // rest operator, the syntax is exact as in spread operator 
// const [x, y, ...rest] = arr;

// console.log(x, y);
// console.log(rest);


let user = {
  id: 1,
  firstName: 'John',
  lastName: 'Doe',
};

console.log(user);

// let id = user.id;
let { id } = user;

// let productId = user.id;
let { id: productId } = user;

user.productId = 1;
delete user.id;

console.log(user);

console.log(`productId: ${productId}`);

