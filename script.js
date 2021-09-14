let startButton = document.querySelector(".start-button");
let words = ["бретцель", "достопримечательность", "календарь", "викторина", "артиллерия", "украшение", "неожиданность", "приключение"];
let word;
let attemptsLeft = 10;
let currentWord = 0;

function checkAnswer (answer) {

  let rightAnswer = false;
  let victory = true;
  let hiddentLetters = document.querySelectorAll(".cell");

  for (let i = 0; i < word.length; i++) {
    if (word[i] == answer) {
      hiddentLetters[i].firstChild.nodeValue = word[i];
      rightAnswer = true;
    }
  }

  if (rightAnswer == true) {
    for (let i = 0; i < word.length; i++) {
      if (hiddentLetters[i].firstChild.nodeValue == '_') {
        victory = false;
      }
    }
  }

  if (rightAnswer == false) {
    victory == false;
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
  if (victory == true) { gameOver();}
}

function gameOver () {
  for (let i = 0; i < word.length; i++) {
    let hiddentLetters = document.querySelectorAll(".cell");
    hiddentLetters[i].firstChild.nodeValue = word[i];
  }
  let alphabetButtons = document.querySelectorAll(".alphabetLetter");
  for (let i = 0; i < alphabetButtons.length; i++) {
    alphabetButtons[i].disabled = true;
  };
  let playAgain = document.createElement('button');
  playAgain.className = 'start-button';
  let playAgainText = document.createTextNode('Новая игра');
  playAgain.appendChild(playAgainText);
  document.querySelector(".picture-container").appendChild(playAgain);
  playAgain.onclick = function () {
    let interface = document.querySelector(".interface");
    while (interface.firstChild) {
       interface.removeChild(interface.lastChild);
     }
    document.querySelector(".picture").src = '';
    currentWord += 1;
    if (currentWord > words.length) {currentWord = 0;}
    startGame();
  }
}

startButton.onclick = function () {
  startGame();
};

function startGame() {
  word = words[currentWord].toUpperCase();
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
     newLetter.className = 'alphabetLetter';
     let newLetterText = document.createTextNode(alphabet[i]);
     newLetter.appendChild(newLetterText);
     letterButtons.appendChild(newLetter);

     newLetter.onclick = function () {
       checkAnswer (alphabet[i]);
       this.disabled = true;
       this.style.textDecoration = 'line-through';
     }
  }
  document.querySelector(".interface").appendChild(letterButtons);

  let pic = document.createElement('img');
  pic.className = 'picture';
  document.querySelector(".picture-container").appendChild(pic);
  document.querySelector(".interface").appendChild(letterButtons);
  document.querySelector(".start-button").remove();
}
