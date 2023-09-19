const btnNext = document.getElementById("btn-next");
const btnPlayGame = document.getElementById("btn-play-game");
const player1 = document.getElementById("form__name_player1");
const player2 = document.getElementById("form__name_player2");
const panel = document.getElementById("panel");
const $squares = panel.querySelectorAll(".square");
let sequencePlayer1 = [];
let sequencePlayer2 = [];

btnNext.onclick = function () {
  hideElement(document.getElementById("form__form1"));
  showElement(document.getElementById("form__form2"));
}

btnPlayGame.onclick = function () {
  hideElement(document.getElementById("form"));
  showElement(document.getElementById("game"));
  turnPlayer1();
}



function turnPlayer1() {
  $squares.forEach(function ($square) {
    $square.onclick = function () {
      sequencePlayer1.push($square.id);
      console.log(sequencePlayer1);
    }
  })
}

function hideElement($element) {
  $element.classList.remove("d-flex");
  $element.classList.add("d-none");
}

function showElement($element) {
  $element.classList.remove("d-none");
  $element.classList.add("d-flex");
}

function blockInput() {
  $squares.forEach(function ($square) {
    $square.onclick = function () {
    }
  })
}

