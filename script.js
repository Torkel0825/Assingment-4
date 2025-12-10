/*

Create a menu for different options:
    1. calculator
    2. picture(frame) selector
    3. rock, paper, scissors
    4. list generator, with option for themes, and arrays containing objects that are randomized
    5. a small section with fake products,
        when the button is pressed, show a picture (big) and play a toot sound.wav
    6. create a big section that showcases a background landscape ish place with flexbox
    7?

have them appear in different boxes(div) on the page, but have them hidden initially. 
    or give them their own html file, up to you

    

*/
// const calcBtn = document.getElementById("calculate");
// const modalBox = document.getElementById("myModal");
// const modalClose = document.getElementById("close");
// const result = document.getElementById("number");
// //

// function viewCalculator() {
//   document.querySelector("#model-content").style.display = "block";
//   calcBtn.innerHTML = " ";
//   document.querySelector(calcBtn).style.display = "hidden";
//   // the hover effect on the button remains even when i have hidden the button upon it being pressed
//   //
// }
// calcBtn.addEventListener("click", viewCalculator);

// function addition(num1, num2) {
//   result = num1 + num2;
//   return result;
// }
// function substitution(num1, num2) {
//   return (result = a - b);
// }
// function multiplication(num1, num2) {
//   return (result = a * b);
// }
// function division(num1, num2) {
//   return (result = a / b);
// }

let currentInput = "";
let currentOperation = "";
let previousInput = "";

function appendNumber(number) {
  currentInput += number;
  document.getElementById(
    "display"
  ).value = `${previousInput} ${currentOperation} ${currentInput}`;
}

function appendOperation(operation) {
  if (currentInput === "") return;
  if (previousInput !== "") {
    calculate();
  }
  currentOperation = operation;
  previousInput = currentInput;
  currentInput = "";
  document.getElementById(
    "display"
  ).value = `${previousInput} ${currentOperation}`;
}

function calculate() {
  if (previousInput === "" || currentInput === "") return;
  let result;
  let prev = parseFloat(previousInput);
  let current = parseFloat(currentInput);

  switch (currentOperation) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      if (current === 0) {
        alert("Cannot divide by zero");
        return;
      }
      result = prev / current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  currentOperation = "";
  previousInput = "";
  document.getElementById("display").value = currentInput;
}

function clearDisplay() {
  currentInput = "";
  previousInput = "";
  currentOperation = "";
  document.getElementById("display").value = "";
}
