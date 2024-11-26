console.log("JSON Intro");

// JSON - Java Script Object Notation
const product = {
  id: 1, 
  name: 'Product 1',
  description: 'Description of Product 1',
  price: 1000.99 
}

console.log(product);

// convert js object to a json
const jsonProduct = JSON.stringify(product);
console.log(jsonProduct);

// parse from text to a JS object
const parsedProduct = JSON.parse(jsonProduct);
console.log(parsedProduct);

// commonly you have arrays 
const products = [
  {
    id: 1, 
    name: 'Product 1',
    description: 'Description of Product 1',
    price: 1000.99 
  },
  {
    id: 2, 
    name: 'Product 2',
    description: 'Description of Product 2',
    price: 1000.99 
  },
  {
    id: 3, 
    name: 'Product 3',
    description: 'Description of Product 3',
    price: 1000.99 
  }
];

console.log(products);

const jsonProductsArray = JSON.stringify(products);
console.log(jsonProductsArray);

const parsedArrayWithProducts = JSON.parse(jsonProductsArray);
console.log(parsedArrayWithProducts);