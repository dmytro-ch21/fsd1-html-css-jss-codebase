console.log('JS Object Nesting and Spread Operator');

// Nested object
const newPerson = {
    name: 'John Doe', 
    age: 50,
    isNewUser: true,
    address: {
        street: '123 Main Street',
        city: 'Miami',
        state: 'FL',
        zipcode: 33000,
        coordinates: {
            lat: -110,
            lon: 34
        }
    }
}

// console.log(newPerson.address.coordinates.lat);

// sometimes you you will need to ccombine or merge two objects

const userInfo = {
    name: 'Bart Simpson',
    dateOfBirth: new Date('1990-01-01').getTime(),
    isActive: false
}

const userCredentials = {
    username: 'bart.simpson',
    email: 'bsimpson@email.com',
    password: 'secret'
}


// combine - 2 ways
const user = Object.assign({}, userInfo, userCredentials, {newProp: 'value'});
// or
// use spread operator
const user2 = {...userInfo, ...userCredentials};


// Arrays with objects 

const products = [
    {
        id: 1,
        title: 'iPhone 16',
        price: 1299.99
    },
    {
        id: 2,
        title: 'Samsung Laptop',
        price: 1499.99
    },
    {
        id: 3,
        title: 'Google Pixel',
        price: 999.99
    }
];

// console.log(products[0].price);

let result;
const person = {
    name: 'John Doe', 
    age: 50,
    isNewUser: true
}


// Few useful methods from Object 
// Object.keys()
result = Object.keys(person);

// Get all values separately 
result = Object.values(person);

// Get all etries as an array
result = Object.entries(person);

// identify if the object has a property
result = person.hasOwnProperty('name');

result = 'address' in person;

console.log(result);



