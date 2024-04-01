import { convertToEnglish } from "./convertToEnglish.js";
import { convertToMorse } from "./convertToMorse.js";

// Date Functionality:
const date = document.getElementById("footerDate");
date.innerHTML = new Date().toDateString();

const input = document.getElementById("input");
const output = document.getElementById("output");
const errorInput = document.getElementById("errorInput");

// Error Display Code
const errorMessage = (message) => {
  if (output.value.includes("#")) {
    errorInput.textContent = message;
  } else {
    errorInput.textContent = "";
  }
};

const updateOutput = () => {
  if (
    input.value.trim().startsWith(".") ||
    input.value.trim().startsWith("-")
  ) {
    output.textContent = convertToEnglish(input.value.trim());
    errorMessage("Error: Invalid morse code symbol");
  } else {
    const incorrectChar = input.value.slice(-1);
    output.textContent = convertToMorse(input.value);
    errorMessage(`Error: Untranslatable character detected: ${incorrectChar}`);
  }
};

input.addEventListener("input", updateOutput);
input.addEventListener("keydown", (event) => {
  if (event.key === "Backspace") updateOutput();
});
