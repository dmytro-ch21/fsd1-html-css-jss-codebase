console.log("Start");

const x = 10;
const y = 20;
const sum = x + y;

// blocking code
function delay(millies) {
  console.log("Running the delay...");
  const startTimestamp = Date.now();
  while (Date.now() - startTimestamp < millies) {
    //code
  }
}
delay(3000);

console.log('End');




// console.log('Start');

// const x = 10;
// const y = 20;
// const sum = x + y;

// setTimeout(function(){
//     console.log('Running Delay');
// }, 4000);

// console.log('Sum: ' + sum);
// console.log('End');
