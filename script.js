let startButton = document.querySelector(".start-button");
let words = ["бретцель", "достопримечательность", "календарь", "викторина", "артиллерия", "украшение", "неожиданность", "приключение"]
startButton.onclick = function () {
  let word = words[1];
  let tbl = document.createElement('table');
  let tr = tbl.insertRow();
  for (let i = 0; i < word.length; i++) {
     let newCell = tr.insertCell();
     let newText = document.createTextNode(word[i]);
     newCell.appendChild(newText);
  }
  document.querySelector(".interface").appendChild(tbl);
  startButton.hidden = true;
}
