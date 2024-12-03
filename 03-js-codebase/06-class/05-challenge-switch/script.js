console.log("Challenge Switch");

// create a function
function calculate(num1, num2, operator) {
  // +, -, *, /, error
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      result = "Invalid operator!";
      break;
  }

  return result;
}

const total = calculate(5, 2, "#");
console.log(total);
