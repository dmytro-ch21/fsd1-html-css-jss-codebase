// Selectors elements
const header = document.querySelector("h1");
const inputFirstName = document.querySelector("#first-name");
const inputLastName = document.querySelector("#last-name");
const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const inputPrefix = document.querySelector("#prefix");
const inputNewsletter = document.querySelector("#newsletter");
const inputTerms = document.querySelector("#terms");
const button = document.querySelector("button[type=submit]");
const form = document.querySelector("#reg-form");
const buttonParent = document.querySelector('.btn-div');


// Event Bubbling 
button.addEventListener('click', onButtonClick);
buttonParent.addEventListener('click', onParentButtonClick);
form.addEventListener('submit', onSubmit);

function onButtonClick(event){
    console.log('On Button Click Event Fired!');
    event.stopPropagation();
}

function onParentButtonClick(event){
    console.log('On Parent Button Click Event Fired!');
}

function onSubmit(event){
    event.preventDefault();
    console.log('On Submit Form Event Fired!');
}










// // submit - is the main event we will apply for forms
// form.addEventListener("submit", onSubmitForm);

// // functions
// function onSubmit(event) {
//   event.preventDefault();

//   // console.log(inputFirstName.value);
//   // console.log(inputLastName.value);
//   // console.log(inputEmail.value);
//   // console.log(inputPassword.value);
//   // console.log(inputPrefix.value);
//   // console.log(inputNewsletter.checked);
//   // console.log(inputTerms.checked);

//   // validateFirstName();

//   if (inputFirstName.value === "") {
//     document.querySelector("#first-name-error").style.display = "block";
//     return;
//   } else {
//     document.querySelector("#first-name-error").style.display = "none";
//   }

//   const user = {
//     firstName: inputFirstName.value,
//     lastName: inputLastName.value,
//     email: inputEmail.value,
//     password: inputPassword.value,
//     prefix: inputPrefix.value,
//     isSubscribed: inputNewsletter.checked,
//     agreedToTerms: inputTerms.checked,
//   };

//   console.log(user);
// }

// function onSubmitForm(event){
//     event.preventDefault();

//     const formData = new FormData(form);
//     console.log(formData.get('first-name'));
//     console.log(formData.get('last-name'));
//     console.log(formData.get('email'));
//     console.log(formData.get('password'));
//     console.log(formData.get('prefix'));

//     console.log(formData.entries());
// }



// // helper function
// function validateFirstName(){
//     if(inputFirstName.value === ''){
//         document.querySelector('#first-name-error').style.display = 'block';
//         return;
//     } else {
//         document.querySelector('#first-name-error').style.display = 'none';
//     }
// }
