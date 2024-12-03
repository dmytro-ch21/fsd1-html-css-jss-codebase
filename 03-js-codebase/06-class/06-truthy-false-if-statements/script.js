console.log("Truthy and Falsy Values with If Statements");

// Falsy values: false, 0, ('', "", ``), null, undefined, NaN
// Truthy: Evrything else, including: [], {}, '0', 'false'

const givenValue = false;

if(NaN){
  console.log(`${givenValue} is truthy.`);
} else {
  console.log(`${givenValue} is falsy.`);
}

const email = '';

if(email){
  console.log('The email is present.');
} else {
  console.log('The email is missing.');
}

// Loose equality
// (==) - (===)
// undefined and null will not get coerced (undefined can be loosly compared to null)
// console.log(false == 0);
// console.log('' == 0);
// console.log(undefined == null);


// Logical Operators
// console.log(10 < 20 && 50 >= 60);
// console.log(10 < 20 || 50 >= 60);

// && with single values will retun back first falsy or last value
// short circuit
// //          t     t
// console.log(10 && 20);
// console.log(10 && 20 && 30);
// console.log(10 && '' && 20 && 30);

// posts
const posts = [];
posts.length > 0 && console.log(posts[0]);

// The OR Operator - will return the first truthy value
console.log(10 || 20);
console.log(0 || 100);
console.log(0 || null || "" || undefined);

// The ?? - double coalecing operator - it returns the second value when the first is null or undefined
console.log(10 ?? 20);
console.log(null ?? 20);
console.log(undefined ?? 200);

