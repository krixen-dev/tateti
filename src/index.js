const btnNext = document.getElementById("btn-next");
const btnPlayGame = document.getElementById("btn-play-game");

btnNext.onclick = function () {
  hideElement(document.getElementById("form__form1"));
  showElement(document.getElementById("form__form2"));
}

btnPlayGame.onclick = function () {
  hideElement(document.getElementById("form"));
  showElement(document.getElementById("game"));
}





function hideElement($element) {
  $element.classList.remove("d-flex");
  $element.classList.add("d-none");
}

function showElement($element) {
  $element.classList.remove("d-none");
  $element.classList.add("d-flex");
}
