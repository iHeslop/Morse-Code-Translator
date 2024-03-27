// Date Functionality:
const date = document.getElementById("footerDate");
date.innerHTML = new Date().toDateString();

//Morse Code Objects:
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

// English to Morse
const input = document.getElementById("input");
const output = document.getElementById("output");

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

function updateOutput() {
  output.textContent = convertToMorse(input.value.toUpperCase());
}

input.addEventListener("input", updateOutput);
input.addEventListener("keydown", (event) => {
  if (event.key === "Backspace") updateOutput();
});

//Morse to English
