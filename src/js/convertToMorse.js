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
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};

// English to Morse
export const convertToMorse = (text) => {
  return text
    .split("")
    .map((char) => {
      if (char === " ") return "/";
      let newChar = char.toUpperCase();
      if (code.hasOwnProperty(newChar)) {
        return code[newChar];
      } else {
        return "#";
      }
    })
    .join(" ");
};
