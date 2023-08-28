"use strict";
let diceImg = document.querySelector("#iconDice");
let adviceNum = document.querySelector(".adviceNum");
let advice = document.querySelector(".quote");
let MineAdvices = {
    1: "Fall for soul than Beauty",
    2: "Never Give up. No matter what get you ass up.",
    3: "Tongue is the sharpest object because It could pierce ones heart and thought. Use it wisely!",
    4: "Love Thyself",
    5: "Don't show your ability where not needed",
    6: "Fall for women, they fall for money. Fall for money, they fall for you",
};
async function adviceGenerator() {
    speechSynthesis.cancel();
    DiceRoller();
    let id = randomNumGenerator(1, 120);
    let dataMsg;
    try {
        let response = await fetch(`https://api.adviceslip.com/advice/${id}`);
        let data = await response.json();
        dataMsg = data.slip.advice;
    }
    catch (error) {
        id = randomNumGenerator(1, 6);
        dataMsg = MineAdvices[id];
    }
    advice.textContent = `${dataMsg}`;
    adviceNum.textContent = `${id}`;
}
const randomNumGenerator = (min, max) => {
    let NumId = Math.floor(Math.random() * (max - min + 1)) + min;
    return NumId;
};
function listenAdvice() {
    if (!SpeechSynthesisUtterance) {
        alert("Not Supported by your Browser");
    }
    let msg = advice.textContent;
    let speech = new SpeechSynthesisUtterance(msg);
    speechSynthesis.speak(speech);
}
function DiceRoller() {
    diceImg.classList.add("clicked");
    setTimeout(() => {
        diceImg.classList.remove("clicked");
    }, 1000);
}
