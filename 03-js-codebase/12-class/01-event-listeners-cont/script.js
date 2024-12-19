// Selectors elements
const header = document.querySelector('h1');
const inputFirstName = document.querySelector('#first-name');
const inputLastName = document.querySelector('#last-name');
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const inputPrefix = document.querySelector('#prefix');
const inputNewsletter = document.querySelector('#newsletter');
const inputTerms = document.querySelector('#terms');
const button = document.querySelector('button[type=submit]');

// Listeners
// The event keydown can be used for input fields where client types something
// inputFirstName.addEventListener('keydown', onInput);

// 'input' - is more generic type that can be used for different input fields (text, checkbox, dropdown so on)
inputFirstName.addEventListener('input', onInput);

// 'change' - it will trigger when a change in the input field is detected (pretty much similar to 'input')
inputLastName.addEventListener('change', onInput);

// Apply same input type on a dropdown
inputPrefix.addEventListener('input', onInput);

// Apply input to checkbox or radio 
inputNewsletter.addEventListener('input', onChange);

// focus - when the input is clicked and active
inputEmail.addEventListener('focus', onFocus);

// blur - when the client goes outside of an input
inputEmail.addEventListener('blur', onBlur);

inputEmail.addEventListener('change', onPasswordChange);

function onPasswordChange(event) {
    header.textContent = event.target.value;
}

// function trigerred when the input is on focus
function onFocus(event){
    inputEmail.style.outlineStyle = 'solid';
    inputEmail.style.outlineWidth = '4px';
    inputEmail.style.outlineColor = 'yellow';
}

// function trigerred when the input is out of focus
function onBlur(){
    inputEmail.style.outlineStyle = 'none';
}

// When we need to get values from inputs as text, dropdowns etc... we use value property
function onInput(event){
    console.log(event.target.value);
    // header.textContent = event.target.value;
}

// When we work with checkboxes and radiobutton we can access a property called checked
// This property will tell me if (checked) true or (unchecked) false
function onChange(event){
    console.log(event.target.checked);
    // logic

    const isChecked = event.target.checked;
    header.textContent = isChecked ? 'Subscribed' : 'Not Subscribed!';

    if(!isChecked){
        document.querySelector('#err-news').style.display = 'block';
    } else {
        document.querySelector('#err-news').style.display = 'none';
    }
}













