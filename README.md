# Frontend Mentor - Dictionary Web App solution

This is a solution to the [Dictionary Web App challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/dictionary-web-app-h5wwnyuKFL). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Search for words using the input field
- See the Free Dictionary API's response for the searched word
- See a form validation message when trying to submit a blank form
- Play the audio file for a word when it's available
- Switch between serif, sans serif, and monospace fonts
- Switch between light and dark themes
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Bonus: Have the correct color scheme chosen for them based on their computer preferences. Hint: Research prefers-color-scheme in CSS.


### Links

- Live Site URL: (https://alneelna.github.io/Dictionary-web-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript

### What I learned
```
let phonetics = data[0].phonetics.find(p => p.audio); // Find first available audio
let synonyms = meanings.flatMap(m => m.synonyms).filter(s => s).join(", ") || "None";
let antonyms = meanings.flatMap(m => m.antonyms).filter(a => a).join(", ") || "None";
```
```
function playSound() {
    if (sound.src) {
        sound.play();
    }
}
```

## Author

- Frontend Mentor - (https://www.frontendmentor.io/profile/Alneelna)
- GitHub - (https://github.com/Alneelna)

