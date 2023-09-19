const btnNext = document.getElementById("btn-next");
const btnPlayGame = document.getElementById("btn-play-game");
const player1 = document.getElementById("form__name_player1");
const player2 = document.getElementById("form__name_player2");
const panel = document.getElementById("panel");
const $squares = panel.querySelectorAll(".square");
let flagTurn = false;
let sequencePlayer1 = [];
let sequencePlayer2 = [];

btnNext.onclick = function () {
  hideElement(document.getElementById("form__form1"));
  showElement(document.getElementById("form__form2"));
}

btnPlayGame.onclick = function () {
  hideElement(document.getElementById("form"));
  showElement(document.getElementById("game"));
  manageRound();
}





function manageRound() {
  if (!flagTurn) {
    turnPlayer1();
    console.log("turno player1");
  }else{
    turnPlayer2();
    console.log("turno player2");
  }
}

function turnPlayer1() {
  $squares.forEach(function ($square) {
    $square.onclick = function () {
      sequencePlayer1.push($square.id);
      console.log(sequencePlayer1);
      flagTurn = true;
      blockInput();
      manageRound();
    }
  })
}

function turnPlayer2() {
  $squares.forEach(function ($square) {
    $square.onclick = function () {
      sequencePlayer2.push($square.id);
      console.log(sequencePlayer2);
      flagTurn = false;
      blockInput();
      manageRound();
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

