console.log("JS Objects Basics");
let prop;
// Declare an object (2 ways)

// With constructor
// const person = new Object({
//     name: 'Bart Simpson',
//     age: 30,
//     isNewUser: true
// });

// Object Literals - more performant
const person = { 
    name: "Bart Simpson",
    age: 30, 
    isNewUser: false,
};

// Access the properties 
// 1. using dot operator
prop = person.isNewUser;

// 2. using square brackets
prop = person['name'];

// Adding more properties 
person.newProprty = 'Some value';

// Removing properties
delete person.isNewUser;

// Different properties an obj can have
const newPerson = {
    name: 'Lisa Simpson',
    age: 12, 
    isNewUser: true,

    // nested objects
    address: {
        street: '123 Main Street',
        city: 'Springfield',
        state: 'OR'
    },

    // arrays
    hobbies: ['music', 'study'],

    // functions
    sayHi: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

newPerson.sayHi();

// access the city of the person obj
console.log(newPerson);

// An object can have properties with spaces
const newSampleObj = {
    recommendedPropertyName: 'Some value here',
    'not recommended property name': 'some value here as well'
}

console.log(newSampleObj.recommendedPropertyName);
console.log(newSampleObj['not recommended property name']);


console.log(person);
