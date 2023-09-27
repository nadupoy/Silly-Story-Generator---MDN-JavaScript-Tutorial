"use strict";

/*
PROJECT BRIEF:
- Write the necessary JavaScript for a working program that does the following:
1. Generates a silly story when the "Generate random story" button is pressed.
2. Replaces the default name "Bob" in the story with a custom name, only if a custom name is entered into the "Enter custom name" text field before the generate button is pressed.
3. Converts the default US weight and temperature quantities and units in the story to UK equivalents if the UK radio button is checked before the generate button is pressed.
4. Generates a new random silly story every time the button is pressed.
*/

const generateRandomStory = document.querySelector('.randomize');
let sillyStory = document.querySelector('.story');

generateRandomStory.addEventListener('click', result);

function result() {
    const x = [
        "Willy the Goblin",
        "Big Daddy",
        "Father Christmas"
    ];

    const y = [
        "the soup kitchen",
        "Disneyland",
        "the White House"
    ];

    const z = [
        "spontaneously combusted",
        "melted into a puddle on the sidewalk",
        "turned into a slug and crawled away"
    ];

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    let insertx = x[getRandomInt(3)];
    let inserty = y[getRandomInt(3)];
    let insertz = z[getRandomInt(3)];

    let inputName = document.getElementById('customname');
    let customName = (inputName.value == false) ? "Bob" : inputName.value;

    const radioUS = document.getElementById('us');
    const radioUK = document.getElementById('uk');
    let temperature;
    const tempUS = 94;

    function tempConversion(t) {
        return (t - 32) * 5 / 9;
    }

    const tempUK = Math.round(tempConversion(tempUS));

    let weight;
    const weightUS = 300;

    function weightConversion(w) {
        return w / 2.2;
    }

    const weightUK = Math.round(weightConversion(weightUS));

    if (radioUS.checked == true) {
        temperature = `${tempUS} Fahrenheight`;
        weight = `${weightUS} pounds`;
    } else if (radioUK.checked == true) {
        temperature = `${tempUK}° Celcius `;
        weight = `${weightUK} kilograms`;
    }

    let storyTemplate = `It was ${temperature} outside, so ${insertx} went for a walk. When they got to ${inserty}, they stared in horror for a few moments, then ${insertz}. ${customName} saw the whole thing, but was not surprised - ${insertx} weighs ${weight}, and it was a hot day.`;

    sillyStory.textContent = storyTemplate;
    sillyStory.style.visibility = 'visible';
    inputName.value = "";
}