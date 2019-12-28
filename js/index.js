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
    image.style.height = "90px";
    image.style.width = "90px";
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

function checkIfMatch(firstChoice, secondChoice) {
  let first = firstChoice[0];
  let second = secondChoice[0];
  if (
    first.firstChild.getAttribute("src") ===
    second.firstChild.getAttribute("src")
  ) {
    cardsMatch(first, second);
  } else {
    cardsDifferent(first, second);
  }
  counterOpenCards = 0;
  firstChoiceShown = false;
}

function cardsMatch(first, second) {
  first.classList.add("match", "correct");
  second.classList.add("match", "correct");
  setTimeout(function() {
    first.classList.remove("correct");
    second.classList.remove("correct");
  }, 800);
  counterMatchCards++;
  checkIfWon();
}

function cardsDifferent(first, second) {
  first.classList.add("different");
  second.classList.add("different");
  setTimeout(function() {
    first.firstChild.style.visibility = "hidden";
    second.firstChild.style.visibility = "hidden";
    first.classList.add("hide");
    second.classList.add("hide");
    first.classList.remove("spin", "different");
    second.classList.remove("spin", "different");
  }, 1200);

  first.classList.remove("hide");
  second.classList.remove("hide");
}
function winningMassage() {
  const winningMassage = document.querySelector(".win");
  winningMassage.style.opacity = "1";
  winningMassage.style.transition = "all 2.5s";
  winningMassage.style.transform = "rotateX(720deg)";
  winningMassage.style.textShadow = "0.2px 0.2px";
}

function checkIfWon() {
  if (counterMatchCards === 6) {
    winningMassage();
  }
  newGame();
}

function newGame() {
  const newGame = document.querySelector("#newGame");
  // const image = document.querySelectorAll("img");
  // console.log(image);
  newGame.addEventListener("click", function() {
    location.reload();
    {
      // for (i = 0; i < cardsArray.length; i++) {
      //   card[i].innerHTML = "";
      //   card[i].classList.remove("spin", "match", "card");
      //   card[i].classList.add("card");
      //   cardsArray[i].innerHTML = "";
      //   image[i].src = "";
      // }
      // cardsOrder();
      // playOn(cards);
      // counterMatchCards = 0;
      // counterOpenCards = 0;
      // counterMatchCards = 0;
      // count = 0;
      // i = 0;
      // console.log(image);
      // return;
    }
  });
}
newGame();
