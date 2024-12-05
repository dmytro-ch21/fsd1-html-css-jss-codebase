console.log("For Loops");

// For Loop used to repeat a block of code when the numer of repetitions needed is known
// for(intinialization; condition; increment/decrement){
//     // code to repeat
// }

// intinialization - giving a variable to our counter, and an initial value as a start point
// condition - a condition that checks the counter if matches a specific test, if true the body will be executed, if false it will stop
// increment/decrement - after the loop body has been executed, the counter will be incremented or decremented

// log Number 1 till 10 in the console
// for(let i = 10; i >= 1; i--){
//     console.log(`Number ${i}`);
// }

// Variation of increment
// for(let i = 0; i <= 10; i += 5){
//     console.log(`Number ${i}`);
// }

// Use if statements in loop
// for(let i = 1; i <= 10; i++){
//     if(i === 7){
//         console.log(`${i} is my lucky number!`);
//     } else {
//         console.log(`Number ${i}`);
//     }
// }

// You can also nest loops
// outer loop
// for(let i = 1; i <= 10; i++){ // all variables declared here are scoped to for loop block
//     console.log(`Current Number Is: ${i}`);

//     // inner loop
//     for(let j = 1; j <= 10; j++){
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }

// Loop througth an array
const simpsons = ["Homer", "Marge", "Bart", "Lisa", "Maggie", "Abe", "Mona"];

for (let i = 0; i < simpsons.length; i++) {
  //   if (i === 3) {
  //     console.log(`${simpsons[i]} is the best character in the show!`);
  //   } else {
  //     console.log(simpsons[i]);
  //   }

  if (simpsons[i] === 'Bart') {
    console.log(`${simpsons[i]} is the best character in the show!`);
  } else {
    console.log(simpsons[i]);
  }
}

// '', "", `` -> all are equally strings
console.log('One' === 'One');
console.log('One' === "One");
console.log('One' === `One`);

console.log('One', typeof 'One');
console.log("One", typeof "One");
console.log(`One`, typeof `One`);

