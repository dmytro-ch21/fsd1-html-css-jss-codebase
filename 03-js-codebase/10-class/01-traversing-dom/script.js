// Basic element selection
// Locate the parent element with class container
const containerElement = document.querySelector('.container');
console.log(containerElement);

// element.children -> HTMLCollection
console.log(containerElement.children);

// access elements 
// first 
console.log(containerElement.firstElementChild);
// last 
console.log(containerElement.lastElementChild);
// specific
console.log(containerElement.children[4]);

const headerElement = document.querySelector('h1');
// identify what is the parent of an element 
console.log(headerElement.parentElement);

// traverse to siblings 
const thirdElement = document.querySelector('.child-element:nth-child(4)');
// select 3rd element in its type as div
// const thirdElement = document.querySelector('.child-element:nth-of-type(3)');
console.log(thirdElement);
console.log(thirdElement.previousElementSibling);
console.log(thirdElement.nextElementSibling);


thirdElement.innerText = 'Child Three';
thirdElement.previousElementSibling.style.color = 'blue';
thirdElement.nextElementSibling.style.color = 'green';
thirdElement.nextElementSibling.style.backgroundColor = 'lightgrey';

thirdElement.nextElementSibling.id = 'child-4';
thirdElement.previousElementSibling.id = 'child-2';

// NodeList - contains all typoes of nodes
// element.childNodes
console.log(containerElement.childNodes);
console.log(containerElement.nextSibling);
console.log(containerElement.previousSibling);

// DOM - Tree Data Structure 

// innerText - returns the content text considering css (if the element is hidden) it will not return anything
// textContent - returns the content text regardless css 
// innerHTML - gives access to elements inside of another element


// HTMLCollection, NodeList are array like data structure. However, they are not: Array, LinkedList






