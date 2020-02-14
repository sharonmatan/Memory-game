let cardsOnGame = 12;
let cardsArray = [];
let i = 0;
function cardsOrder() {
  while (i < cardsOnGame) {
    let randomNum = Math.floor(Math.random() * 6) + 1;
    if (countArray(cardsArray, randomNum) < 2) {
      cardsArray.push(randomNum);
      cardsOnGame--;
    }
  }
  return cardsArray;
}

function countArray(cardsArray, num) {
  let count = 0;
  for (let i = 0; i < cardsArray.length; i++) {
    if (cardsArray[i] === num) {
      count++;
    }
  }
  return count;
}

function playOn(locationOfCards) {
  for (let i = 0; i < locationOfCards.length; i++) {
    let card = document.getElementsByClassName("card")[i];
    let image = document.createElement("img");
    image.style.height = "85px";
    image.style.width = "85px";
    image.style.visibility = "hidden";
    image.src = `./images/pic${locationOfCards[i]}.png`;
    card.appendChild(image);
  }
}
let cards = cardsOrder();
playOn(cards);

let counterOpenCards = 0;
let firstChoice, secondChoice;
let firstChoiceShown = false;
let counterMatchCards = 0;
let card = $(".card");

let playing = card.click(function show() {
  counterOpenCards <= 2 ? true : false;
  if (!$(this).hasClass("spin")) {
    $(this).addClass("spin");
    $(this)[0].firstChild.style.visibility = "visible";
    if (!firstChoiceShown) {
      firstChoice = $(this);
    }
    firstChoiceShown = true;
    secondChoice = $(this);
    counterOpenCards++;
  }
  if (counterOpenCards === 2) {
    checkIfMatch(firstChoice, secondChoice);
  }
});
