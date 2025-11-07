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

//

function calculate() {
  //
}

function addition(a, b) {
  return (result = a + b);
}
function substitution(a, b) {
  return (result = a - b);
}
function multiplication(a, b) {
  return (result = a * b);
}
function division(a, b) {
  return (result = a / b);
}
calcBtn.addEventListener("dblclick", showModal());

function showModal() {
  modalBox.style.display = "block";

  console.log("click");
}
