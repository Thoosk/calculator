//basic functions
// add
// subtract
// multiply
// divide

// add function "operate()" that takes in two 2 and calls one of the functions

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num1 === 0) {
    return "Close one, you nearly ended us all by trying to divide zero";
  }

  return num1 / num2;
}

function validate(x) {
  if (isNaN(x)) {
    return NaN;
  }
}

function operate(input1, input2, operation) {
  if (validate(input1) === NaN || validate(input2) === NaN) {
    return "Only numbers are allowed";
  }

  switch (operation) {
    case "add":
      return add(input1, input2);
    case "subtract":
      return subtract(input1, input2);
    case "multiply":
      return multiply(input1, input2);
    case "divide":
      return divide(input1, input2);
  }
}
