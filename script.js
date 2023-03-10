function printHighscores() {
    // either get scores from localstorage or set to empty array
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
  
    // sort highscores by score property in descending order
    highscores.sort(function(a, b) {
      return b.score - a.score;
    });
  
    highscores.forEach(function(score) {
      // create li tag for each high score
      var liTag = document.createElement("li");
      liTag.textContent = score.initials + " - " + score.score;
  
      // display on page
      var olEl = document.getElementById("highscores");
      //olEl.appendChild(liTag);
    });
  }
  
  function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
  }
  
  //document.getElementById("clear").onclick = clearHighscores;
  
  // run function when page loads
  printHighscores();
  // Write code to print all numbers from `num` down to 1
// You may assume `num` will be a positive number

var countdown = function(num) {};
let timerId;
let timeLeft = 120;
let timeEl = document.getElementById("time");
let startButton = document.getElementById("startButton");
startButton.onclick = startTheQuiz;
console.log("script.js");
function startTheQuiz() {
  alert("The Quiz Has Started")
  timerId = setInterval(intervalFunc, 1000);
  timeEl.textContent = timeLeft;
}
function intervalFunc() {
  timeLeft--;
  timeEl.textContent = timeLeft;
}

