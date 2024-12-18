// Selectors
const logo = document.querySelector("img");
const header = document.querySelector("h1");
const input = document.querySelector("#text");
const button = document.querySelector("#click-btn");
const output = document.querySelector(".output");
const clearButton = document.querySelector("#clear-btn");
const link = document.querySelector("a");
const form = document.querySelector("form");

const divKey = document.querySelector(".key");
const divKeyCode = document.querySelector(".key-code");
const divCode = document.querySelector(".code");


// // Functions
// const onClickMe = () => {
//   const headerH3 = document.createElement("h3");
//   headerH3.textContent = "New Item H3";
//   output.appendChild(headerH3);
// };

// const onClick = (event) => {
//   // console.log(event);
//   console.log(event.target);
//   console.log(event.currentTarget);
//   console.log(event.timeStamp);
//   console.log(event.clientX);
//   console.log(event.clientY);
//   console.log(event.offsetX);
//   console.log(event.offsetY);
//   console.log(event.pageX);
//   console.log(event.pageY);
//   console.log(event.screenX);
//   console.log(event.screenY);
// };

// // event.preventDefault()

// const onRightClick = (event) => {
//   event.preventDefault();
//   console.log("Context Menu!");
// };

// const onLinkClick = (event) => {
//   event.preventDefault();
//   window.location.href = "https://www.facebook.com";
// };

// const onSubmit = (event) => {
//   event.preventDefault();
//   console.log(input.value);
//   input.value = '';
// };

// // the most used case with preventDefault is with form submission

// // document.body.addEventListener('click', function(event){
// //     console.log(event.target);
// //     console.log(event.currentTarget);
// // });

// // Event Object
// // In all cases when we declare the function we can take an argument which the adEventLister() will pass over
// // It is an object that has multiple useful properties
// button.addEventListener("click", onClick);

// // button.addEventListener('click', function(event) {
// //     console.log(event);
// // });

// // button.addEventListener('click', (event) => {
// //     console.log(event);
// // });

// logo.addEventListener("contextmenu", onRightClick);
// link.addEventListener("click", onLinkClick);
// // adding a new element
// button.addEventListener("click", onClickMe);
// form.addEventListener("submit", onSubmit);



// Keyboard Events
// event.key, event.keyCode, event.code
// keypress
input.addEventListener('keypress', function(event) {
    console.log(event);
    
    divKey.textContent = event.key;
    divKeyCode.textContent = event.keyCode;
    divCode.textContent = event.code;

    console.log(eventKey, eventKeyCode, eventCode);
});

// // keydown
// input.addEventListener('keydown', function(event){
//     console.log('On Key Down....');
// });

// // keyup
// input.addEventListener('keyup', function(event){
//     console.log('On Key Up....');
// });