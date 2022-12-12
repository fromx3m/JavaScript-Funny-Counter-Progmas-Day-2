// Elements
const counterDisplayElem = document.getElementById("number");
const counterPlusElem = document.querySelector(".number-up");
const counterMinusElem = document.querySelector(".number-down");
const counterReset = document.querySelector(".number-reset");

let count = Math.floor(Math.random() * 80);
let reset = 0;
// Functions
updateDisplay();
function updateDisplay() {
  counterDisplayElem.innerHTML = count;
}
//Event Listeners
counterPlusElem.addEventListener("click", () => {
  count++;
  updateDisplay();
});
counterMinusElem.addEventListener("click", () => {
  count--;
  updateDisplay();
});
counterReset.addEventListener("click", () => {
  count = Math.floor(Math.random() * 80);
  updateDisplay();
});
