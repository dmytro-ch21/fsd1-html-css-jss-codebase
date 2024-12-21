// console.log("Start");

// const x = 10;
// const y = 20;
// const sum = x + y;

// 1000
// 1001, 1002, 1003, 1004, 1005

// 1005 - 1000 = 2000 < 2000

// // blocking code
// function delay(millies) {
//   console.log("Running the delay...");
//   const startTimestamp = Date.now();
// //   console.log('Mil: ' + millies);
// //   console.log('Current Timestamp: ' + Date.now());
// //   console.log('Start Timestamp: ' + startTimestamp);
// //   console.log('Subtraction: ' + (Date.now() - startTimestamp));
//   while (Date.now() - startTimestamp < millies) {
//     //code
//     console.log(Date.now());
//     console.log(startTimestamp);
//     console.log(Date.now() - startTimestamp);
//   }
// }
// delay(100);
// console.log('End');

console.log('Start');

const x = 10;
const y = 20;
const sum = x + y;

setTimeout(function(){
    console.log('Running Delay');
}, 4000);

console.log('Sum: ' + sum);
console.log('End');
