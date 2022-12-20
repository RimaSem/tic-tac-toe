const squares = document.querySelectorAll(".square");
const restartBtn = document.querySelector("button");
const result = document.querySelector(".result");

let squaresArray = []; // check for a tie via length property
let marking = "X"; // for switching players
let isDisabled = false; // for disabling event listener on squares

squares.forEach((square) =>
  square.addEventListener("click", (e) => {
    if (e.target.textContent == "" && !isDisabled) {
      e.target.textContent = marking;
      squaresArray.push(e.target.textContent);

      // check if there is a winner
      if (isWinner()) {
        result.textContent = `Player ${marking} wins`;
        isDisabled = true;
        return;
      } else if (squaresArray.length === 9) {
        result.textContent = `It's a tie!`;
      } else {
        // switch players
        if (marking === "X") {
          marking = "O";
        } else {
          marking = "X";
        }
      }
    }
  })
);

function isWinner() {
  const sq1 = document.getElementById("s1");
  const sq2 = document.getElementById("s2");
  const sq3 = document.getElementById("s3");
  const sq4 = document.getElementById("s4");
  const sq5 = document.getElementById("s5");
  const sq6 = document.getElementById("s6");
  const sq7 = document.getElementById("s7");
  const sq8 = document.getElementById("s8");
  const sq9 = document.getElementById("s9");

  return (
    (sq1.textContent !== "" &&
      sq1.textContent === sq2.textContent &&
      sq2.textContent === sq3.textContent) ||
    (sq4.textContent !== "" &&
      sq4.textContent === sq5.textContent &&
      sq5.textContent === sq6.textContent) ||
    (sq7.textContent !== "" &&
      sq7.textContent === sq8.textContent &&
      sq8.textContent === sq9.textContent) ||
    (sq1.textContent !== "" &&
      sq1.textContent === sq4.textContent &&
      sq4.textContent === sq7.textContent) ||
    (sq2.textContent !== "" &&
      sq2.textContent === sq5.textContent &&
      sq5.textContent === sq8.textContent) ||
    (sq3.textContent !== "" &&
      sq3.textContent === sq6.textContent &&
      sq6.textContent === sq9.textContent) ||
    (sq1.textContent !== "" &&
      sq1.textContent === sq5.textContent &&
      sq5.textContent === sq9.textContent) ||
    (sq3.textContent !== "" &&
      sq3.textContent === sq5.textContent &&
      sq5.textContent === sq7.textContent)
  );
}

restartBtn.addEventListener("click", () => {
  marking = "X";
  result.textContent = "";
  squares.forEach((sq) => {
    sq.textContent = "";
    isDisabled = false;
    squaresArray = [];
  });
});
