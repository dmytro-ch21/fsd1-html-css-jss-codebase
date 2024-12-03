console.log("If Else Statements");
const score = 60;
const passingScore = 60;

// the variables declared as const and let are scoped to the if statement block
// const and let are scoped means they will not be accessible outside of this if statement block
if (score >= passingScore) {
  const bonusPoints = 10;
  console.log(
    `Congrats! You passed the test and you got bonus points ${bonusPoints}`
  );
}

// console.log(bonusPoints);

// Shorthand for if statements
const isLoggedIn = true;

if (isLoggedIn)
  console.log("Welcome back!"),
    console.log("This stetament is shown when you are logged in");
else console.log("Please log in!");

// Multiple conditions
const playerLevel = 700;
let level;
// Beginners less 500, Intermid less 1000, Advanced above 1000
// when you get over 5 or more else if (in that case switch becomes cleaner) 

if (playerLevel < 500) {
  level = "Beginner";
} else if (playerLevel < 1000) {
  level = "Intermediate";
} else {
  level = "Advanced";
}

console.log(`Player Level: ${level}`);
