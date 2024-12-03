console.log("Ternary Operator");

const age = 15;

// if (age >= 18) {
//     console.log('You can drive!');
// } else {
//     console.log('You CANNOT drive!');
// }

// Ternary operator
// condition ? ex if true left side : ex if false right side;
// age >= 18 ? console.log('You can drive!') : console.log('You CANNOT drive!');

// usually you need to assign a value based on condition
const canDrive = age >= 18 ? "You can drive" : "You CANNOT drive!";
console.log(canDrive);

// Multiple statemenst

const isUserAuth = false;

// if(isUserAuth){
//     alert('Welcome to homepage!');
//     redirect = '/homepage';
// } else {
//     alert('Access Denied!');
//     redirect = '/login';
// }

const redirect = isUserAuth
  ? (alert("Welcome to homepage!"), "/homePageFromTeranary")
  : (alert("Access Denied!"), "/loginFromTernary");

console.log(redirect);
