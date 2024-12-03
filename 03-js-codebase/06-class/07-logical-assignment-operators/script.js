console.log("Logical Assignment Operators");

// ||= will assign the right side on if the left is a falsy value
// &&= will assign the right side on if the left is a truthy value
// ??= will assign the right side on if the left is a null or undefined value

let test = 0;

// option 1
if(!test){
    test = 100;
}

// option 2
test = test || 100;

// shorter - ||=
test ||= 100;

console.log(test);


// example 
const config = {theme: 'dark'}; // light, dark, modern dark etc...

// if(!config.theme){
//     config.theme = 'light';
// }

config.theme ||= 'light';
console.log(config.theme);


// &&= will assign the right side on if the left is a truthy value

let newTest = 'some value';

// option 1
if(newTest){
    newTest = 'reset value';
}

// option 2
newTest = newTest && 'reset value';

// option 3
newTest &&= 'reset value';

console.log(newTest);


// real example
let isLoggedIn = true;

// when user clicks on log out
// if(isLoggedIn){
//     isLoggedIn = false;
// }

isLoggedIn &&= false;

console.log(isLoggedIn);

// ??= - will assign the right side on if the left is a null or undefined value

let userInfo = 'Dima';

if(userInfo === null || userInfo === undefined){
    userInfo = 'No information provided';
}

userInfo = userInfo ?? 'No information provided';

userInfo ??= 'No information provided';

console.log(userInfo);


