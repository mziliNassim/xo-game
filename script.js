let replay = document.querySelector(".box-replay");
let squars = document.querySelectorAll(".squar");
let headerTitle = document.querySelector(".box-header p");

let turn = "X";
let is_endGame = false;
let winStatus = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

replay.addEventListener("click", replayGame);
for (let squar of squars) {
  squar.onclick = () => {
    if (!squar.classList.contains("clicked") && !is_endGame) {
      squar.classList.add("clicked");
      let squarIndex = squar.getAttribute("squar");
      winStatus[squarIndex] = turn;
      squar.innerHTML = turn;
      if (chekWin() || chekDrow()) return;
      turn = turn == "X" ? "O" : "X";
      headerTitle.innerHTML = turn + " Turn";
    }
  };
}

function chekWin() {
  if (
    // check rows
    (winStatus[0] == winStatus[1] && winStatus[1] == winStatus[2]) ||
    (winStatus[3] == winStatus[4] && winStatus[4] == winStatus[5]) ||
    (winStatus[6] == winStatus[7] && winStatus[7] == winStatus[8]) ||
    // check colums
    (winStatus[0] == winStatus[3] && winStatus[3] == winStatus[6]) ||
    (winStatus[1] == winStatus[4] && winStatus[4] == winStatus[7]) ||
    (winStatus[2] == winStatus[5] && winStatus[5] == winStatus[8]) ||
    // check diagonal
    (winStatus[0] == winStatus[4] && winStatus[4] == winStatus[8]) ||
    (winStatus[2] == winStatus[4] && winStatus[4] == winStatus[6])
  ) {
    headerTitle.innerHTML = turn + " WIN";
    is_endGame = turn;
    return true;
  }
}

function chekDrow() {
  for (let squar of squars) {
    if (!squar.classList.contains("clicked")) return false;
  }
  headerTitle.innerHTML = "Drow Game!";
  is_endGame = true;
  return true;
}

function replayGame() {
  winStatus = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
  headerTitle.innerHTML = turn + " turn";
  is_endGame = false;
  squars.forEach((squars) => {
    squars.innerHTML = "";
    squars.classList.remove("clicked");
  });
}
