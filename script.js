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
const calcBtn = document.getElementById("calculate");
const modalBox = document.getElementById("myModal");
const modalClose = document.getElementById("close");
const num1 = document.getElementById("nubmber1");
const num2 = document.getElementById("nubmber2");
//

function viewCalculator() {
  document.querySelector("#model-content").style.display = "block";
  calcBtn.innerHTML = " ";
  document.querySelector("calcBtn").style.visibility = "hidden";
  // the hover effect on the button remains even when i have hidden the button upon it being pressed
  //
}
calcBtn.addEventListener("click", () => viewCalculator());

function addition(num1, num2) {
  return (result = a + b);
}
function substitution(num1, num2) {
  return (result = a - b);
}
function multiplication(num1, num2) {
  return (result = a * b);
}
function division(num1, num2) {
  return (result = a / b);
}
