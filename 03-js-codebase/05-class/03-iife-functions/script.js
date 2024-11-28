console.log('JS IIFE (Immidiately Invoked Function Expression)');

// const user = 'Dima';
// console.log(user);

(function(name){

    const user = name;
    console.log(user);
    
})('Dima');

