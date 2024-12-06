console.log("While and Do While Loop");

// while is used when you don't know exactly the number of iterations

let i = 21;

while(i <= 20){ // false
  console.log(`Number ${i}`);
  i++;
}

// do while - will make sure that the body is executed at least once before it will check the condition

let num = 21;

do {
  console.log(`Number is ${num}`);
  num++;
} while(num <= 20);
