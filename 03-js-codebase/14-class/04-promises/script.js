console.log("AJAX and XHR JS");

// ----------- Select Elements From Page -------------- //
const header = document.querySelector('h1');
const button = document.getElementById('btn-click');
const items = document.querySelector('.items');


// Promise

// create a promise
// a promise will have two states : resolved or rejected
// resolved when all good
// rejected - when error
// const promise = new Promise((resolve, reject) => {
//     // Simulate a task that is time consuming 
//     setTimeout(() => {
//         console.log('Async task 1 resolved');
//         resolve();
//     }, 5000);
// });

// promise.then(() => {
//     console.log('Promise ONe consumed and processed!');
// });

// Promise 2 - chaining methods

// new Promise((resolve, reject) => {
//     // Simulate a task that is time consuming 
//     setTimeout(() => {
//         console.log('Async task 2 resolved');
//         resolve();
//     }, 1000);
// }).then(() => {
//     console.log('Promise 2 processed!');
// });

// Promise 3 - passing data to then 

// new Promise((resolve, reject) => {
//     // Simulate a task that is time consuming 
//     setTimeout(() => {
//         console.log('Async task 3 resolved');
//         const data = {name: 'John Doe', age: 35};
//         resolve(data);
//     }, 1000);
// }).then((info) => {
//     console.log('Promise 3 processed: ', info);
// });

// Promise 4
const getUser = new Promise((resolve, reject) => {
    // Simulate a task that is time consuming 
    setTimeout(() => {
        console.log('Async task 4 resolved');
        const data = {name: 'John Doe', age: 35};

        const error = false;

        if(!error){
            resolve(data);
        } else {
            reject({error: 'ERROR: Something went wrong!'});
        }
        
    }, 2000);
});

getUser
    .then((data)=> {
        console.log('Data processed successfully: ', data);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('FINALLY Executed...');
    });