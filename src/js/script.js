import { convertToEnglish } from "./convertToEnglish.js";
import { convertToMorse } from "./convertToMorse.js";

// Morse Code Objects:
const code = {
  ".-": "../../assets/sounds/15716__blackstrobe__a.wav",
  "-...": "../../assets/sounds/15717__blackstrobe__b.wav",
  "-.-.": "../../assets/sounds/15718__blackstrobe__c.wav",
  "-..": "../../assets/sounds/15719__blackstrobe__d.wav",
  ".": "../../assets/sounds/15720__blackstrobe__e.wav",
  "..-.": "../../assets/sounds/15721__blackstrobe__f.wav",
  "--.": "../../assets/sounds/15722__blackstrobe__g.wav",
  "....": "../../assets/sounds/15723__blackstrobe__h.wav",
  "..": "../../assets/sounds/15724__blackstrobe__i.wav",
  ".---": "../../assets/sounds/15725__blackstrobe__j.wav",
  "-.-": "../../assets/sounds/15726__blackstrobe__k.wav",
  ".-..": "../../assets/sounds/15727__blackstrobe__l.wav",
  "--": "../../assets/sounds/15728__blackstrobe__m.wav",
  "-.": "../../assets/sounds/15739__blackstrobe__n.wav",
  "---": "../../assets/sounds/15740__blackstrobe__o.wav",
  ".--.": "../../assets/sounds/15741__blackstrobe__p.wav",
  "--.-": "../../assets/sounds/15742__blackstrobe__q.wav",
  ".-.": "../../assets/sounds/15743__blackstrobe__r.wav",
  "...": "../../assets/sounds/15744__blackstrobe__s.wav",
  "-": "../../assets/sounds/15745__blackstrobe__t.wav",
  "..-": "../../assets/sounds/15746__blackstrobe__u.wav",
  "...-": "../../assets/sounds/15747__blackstrobe__v.wav",
  ".--": "../../assets/sounds/15748__blackstrobe__w.wav",
  "-..-": "../../assets/sounds/15749__blackstrobe__x.wav",
  "-.--": "../../assets/sounds/15750__blackstrobe__y.wav",
  "--..": "../../assets/sounds/15751__blackstrobe__z.wav",
  "-----": "../../assets/sounds/15729__blackstrobe__morse_0.wav",
  ".----": "../../assets/sounds/15730__blackstrobe__morse_1.wav",
  "..---": "../../assets/sounds/15731__blackstrobe__morse_2.wav",
  "...--": "../../assets/sounds/15732__blackstrobe__morse_3.wav",
  "....-": "../../assets/sounds/15733__blackstrobe__morse_4.wav",
  ".....": "../../assets/sounds/15734__blackstrobe__morse_5.wav",
  "-....": "../../assets/sounds/15735__blackstrobe__morse_6.wav",
  "--...": "../../assets/sounds/15736__blackstrobe__morse_7.wav",
  "---..": "../../assets/sounds/15737__blackstrobe__morse_8.wav",
  "----.": "../../assets/sounds/15738__blackstrobe__morse_9.wav",
};
const conversionCode = {
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
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
};

// Date Functionality:
const date = document.getElementById("footerDate");
date.innerHTML = new Date().toDateString();

//DOM Variables
const input = document.getElementById("input");
const output = document.getElementById("output");
const errorInput = document.getElementById("errorInput");
const btn = document.getElementById("playBtn");
const legendBtn = document.getElementById("legendBtn");
const legendModal = document.getElementById("legendModal");
const closeModal = document.getElementById("closeModal");
let isCorrect = true;
let isPlaying = false;
let inCorrectChar = null;

// Error Display Code
const errorMessage = (message) => {
  if (output.value.includes("#")) {
    isCorrect = false;
    errorInput.textContent = message;
  } else {
    isCorrect = true;
    errorInput.textContent = "";
  }
};

//Output display code
const updateOutput = () => {
  if (
    input.value.trim().startsWith(".") ||
    input.value.trim().startsWith("-")
  ) {
    output.textContent = convertToEnglish(input.value.trim());
    errorMessage("Error: Invalid morse code symbol");
  } else {
    const lastChar = input.value.slice(-1);
    if (!conversionCode.hasOwnProperty(lastChar.toUpperCase())) {
      inCorrectChar = lastChar;
    }
    output.textContent = convertToMorse(input.value);
    errorMessage(`Error: Untranslatable character detected: ${inCorrectChar}`);
  }
};

// Audio Playing Code
const playOutput = (e) => {
  e.preventDefault();
  if (isCorrect && !isPlaying && output.value.trim()) {
    isPlaying = true;
    const symbols = output.textContent.trim().split(" ");
    let index = 0;
    const playNextSound = () => {
      if (index < symbols.length) {
        const symbol = symbols[index++];
        if (symbol !== "/") {
          const audio = new Audio(code[symbol]);
          audio.play();
          audio.onended = () => setTimeout(playNextSound, 500);
        } else playNextSound();
      } else isPlaying = false;
    };
    playNextSound();
  }
};

input.addEventListener("input", updateOutput);
input.addEventListener("keydown", (event) => {
  if (event.key === "Backspace") updateOutput();
});
legendBtn.addEventListener("click", () => {
  legendModal.classList.add("viewModal");
});
closeModal.addEventListener("click", () => {
  legendModal.classList.remove("viewModal");
});
btn.addEventListener("click", playOutput);
