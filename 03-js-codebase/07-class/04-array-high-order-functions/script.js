console.log("Array High Order Functions");

// For Each

// High Order Function - is a function that recieves a function as an arguments
// The function that is passed as an argument is called callback function.

const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Bootstrap",
  "Python",
  "Flask",
];

// // Option 1 - Anonymous function
// technologies.forEach(function(item){
//     console.log(item);
// });

// Option 2 = Arrow Function
// technologies.forEach((item) => console.log(item));

// // Option 3
// function logItems(tech){
//     console.log(tech);
// }

// technologies.forEach(logItems);

// You can also pass currentItem, idndex, access the whole arr

// technologies.forEach((item, index, arr) => console.log(`${index + 1} - ${item} from [${arr}]`));

// const cars = [
//   { make: "BMW", model: "M5", year: 2020 },
//   { make: "Mercedes", model: "AMG S500", year: 2024 },
//   { make: "Tesla", model: "Cybertrack", year: 2023 },
//   { make: "Porche", model: "Cayene", year: 2021 },
// ];

// cars.forEach((car) => console.log(car.model));

// Filtering - filter()
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumber = [];
// numbers.forEach((number) => {
//     if(number % 2 === 0){
//        evenNumber.push(number);
//     }
// });

// console.log(evenNumber);

// arr.filter() -  will return back a new array with all the elements that meet the criteria

// const evenNumbers = numbers.filter(function(num){
//     return num % 2 === 0;
// });
// const evenNumbers = numbers.filter((number) => number % 2 === 0);

// console.log(evenNumbers);


