// Date Functionality:
const date = document.getElementById("footerDate");
date.innerHTML = new Date().toDateString();

// Morse Code Object:
const code = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};

// Reverse code for Morse code to English
const reverseCode = {};
for (let letter in code) {
  reverseCode[code[letter]] = letter;
}

const input = document.getElementById("input");
const output = document.getElementById("output");

// English to Morse
function convertToMorse(text) {
  return text
    .split("")
    .map((char) => {
      if (char === " ") return "/";
      if (code.hasOwnProperty(char)) return code[char];
      return "";
    })
    .join(" ");
}

// Morse to English
function convertToEnglish(morse) {
  return morse
    .split(" ")
    .map((symbol) => {
      if (symbol === "/") return " ";
      if (reverseCode.hasOwnProperty(symbol)) return reverseCode[symbol];
      return "";
    })
    .join("");
}

function updateOutput() {
  if (
    input.value.trim().startsWith(".") ||
    input.value.trim().startsWith("-")
  ) {
    output.textContent = convertToEnglish(input.value.trim());
  } else {
    output.textContent = convertToMorse(input.value.toUpperCase());
  }
}

input.addEventListener("input", updateOutput);
input.addEventListener("keydown", (event) => {
  if (event.key === "Backspace") updateOutput();
});
