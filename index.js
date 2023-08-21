const nextButton = document.getElementById("nextButton");
const slide1 = document.querySelector(".slide1");
const slide2 = document.querySelector(".slide2");

nextButton.addEventListener("click", () => {
  slide1.style.transform = "translateX(-100%)";
  slide2.style.transform = "translateX(0)";
});

/*for (let i = 0; i < moves.length; i++) {
  if (
    (moves[i] === "U" && moves[i + 1] === "UI") ||
    (moves[i] === "UI" && moves[i + 1] === "U") ||
    (moves[i] === "D" && moves[i + 1] === "DI") ||
    (moves[i] === "DI" && moves[i + 1] === "D") ||
    (moves[i] === "R" && moves[i + 1] === "RI") ||
    (moves[i] === "RI" && moves[i + 1] === "R") ||
    (moves[i] === "L" && moves[i + 1] === "LI") ||
    (moves[i] === "LI" && moves[i + 1] === "L") ||
    (moves[i] === "F" && moves[i + 1] === "FI") ||
    (moves[i] === "FI" && moves[i + 1] === "F") ||
    (moves[i] === "B" && moves[i + 1] === "BI") ||
    (moves[i] === "BI" && moves[i + 1] === "B")
  ) {
    i++; // Skip the 'UI' element
  } else {
    moves.push(movesCopy[i]);
  }
}*/
