console.log('If Statement Basics');


// If statement allows us to execute a block of code based on a condition
// if (cond) {
//      code to execute
// }

if(true){
    console.log('This is true and code runs!');
}

if(false){
    console.log('This is NOT true and code WONT runs!');
}

// Weather App 
const temperature = 101;

if(temperature >= 100){
    console.log('Heat warning: Stay Hydraded!');
}

// Passing score quiz application
const score = 60;
const passingScore = 60;

// if(score >= passingScore){
//     console.log(`Congratulations! You passed the test with score as ${score}`);
// }

// Each if statement can have an optional else statement that is run specifically when the condition is false
// else statement has to always attached to an if statement
if(score >= passingScore){
    console.log(`Congratulations! You passed the test with score as ${score}`);
} else {
    console.log(`Sorry, your score as ${score} is too low. Please try again.`);
}
