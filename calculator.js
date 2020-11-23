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
    alert("Close one, you nearly ended us all by trying to divide zero");
    return 0;
  }

  return num1 / num2;
}

function operate(input1, input2, operation) {
  if (isNaN(input1) || isNaN(input2)) {
    return "Only numbers are allowed";
  }

  switch (operation) {
    case "+":
      return add(input1, input2);
    case "-":
      return subtract(input1, input2);
    case "×":
      return multiply(input1, input2);
    case "÷":
      return divide(input1, input2);
  }
}

let displayInput = document.querySelector("#calc-field h1");
let calculationText = document.querySelector("#calc-field p");
//functionality for numbers
let numberArray = Array.from(document.querySelectorAll(".number"));
let inputArray = [];

numberArray.forEach((num) => {
  num.addEventListener("click", () => {
    if (displayInput.offsetWidth >= 350) {
      alert("You reached the maximum of numbers that can be entered");
      return;
    }
    if (parseInt(displayInput.innerText) === result) {
      displayInput.innerText = "";
    }
    displayInput.innerText += num.getAttribute("value");
    inputArray.push(num.getAttribute("value"));
  });
});

//functionality for operators
let operatorArray = Array.from(document.querySelectorAll(".operator"));
let firstInput = 0;
let secondInput = 0;
let intermediateResult = 0;
let result = 0;
let currOperation = "";

operatorArray.forEach((oper) => {
  oper.addEventListener("click", () => {
    if (inputArray.length === 0) {
      return;
    }

    if (result !== 0) {
      firstInput = result;
    }

    if (firstInput !== 0) {
      console.log("Wat");

      intermediateResult = operate(
        firstInput,
        parseInt(inputArray.reduce((acc, curr) => acc + curr)),
        currOperation
      );
      console.log(intermediateResult);
      calculationText.innerText = `${intermediateResult} ${oper.getAttribute(
        "value"
      )}`;
      firstInput = intermediateResult;
      currOperation = oper.getAttribute("value");
    } else {
      firstInput = parseInt(inputArray.reduce((acc, curr) => acc + curr));
      calculationText.innerText = `${
        displayInput.innerText
      } ${oper.getAttribute("value")}`;
      currOperation = oper.getAttribute("value");
    }

    // currOperation = oper.getAttribute("value");

    displayInput.innerText = "";
    inputArray = [];
  });
});

//functionality for result
let equalSign = document.querySelector(".equal");
equalSign.addEventListener("click", () => {
  if (inputArray.length === 0) {
    return;
  }

  secondInput = parseInt(inputArray.reduce((acc, curr) => acc + curr));
  result = operate(firstInput, secondInput, currOperation);
  calculationText.innerText = `${firstInput} ${currOperation} ${secondInput}`;
  displayInput.innerText = result;
});

//functionality for Clear
let clear = document.querySelector(".clearing");
clear.addEventListener("click", () => {
  firstInput = 0;
  secondInput = 0;
  result = 0;
  intermediateResult = 0;
  currOperation = "";
  inputArray = [];
  calculationText.innerText = "x";
  displayInput.innerText = "";
});
