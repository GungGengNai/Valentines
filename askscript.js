"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const AskImg = document.querySelector(".ask-img");

const MAX_IMAGES = 6;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
    if (play) {
        noCount++;
        const imageIndex = Math.min(noCount, MAX_IMAGES);
        changeImage(imageIndex);
        resizeYesButton();
        updateNoButtonText();
        if (noCount == 7) {
            handleNoClickMax();
        }
    }
});

function handleNoClickMax() {
    window.location.href = "nopage.html";
}

function handleYesClick() {
    window.location.href = "yespage.html";
}

function resizeYesButton() {
    const computedStyle = window.getComputedStyle(yesButton);
    const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.4;

    yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
    const messages = [
    "No?",
    "Are you sure lhor?",
    "Grod laew na!",
    "Bby gurl please &#x1f97a;?",
    "Lhor kanard nee pen korng u na!",
    "Aow mamuang mar ngor!!!",
    "MUD JOOK HAI LAEWW!!"
    ];

    const messageIndex = Math.min(noCount, messages.length - 1);
    return messages[messageIndex];
}

function changeImage(image) {
    AskImg.src = `images/ask-img${image}.jpg`;
}

function updateNoButtonText() {
    noButton.innerHTML = generateMessage(noCount);
}
