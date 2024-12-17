// const logo = document.querySelector("img");
// const header = document.querySelector("h1");
// const input = document.querySelector("#text");
// const button = document.querySelector("#click-btn");
// const output = document.querySelector(".output");
// const clearButton = document.querySelector('#clear-btn');

// There few ways to apply events:
// -------------------- Inline Listeners ------------------------- //
// Inline in html - not recommended
// function onClickButton(){
//     alert('Hello From A Function!');
// }

// -------------------- JS Listeners ------------------------- //
// Java Script listeners
// button.onclick = function() {
//     alert('Hello From JS Listener!');
// }

// button.onclick = function() {
//     console.log('Second Event');
// }

// -------------------- JS Function Listener ------------------------- //
// Java Script Listener Function
// addEventListener() - takes 2 arguments:
// 1. type of the event as a string
// 2. the function to execute when the event is fired

// Different ways to pass a function as argument

// Function Expression
// button.addEventListener('click', function() {
//     alert('This is the coolest way!');
// });

// Arrow Function
// button.addEventListener('click', () => alert('This is the coolest way!'));

// // Pass a function obj as an argument
// define a function
// function onClickAlert() {
//   alert("The cleaner way!");
// }

// function onClickLog() {
//   console.log("The cleaner way Log!");
// }

// // if we use a function name followed by parentheses the is being called immidiately.
// button.addEventListener("click", onClickAlert);
// button.addEventListener("click", onClickLog);

// We also can trigger things programatically - click on a button using JS
// apply a deplay - setTimeout();
// setTimeout(function(){}, time);
// setTimeout(() => button.click(), 5000);

// button.addEventListener("click", onClickAlert);

// Removing an event listener - in case you will remove the element from DOM where the listener is applied
// setTimeout(() => {
//     button.removeEventListener('click', onClickAlert);
// }, 5000);


// Add on click a new header to the output area

function onClickMe(){
    const headerH3 = document.createElement('h3');
    headerH3.textContent = 'New Item H3';
    output.appendChild(headerH3);
}

function onClearClick(){
    // Option 1
    // document.querySelectorAll('h3').forEach((item) => item.remove());
    // Option 2
    Array.from(output.children).forEach((item) => item.remove());
}

button.addEventListener('click', onClickMe);
clearButton.addEventListener('click', onClearClick);