console.log("Switch Case Statements");

// I want to print based on the month number the name of the month
const date = new Date(2024, 11, 2, 30, 0, 0); // 0-11, 1-31, 0-24 
const month = date.getMonth();
console.log(date);

// if statement version
// if (month === 0) {
//   console.log("It is January");
// } else if (month === 1) {
//   console.log("It is February");
// } else if (month === 2) {
//   console.log("It is March");
// } else {
//   console.log("No such month number!");
// }

// swicth case statement version

switch (month) {
  case 0:
    console.log("It is January");
    break;
  case 1:
    console.log("It is February");
    break;
  case 2:
    console.log("It is March");
    break;
  default:
    console.log("No such month number!");
    break;
}

const hours = date.getHours();
console.log(`Current hours ${hours}`);


// ranges in switch 
switch (true) {
    case hours < 12: // 20
        console.log('Good morning!');
        break;
    case hours < 18:
        console.log('Good agternoon!');    
        break;
    case hours <= 24:
        console.log('Good night!');
        break;
    default:
        console.log('Not sure what to say!');
        break;        
}
