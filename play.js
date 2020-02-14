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
  });
}
newGame();
