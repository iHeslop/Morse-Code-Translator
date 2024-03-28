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

// Error Display Code
const errorMessage = (text, message) => {
  if (text.includes("#")) {
    errorInput.textContent = message;
    return text;
  } else {
    errorInput.textContent = "";
    return text;
  }
};

const input = document.getElementById("input");
const output = document.getElementById("output");
const errorInput = document.getElementById("errorInput");

// English to Morse
function convertToMorse(text) {
  const decoded = text
    .split("")
    .map((char) => {
      if (char === " ") return "/";
      if (code.hasOwnProperty(char)) {
        return code[char];
      } else {
        return "#";
      }
    })
    .join(" ");
  errorMessage(decoded, "Error: Cannot translate the highlighted characters");
  return decoded;
}

// Morse to English
function convertToEnglish(morse) {
  const decoded = morse
    .split(" ")
    .map((symbol) => {
      if (symbol === "/") return " ";
      if (reverseCode.hasOwnProperty(symbol)) {
        return reverseCode[symbol];
      } else {
        return "#";
      }
    })
    .join("");
  errorMessage(decoded, "Error: Invalid morse code symbol");
  return decoded;
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
