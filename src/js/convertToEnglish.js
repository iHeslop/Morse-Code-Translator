// Morse Code Object:
const code = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
};

// Morse to English
export const convertToEnglish = (morse) => {
  return morse
    .split(" ")
    .map((symbol) => {
      if (symbol === "/") return " ";
      if (code.hasOwnProperty(symbol)) {
        return code[symbol];
      } else {
        return "#";
      }
    })
    .join("");
};
