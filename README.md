# Morse Code Translator

**Live Demo:** https://morse-code-translator-8x2b.onrender.com/

## Snippets

- A view of the landing page with a basic english to morse conversion

  ![alt text](<screenshots/Screenshot 2024-05-15 151151.png>)

- Example of morse to english conversion

  ![alt text](<screenshots/Screenshot 2024-05-15 151246.png>)

- Displayed errors within the application

  ![alt text](<screenshots/Screenshot 2024-05-15 151220.png>)

- View showing legend modal

  ![alt text](<screenshots/Screenshot 2024-05-15 151302.png>)

- Mobile responsive design (english to morse, and morse to english)

  ![alt text](<screenshots/Screenshot 2024-05-15 151331.png>) ![alt text](<screenshots/Screenshot 2024-05-15 151356.png>)

---

## Description / Requirements

The goal of the project was to create and develop a Morse Code Translator that could translate from English to Morse and vice versa. The project makes use of Jest for testing the conversion functions, and a simple UI for ease of use and efficiency.

With this project, the plan was to practice and implement how to:

- Use of JavaScript to correctly convert text from one language into the other.
- Implement TTD (test driven development) using Jest
- Play morse code audio to the user.
- Error handling, with incorrect characters, spaces between characters etc.
- Style efficiently and well, with good overall UI/UX design.

This task will require you to create a web page Morse Code translator.
The User Interface will have to look good but should remain simple (additional features, ie. sounds, lights, etc, should only be added once the MVP has been completed.)

- Create a user interface that allows the user to either input some English text or some Morse Code
- Create JS functions that would allow the user to:

  - translate their English text into Morse Code
  - Morse Code into English text

- Make sure to handle spaces properly (ie. there is 1 space between English words, but one space between Morse Code characters)

- You will need to add test cases for your translating logic

---

## Build Steps

Clone the repository, and from the directory, and open with Live Server (or other server/browser runtime)

---

## Design Goals / Approach

- The goal of this project was to create an efficient Morse Code Translator, which converts from English to Morse and Morse to English.
- Emphasis on UI/UX design, with simple, smooth and efficient styling.
- Use of a legend modal to provide users with correct translations and characters needed.
- Play morse audio back to the user
- Live update conversions on user input
- Detect input language when user types in the input (morse or english)
- Test driven development. Emphasis on testing and making sure all code works efficiently, handling edge cases and errors properly.

---

## Features

- **UI/UX Design:** Basic UI with simple translation inputs and outputs.
- **Realtime Output:** Input and output are updated simultaneously.
- **Audio Playback:** Play audio sound for morse code audio
- **Extensive Testing:** Test cases for both Morse to English and English to Morse conversions.
- **Error Handling:** Error handling for incorrect characters and incorrect input.
- **Mobile Responsive Design:** Application designed to look good on all devices.
- **Translation Legend:** Modal displaying translation legend.

---

### Technologies:

- **HTML**
- **JavaScript**
- **SCSS**
- **Jest**

---

## Future Goals

- Animation showing each morse code character as audio is played.
- Allow users to save / bookmark the translation in a personal library

---

## Struggles

- Audio playback was tough to correctly handle. Especially in terms of edge cases where a user clicks the button repeatedly causing the application to play sounds over the top of itself.
- Mobile Responsive Design. Was difficult to try and make sure all the necessary elements within the application were visible on all devices.
- Making sure test cases covered all bases (if possible). Took time to get them right and make sure that the code passed all cases.

---
