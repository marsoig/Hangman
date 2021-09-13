let startButton = document.querySelector(".start-button");
let words = ["бретцель", "достопримечательность", "календарь", "викторина", "артиллерия", "украшение", "неожиданность", "приключение"];
let word;
let attemptsLeft = 10;

function checkAnswer (answer) {
  let rightAnswer = false;
  for (let i = 0; i < word.length; i++) {
    if (word[i] == answer) {
      let hiddentLetters = document.querySelectorAll(".cell");
      hiddentLetters[i].firstChild.nodeValue = word[i];
      rightAnswer = true;
    }
  }
  if (rightAnswer == false) {
    attemptsLeft -= 1;
    if (attemptsLeft == 0) {
      gameOver();
    }
    else {
      let pictureName = 'step';
      pictureName = pictureName + (10 - attemptsLeft);
      document.querySelector(".picture").src = "img/" + pictureName + ".png";
    }
  }
}

function gameOver () {

}

startButton.onclick = function () {
  word = words[6].toUpperCase();
  let rowLetters = document.createElement('div');
  rowLetters.className = 'row-letters';
  for (let i = 0; i < word.length; i++) {
     let newCell = document.createElement('div');
     newCell.className = 'cell';
     let newText = document.createTextNode("_");
     newCell.appendChild(newText);
     rowLetters.appendChild(newCell);
  }

  document.querySelector(".interface").appendChild(rowLetters);

  let letterButtons = document.createElement('div');
  letterButtons.className = 'row-alphabet';
  let alphabet = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
  for (let i = 0; i < alphabet.length; i++) {
     let newLetter = document.createElement('button');
     //newLetter.className = 'cell';
     let newLetterText = document.createTextNode(alphabet[i]);
     newLetter.appendChild(newLetterText);
     letterButtons.appendChild(newLetter);
     newLetter.onclick = function () {
       checkAnswer (alphabet[i]);
       this.disabled = true;
     }
  }
  document.querySelector(".interface").appendChild(letterButtons);

  let pic = document.createElement('img');
  pic.className = 'picture';
  document.querySelector(".picture-container").appendChild(pic);
  document.querySelector(".interface").appendChild(letterButtons);
  startButton.hidden = true;
}
