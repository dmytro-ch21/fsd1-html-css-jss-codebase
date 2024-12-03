console.log("Nested If Statements");

// Nested If Statements
const playerPoints = 150;
let level;

if (playerPoints < 500) {
  level = "Beginner";

  if(playerPoints > 400) {
    level += ": Platinum";
  } else if (playerPoints > 200){
    level += ": Gold";
  } 

} else if (playerPoints < 1000) {
  level = "Intermediate";

  if(playerPoints > 800){
    level += ": Gold";
  }

} else {
  level = "Advanced";
}

console.log(level);

// Multiple conditions with logical operators
const gamesPlayed = 10;
const winRate = 80;

if(gamesPlayed >= 10){
  if(winRate >= 70){
    console.log('Expert Player Badge.');
  } else {
    console.log('Great Player Badge.');
  }
}

if(gamesPlayed >= 10 && winRate >= 70){
  console.log('Expert Player Badge.');
} else {
  console.log('Great Player Badge.');
}

// Date object gives access to hours 

const date = new Date(2024, 11, 2, 6, 20, 0); // YYYY, MM, DD, HH, mm, ss
const hours = date.getHours();
console.log(hours);

// if its in between 8AM and 5PM then we clg It is work time!
if(hours >= 8 && hours <= 17){
  console.log('It is working time!');
} else {
  console.log('The work day is finished!');
}

// if it is 6 am or 8 pm - brush your teeth
if(hours === 6 || hours === 20){
  console.log('Brush your teeth.');
}