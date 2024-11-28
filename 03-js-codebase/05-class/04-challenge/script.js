// console.log('Practice Problems');
// Problem 1:
// regular declarion
function getKilometers(miles) {
  return (miles / 0.621371).toFixed(2);
}

// arrow function
const convertToKilometers = (miles) => (miles / 0.621371).toFixed(2);

// console.log(getKilometers(20));
// console.log(convertToKilometers(20));

// Problem 2:
const getCelsius = (f) => {
  // (32°F − 32) × 5/9
  const celsius = (((f - 32) * 5) / 9).toFixed(1);
  return `${celsius}\xB0C`;
};

// console.log(getCelsius(100));

// Problem 3
function minMax(arr) {
  const copyArr = [...arr];
  copyArr.sort(); // TODO - sort method with numbers trick
  const min = copyArr[0];
  const max = copyArr[copyArr.length - 1];
  return {min, max}
}

function minMax2(arr){
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return {min, max}
}

console.log(minMax([2, 3, 2, 9, 3, 4, 2])); 
console.log(minMax2([2, 3, 122, 93, 34, 46, 27])); 


// Problem 4: 
(function(radius){
    const circ = (2 * Math.PI * radius).toFixed(2);
    console.log(`The circumference is ${circ}`);
})(5);
