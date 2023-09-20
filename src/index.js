(function juegoTaTeTi() {

const btnNext = document.getElementById("btn-next");
const btnPlayGame = document.getElementById("btn-play-game");
const player1 = document.getElementById("form__name_player1");
const player2 = document.getElementById("form__name_player2");
const panel = document.getElementById("panel");
const $squares = panel.querySelectorAll(".square");

let flag = false;
let winner = false;
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
  if (winner) {
    console.log("aquí se mostraría el tablero de ganador");
    lockInput();
  }else if (!flag) {
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
      paint($square, "primary");
      setTimeout(() => {
      sequencePlayer1.push($square.id);
      if (verifyWinningSequence(sequencePlayer1)) {
        console.log("ganaste");
        winner = true;
        manageRound();
      }else{
        console.log(sequencePlayer1);
        flag = true;
        lockInput();
        manageRound();
      }
      }, 500);
    }
  })
}

function turnPlayer2() {
  $squares.forEach(function ($square) {
    $square.onclick = function () {
      paint($square, "danger");
      setTimeout(() => {
        sequencePlayer2.push($square.id);
        if (verifyWinningSequence(sequencePlayer2)) {
          console.log("ganaste");
          winner = true;
          manageRound();
        }else{
          console.log(sequencePlayer2);
          flag = false;
          lockInput();
          manageRound();
        }
      }, 500);
    }
  })
}

function sequenceWinner(sequence, num1, num2, num3) {
  if (sequence.includes("square-"+num1) && sequence.includes("square-"+num2) && sequence.includes("square-"+num3) ) {
    return true;
  }
}

function verifyWinningSequence(sequence) {
  if (sequence.length > 2) {
    console.log("empieza a verificar");
    if (sequenceWinner(sequence,1,2,3)|| 
        sequenceWinner(sequence,4,5,6)|| 
        sequenceWinner(sequence,7,8,9)||
        sequenceWinner(sequence,1,4,7)||
        sequenceWinner(sequence,2,5,8)||
        sequenceWinner(sequence,3,6,9)||
        sequenceWinner(sequence,7,5,3)||
        sequenceWinner(sequence,9,5,1)){
      return true;
    }
  }
}

function hideElement($element) {
  $element.classList.remove("d-flex");
  $element.classList.add("d-none");
}

function showElement($element) {
  $element.classList.remove("d-none");
  $element.classList.add("d-flex");
}

function lockInput() {
  $squares.forEach(function ($square) {
    $square.onclick = function () {
    }
  })
}

function paint($element, color) {
  $element.classList.add("bg-"+ color);
  $element.classList.add("selected");
}

})();


