console.log("Date Object in JS");

let date = new Date();

// we can create the date object with custom date
date = new Date('2024-11-22'); // this format sets the day to one less
date = new Date('11-22-2024'); 
date = new Date('2024-11-22T20:10:10');

// YYYY, MM, DD, HH, mm, ss - month is set to 0 based 
date = new Date(2024, 10, 22, 10, 10, 10);

// timestamps
date = Date.now();

// timestamp of a custom date
date = new Date('2024-11-22T20:10:10').getTime();

// convert the timestamp in seconds 
date = date / 1000;

date = new Date(1732324425000);

console.log(date);

let newDate = new Date();

console.log(newDate.getFullYear());
console.log(newDate.getMonth()); // 0 based
console.log(newDate.getDay()); 
console.log(newDate.getDate()); 
console.log(newDate.getHours()); 
console.log(newDate.getMinutes()); 
console.log(newDate.getSeconds()); 

let formattedDate = `${newDate.getMonth()}-${newDate.getFullYear()}`;
console.log(formattedDate);


// Template Literals
let text = `Current year is ${newDate.getFullYear()}`;
console.log(text);
// console.log('Current year is ' + newDate.getFullYear());








