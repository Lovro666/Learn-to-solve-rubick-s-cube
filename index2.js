let moves = [];
function convertStickerNameToIndexes(str) {
  let numericPart = str.match(/\d/g);
  return numericPart.map(Number);
}
function changeColor(element) {
  const stickerId = element.id;

  const stickerIndexes = convertStickerNameToIndexes(stickerId);

  const currentColor = element.dataset.color;
  const colorsA = ["white", "blue", "yellow", "green", "orange", "red"];
  const index = colorsA.indexOf(currentColor);

  const newIndex = (index + 1) % colorsA.length;

  element.style.backgroundColor = colorsA[newIndex];
  element.dataset.color = colorsA[newIndex];

  //update the cube array on the retreived indexes
  aRc[stickerIndexes[0]][stickerIndexes[1]][stickerIndexes[2]] =
    colorsA[newIndex];
  const stickerId3d = stickerId + "3";

  var stickerElement3d = document.getElementById(stickerId3d);

  if (stickerElement3d !== null) {
    stickerElement3d.style.backgroundColor = colorsA[newIndex];
  }
}

let aRc = [
  [
    [["blue"], ["blue"], ["blue"]],
    [["blue"], ["blue"], ["blue"]],
    [["blue"], ["blue"], ["blue"]],
  ],
  [
    [["yellow"], ["yellow"], ["yellow"]],
    [["yellow"], ["yellow"], ["yellow"]],
    [["yellow"], ["yellow"], ["yellow"]],
  ],
  [
    [["green"], ["green"], ["green"]],
    [["green"], ["green"], ["green"]],
    [["green"], ["green"], ["green"]],
  ],
  [
    [["white"], ["white"], ["white"]],
    [["white"], ["white"], ["white"]],
    [["white"], ["white"], ["white"]],
  ],
  [
    [["orange"], ["orange"], ["orange"]],
    [["orange"], ["orange"], ["orange"]],
    [["orange"], ["orange"], ["orange"]],
  ],
  [
    [["red"], ["red"], ["red"]],
    [["red"], ["red"], ["red"]],
    [["red"], ["red"], ["red"]],
  ],
];

function movesToCube() {
  for (let i0 = 0; i0 < 6; i0++) {
    for (let i1 = 0; i1 < 3; i1++) {
      for (let i2 = 0; i2 < 3; i2++) {
        if (!(i1 === 1 && i2 === 1)) {
          const coordinates = [i0, i1, i2];
          const idSticker = "box" + coordinates.join("");
          const stickerElement = document.getElementById(idSticker);
          stickerElement.style.backgroundColor = aRc[i0][i1][i2];
        }
      }
    }
  }
}

function rMove() {
  var color1 = aRc[0][2][0];
  var color2 = aRc[0][2][1];
  var color3 = aRc[0][2][2];
  var color4 = aRc[1][2][0];
  var color5 = aRc[1][2][1];
  var color6 = aRc[1][2][2];
  var color7 = aRc[2][2][0];
  var color8 = aRc[2][2][1];
  var color9 = aRc[2][2][2];
  var color10 = aRc[3][2][0];
  var color11 = aRc[3][2][1];
  var color12 = aRc[3][2][2];
  var rColor1 = aRc[5][2][0];
  var rColor2 = aRc[5][1][0];
  var rColor3 = aRc[5][0][0];
  var rColor4 = aRc[5][0][1];
  var rColor5 = aRc[5][0][2];
  var rColor6 = aRc[5][1][2];
  var rColor7 = aRc[5][2][2];
  var rColor8 = aRc[5][2][1];
  aRc[0][2][0] = color10;
  aRc[0][2][1] = color11;
  aRc[0][2][2] = color12;
  aRc[1][2][0] = color1;
  aRc[1][2][1] = color2;
  aRc[1][2][2] = color3;
  aRc[2][2][0] = color4;
  aRc[2][2][1] = color5;
  aRc[2][2][2] = color6;
  aRc[3][2][0] = color7;
  aRc[3][2][1] = color8;
  aRc[3][2][2] = color9;
  aRc[5][2][0] = rColor7;
  aRc[5][1][0] = rColor8;
  aRc[5][0][0] = rColor1;
  aRc[5][0][1] = rColor2;
  aRc[5][0][2] = rColor3;
  aRc[5][1][2] = rColor4;
  aRc[5][2][2] = rColor5;
  aRc[5][2][1] = rColor6;
}

function R() {
  rMove();
  const move = "R";

  moves.push(move);
  movesToCube();
}

function RI() {
  for (let i = 0; i < 3; i++) {
    rMove();
  }
  const move = "RI";

  moves.push(move);
  movesToCube();
}

function uMove() {
  var color1 = aRc[5][0][0];
  var color2 = aRc[5][0][1];
  var color3 = aRc[5][0][2];
  var color4 = aRc[0][0][2];
  var color5 = aRc[0][1][2];
  var color6 = aRc[0][2][2];
  var color7 = aRc[4][2][0];
  var color8 = aRc[4][2][1];
  var color9 = aRc[4][2][2];
  var color10 = aRc[2][0][0];
  var color11 = aRc[2][1][0];
  var color12 = aRc[2][2][0];
  var rColor1 = aRc[1][0][2];
  var rColor2 = aRc[1][1][2];
  var rColor3 = aRc[1][2][2];
  var rColor4 = aRc[1][0][1];
  var rColor5 = aRc[1][2][1];
  var rColor6 = aRc[1][0][0];
  var rColor7 = aRc[1][1][0];
  var rColor8 = aRc[1][2][0];
  aRc[5][0][0] = color12;
  aRc[5][0][1] = color11;
  aRc[5][0][2] = color10;
  aRc[0][0][2] = color1;
  aRc[0][1][2] = color2;
  aRc[0][2][2] = color3;
  aRc[4][2][0] = color6;
  aRc[4][2][1] = color5;
  aRc[4][2][2] = color4;
  aRc[2][0][0] = color7;
  aRc[2][1][0] = color8;
  aRc[2][2][0] = color9;
  aRc[1][0][2] = rColor6;
  aRc[1][1][2] = rColor4;
  aRc[1][2][2] = rColor1;
  aRc[1][0][1] = rColor7;
  aRc[1][2][1] = rColor2;
  aRc[1][0][0] = rColor8;
  aRc[1][1][0] = rColor5;
  aRc[1][2][0] = rColor3;
}
function U() {
  uMove();
  const move = "U";

  moves.push(move);
  movesToCube();
}

function UI() {
  for (let i = 0; i < 3; i++) {
    uMove();
  }
  const move = "UI";

  moves.push(move);
  movesToCube();
}

function dMove() {
  var color1 = aRc[0][0][0];
  var color2 = aRc[0][1][0];
  var color3 = aRc[0][2][0];
  var color4 = aRc[5][2][0];
  var color5 = aRc[5][2][1];
  var color6 = aRc[5][2][2];
  var color7 = aRc[2][0][2];
  var color8 = aRc[2][1][2];
  var color9 = aRc[2][2][2];
  var color10 = aRc[4][0][2];
  var color11 = aRc[4][0][1];
  var color12 = aRc[4][0][0];
  var rColor1 = aRc[3][0][2];
  var rColor2 = aRc[3][1][2];
  var rColor3 = aRc[3][2][2];
  var rColor4 = aRc[3][0][1];
  var rColor5 = aRc[3][2][1];
  var rColor6 = aRc[3][0][0];
  var rColor7 = aRc[3][1][0];
  var rColor8 = aRc[3][2][0];
  aRc[0][0][0] = color10;
  aRc[0][1][0] = color11;
  aRc[0][2][0] = color12;
  aRc[5][2][0] = color1;
  aRc[5][2][1] = color2;
  aRc[5][2][2] = color3;
  aRc[2][0][2] = color6;
  aRc[2][1][2] = color5;
  aRc[2][2][2] = color4;
  aRc[4][0][2] = color9;
  aRc[4][0][1] = color8;
  aRc[4][0][0] = color7;
  aRc[3][0][2] = rColor6;
  aRc[3][1][2] = rColor4;
  aRc[3][2][2] = rColor1;
  aRc[3][0][1] = rColor7;
  aRc[3][2][1] = rColor2;
  aRc[3][0][0] = rColor8;
  aRc[3][1][0] = rColor5;
  aRc[3][2][0] = rColor3;
}
function D() {
  dMove();
  const move = "D";

  moves.push(move);
  movesToCube();
}

function DI() {
  for (let i = 0; i < 3; i++) {
    dMove();
  }
  const move = "DI";

  moves.push(move);
  movesToCube();
}
function lMove() {
  var color1 = aRc[0][0][2];
  var color2 = aRc[0][0][1];
  var color3 = aRc[0][0][0];
  var color4 = aRc[1][0][2];
  var color5 = aRc[1][0][1];
  var color6 = aRc[1][0][0];
  var color7 = aRc[2][0][2];
  var color8 = aRc[2][0][1];
  var color9 = aRc[2][0][0];
  var color10 = aRc[3][0][2];
  var color11 = aRc[3][0][1];
  var color12 = aRc[3][0][0];
  var rColor1 = aRc[4][0][2];
  var rColor2 = aRc[4][1][2];
  var rColor3 = aRc[4][2][2];
  var rColor4 = aRc[4][0][1];
  var rColor5 = aRc[4][2][1];
  var rColor6 = aRc[4][0][0];
  var rColor7 = aRc[4][1][0];
  var rColor8 = aRc[4][2][0];
  aRc[0][0][2] = color4;
  aRc[0][0][1] = color5;
  aRc[0][0][0] = color6;
  aRc[1][0][2] = color7;
  aRc[1][0][1] = color8;
  aRc[1][0][0] = color9;
  aRc[2][0][2] = color10;
  aRc[2][0][1] = color11;
  aRc[2][0][0] = color12;
  aRc[3][0][2] = color1;
  aRc[3][0][1] = color2;
  aRc[3][0][0] = color3;
  aRc[4][0][2] = rColor6;
  aRc[4][1][2] = rColor4;
  aRc[4][2][2] = rColor1;
  aRc[4][0][1] = rColor7;
  aRc[4][2][1] = rColor2;
  aRc[4][0][0] = rColor8;
  aRc[4][1][0] = rColor5;
  aRc[4][2][0] = rColor3;
}
function L() {
  lMove();
  const move = "L";

  moves.push(move);
  movesToCube();
}

function LI() {
  for (let i = 0; i < 3; i++) {
    lMove();
  }
  const move = "LI";

  moves.push(move);
  movesToCube();
}
function bMove() {
  var color1 = aRc[1][0][2];
  var color2 = aRc[1][1][2];
  var color3 = aRc[1][2][2];
  var color4 = aRc[5][0][2];
  var color5 = aRc[5][1][2];
  var color6 = aRc[5][2][2];
  var color7 = aRc[3][0][0];
  var color8 = aRc[3][1][0];
  var color9 = aRc[3][2][0];
  var color10 = aRc[4][0][2];
  var color11 = aRc[4][1][2];
  var color12 = aRc[4][2][2];
  var rColor1 = aRc[2][0][2];
  var rColor2 = aRc[2][1][2];
  var rColor3 = aRc[2][2][2];
  var rColor4 = aRc[2][2][1];
  var rColor5 = aRc[2][2][0];
  var rColor6 = aRc[2][1][0];
  var rColor7 = aRc[2][0][1];
  var rColor8 = aRc[2][0][0];
  aRc[1][0][2] = color4;
  aRc[1][1][2] = color5;
  aRc[1][2][2] = color6;
  aRc[5][0][2] = color9;
  aRc[5][1][2] = color8;
  aRc[5][2][2] = color7;
  aRc[3][0][0] = color12;
  aRc[3][1][0] = color11;
  aRc[3][2][0] = color10;
  aRc[4][0][2] = color1;
  aRc[4][1][2] = color2;
  aRc[4][2][2] = color3;
  aRc[2][0][2] = rColor8;
  aRc[2][1][2] = rColor7;
  aRc[2][2][2] = rColor1;
  aRc[2][0][1] = rColor6;
  aRc[2][2][1] = rColor2;
  aRc[2][0][0] = rColor5;
  aRc[2][1][0] = rColor4;
  aRc[2][2][0] = rColor3;
}
function B() {
  bMove();
  const move = "B";

  moves.push(move);
  movesToCube();
}

function BI() {
  for (let i = 0; i < 3; i++) {
    bMove();
  }
  const move = "BI";

  moves.push(move);
  movesToCube();
}
function fMove() {
  var color1 = aRc[1][0][0];
  var color2 = aRc[1][1][0];
  var color3 = aRc[1][2][0];
  var color4 = aRc[5][0][0];
  var color5 = aRc[5][1][0];
  var color6 = aRc[5][2][0];
  var color7 = aRc[3][0][2];
  var color8 = aRc[3][1][2];
  var color9 = aRc[3][2][2];
  var color10 = aRc[4][0][0];
  var color11 = aRc[4][1][0];
  var color12 = aRc[4][2][0];
  var rColor1 = aRc[0][0][2];
  var rColor2 = aRc[0][1][2];
  var rColor3 = aRc[0][2][2];
  var rColor4 = aRc[0][0][1];
  var rColor5 = aRc[0][2][1];
  var rColor6 = aRc[0][0][0];
  var rColor7 = aRc[0][1][0];
  var rColor8 = aRc[0][2][0];
  aRc[1][0][0] = color10;
  aRc[1][1][0] = color11;
  aRc[1][2][0] = color12;
  aRc[5][0][0] = color1;
  aRc[5][1][0] = color2;
  aRc[5][2][0] = color3;
  aRc[3][0][2] = color6;
  aRc[3][1][2] = color5;
  aRc[3][2][2] = color4;
  aRc[4][0][0] = color9;
  aRc[4][1][0] = color8;
  aRc[4][2][0] = color7;
  aRc[0][0][2] = rColor6;
  aRc[0][1][2] = rColor4;
  aRc[0][2][2] = rColor1;
  aRc[0][0][1] = rColor7;
  aRc[0][2][1] = rColor2;
  aRc[0][0][0] = rColor8;
  aRc[0][1][0] = rColor5;
  aRc[0][2][0] = rColor3;
}

function F() {
  fMove();
  const move = "F";

  moves.push(move);
  movesToCube();
}

function FI() {
  for (let i = 0; i < 3; i++) {
    fMove();
  }
  const move = "FI";

  moves.push(move);
  movesToCube();
}

function makeMove(move) {
  switch (move) {
    case "R":
      R();
      break;
    case "RI":
      RI();
      break;
    case "F":
      F();
      break;
    case "FI":
      FI();
      break;
    case "L":
      L();
      break;
    case "LI":
      LI();
      break;
    case "B":
      B();
      break;
    case "BI":
      BI();
      break;
    case "U":
      U();
      break;
    case "UI":
      UI();
      break;
    case "D":
      D();
      break;
    case "DI":
      DI();
      break;

    default:
      break;
  }
}

function mixCube() {
  const commands = ["F", "F", "R", "R", "LI", "UI", "FI", "U"];

  commands.forEach((cmd) => {
    makeMove(cmd);
  });
}

function solverEdges() {
  //copy start state

  let results = [];

  //BOTTOM LAYER WHITE EDGES
  let indexi = 4;
  if (aRc[1][1][0] == "white") {
    indexi--;
    if (aRc[1][0][1] == "white") {
      indexi--;
      if (aRc[1][1][2] == "white") {
        indexi--;
        if (aRc[1][2][1] == "white") {
          indexi--;
        }
      }
    }
  }

  for (let i = 0; i < indexi; i++) {
    results = [];
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 3; k++) {
          if (
            aRc[i][j][k] == "white" &&
            (j + k === 1 || j + k === 3) &&
            i !== 1
          ) {
            results.push([i, j, k]);
          }
        }
      }
    }

    if (!(results.length === 0)) {
      if (results[0][0] == 0 && results[0][1] == 1 && results[0][2] == 0) {
        //Ali ti bela na poti
        if (aRc[1][1][0] == "white") {
          while (aRc[1][1][0] == "white") {
            U();
          }
        }

        D();
        R();
        LI();
        DI();
        FI();
        RI();
        L();
        movesToCube();
      }

      if (results[0][0] === 2 && results[0][1] === 1 && results[0][2] === 2) {
        for (let i = 0; i < 2; i++) {
          D();
        }
        if (aRc[1][1][0] == "white") {
          while (aRc[1][1][0] == "white") {
            U();
          }
        }

        R();
        LI();
        DI();
        FI();
        RI();
        L();
        movesToCube();
      }

      if (results[0][0] === 4 && results[0][1] === 0 && results[0][2] === 1) {
        D();
        if (aRc[1][1][0] == "white") {
          while (aRc[1][1][0] == "white") {
            U();
          }
        }

        D();
        R();
        LI();
        DI();
        FI();
        RI();
        L();
        movesToCube();
      }

      if (results[0][0] === 5 && results[0][1] === 2 && results[0][2] === 1) {
        DI();
        if (aRc[1][1][0] == "white") {
          while (aRc[1][1][0] == "white") {
            U();
          }
        }

        D();
        R();
        LI();
        DI();
        FI();
        RI();
        L();
        movesToCube();
      }

      //TOP LAYER CROSS SOLVER

      if (results[0][0] === 0 && results[0][1] === 1 && results[0][2] === 2) {
        FI();
        U();
        LI();
        movesToCube();
      }
      if (results[0][0] === 2 && results[0][1] === 1 && results[0][2] === 0) {
        FI();
        U();
        LI();
        movesToCube();
      }
      if (results[0][0] === 4 && results[0][1] === 2 && results[0][2] === 1) {
        UI();
        FI();
        U();
        LI();
        movesToCube();
      }
      if (results[0][0] === 5 && results[0][1] === 0 && results[0][2] === 1) {
        U();
        FI();
        U();
        LI();
        movesToCube();
      }

      //SPECIFIC AREA-MIDDLE LAYER CROSS SOLVER

      if (results[0][0] === 0 && results[0][1] === 0 && results[0][2] === 1) {
        if (aRc[1][0][1] == "white") {
          while (aRc[1][0][1] == "white") {
            U();
          }
        }
        LI();
        movesToCube();
      }

      if (results[0][0] === 0 && results[0][1] === 2 && results[0][2] === 1) {
        if (aRc[1][2][1] == "white") {
          while (aRc[1][2][1] == "white") {
            U();
          }
        }
        R();
        movesToCube();
      }
      if (results[0][0] === 5 && results[0][1] === 1 && results[0][2] === 0) {
        if (aRc[1][1][0] == "white") {
          while (aRc[1][1][0] == "white") {
            U();
          }
        }
        FI();
        movesToCube();
      }

      if (results[0][0] === 5 && results[0][1] === 1 && results[0][2] === 2) {
        if (aRc[1][1][2] == "white") {
          while (aRc[1][1][2] == "white") {
            U();
          }
        }
        B();
        movesToCube();
      }
      if (results[0][0] === 2 && results[0][1] === 2 && results[0][2] === 1) {
        if (aRc[1][2][1] == "white") {
          while (aRc[1][2][1] == "white") {
            U();
          }
        }
        RI();
        movesToCube();
      }

      if (results[0][0] === 2 && results[0][1] === 0 && results[0][2] === 1) {
        if (aRc[1][0][1] == "white") {
          while (aRc[1][0][1] == "white") {
            U();
          }
        }
        L();
        movesToCube();
      }
      if (results[0][0] === 4 && results[0][1] === 1 && results[0][2] === 0) {
        if (aRc[1][1][0] == "white") {
          while (aRc[1][1][0] == "white") {
            U();
          }
        }
        F();
        movesToCube();
      }

      if (results[0][0] === 4 && results[0][1] === 1 && results[0][2] === 2) {
        if (aRc[1][1][2] == "white") {
          while (aRc[1][1][2] == "white") {
            U();
          }
        }
        BI();
        movesToCube();
      }

      //BOTTOM AREA CROSS SOLVER

      if (results[0][0] === 3 && results[0][1] === 2 && results[0][2] === 1) {
        if (aRc[1][2][1] == "white") {
          while (aRc[1][2][1] == "white") {
            U();
          }
        }
        R();
        R();
        movesToCube();
      }

      if (results[0][0] === 3 && results[0][1] === 1 && results[0][2] === 2) {
        if (aRc[1][1][0] == "white") {
          while (aRc[1][1][0] == "white") {
            U();
          }
        }
        F();
        F();
        movesToCube();
      }
      if (results[0][0] === 3 && results[0][1] === 1 && results[0][2] === 0) {
        if (aRc[1][1][2] == "white") {
          while (aRc[1][1][2] == "white") {
            U();
          }
        }
        B();
        B();
        movesToCube();
      }

      if (results[0][0] === 3 && results[0][1] === 0 && results[0][2] === 1) {
        if (aRc[1][0][1] == "white") {
          while (aRc[1][0][1] == "white") {
            U();
          }
        }
        L();
        L();
        movesToCube();
      }
    }
  }
}

function matchEdges() {
  if (aRc[0][1][2] == "blue" && aRc[1][1][0] == "white") {
    F();
    F();
  }

  if (aRc[4][2][1] == "blue" && aRc[1][0][1] == "white") {
    UI();
    F();
    F();
  }
  if (aRc[2][1][0] == "blue" && aRc[1][1][2] == "white") {
    U();
    U();
    F();
    F();
  }

  if (aRc[5][0][1] == "blue" && aRc[1][2][1] == "white") {
    U();
    F();
    F();
  }
  if (aRc[0][1][2] == "red" && aRc[1][1][0] == "white") {
    UI();
    R();
    R();
  }
  if (aRc[4][2][1] == "red" && aRc[1][0][1] == "white") {
    U();
    U();
    R();
    R();
  }
  if (aRc[2][1][0] == "red" && aRc[1][1][2] == "white") {
    U();
    R();
    R();
  }

  if (aRc[5][0][1] == "red" && aRc[1][2][1] == "white") {
    R();
    R();
  }
  if (aRc[0][1][2] == "green" && aRc[1][1][0] == "white") {
    U();
    U();
    B();
    B();
  }
  if (aRc[4][2][1] == "green" && aRc[1][0][1] == "white") {
    U();
    B();
    B();
  }
  if (aRc[2][1][0] == "green" && aRc[1][1][2] == "white") {
    B();
    B();
  }

  if (aRc[5][0][1] == "green" && aRc[1][2][1] == "white") {
    UI();
    B();
    B();
  }
  if (aRc[0][1][2] == "orange" && aRc[1][1][0] == "white") {
    U();
    L();
    L();
  }
  if (aRc[4][2][1] == "orange" && aRc[1][0][1] == "white") {
    L();
    L();
  }
  if (aRc[2][1][0] == "orange" && aRc[1][1][2] == "white") {
    UI();
    L();
    L();
  }

  if (aRc[5][0][1] == "orange" && aRc[1][2][1] == "white") {
    U();
    U();
    L();
    L();
  }
}
function solverCorners() {
  const resultsCorners = [];

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        if (
          aRc[i][j][k] == "white" &&
          (j + k === 0 || j + k === 2 || j + k === 4) &&
          !(j + k === 2 && j === k)
        ) {
          resultsCorners.push([i, j, k]);
        }
      }
    }
  }

  const firstCornerPair = [];
  const secondCornerPair = [];
  const thirdCornerPair = [];
  const fourthCornerPair = [];
  const cornerPairs = [
    [
      [2, 0, 0],
      [1, 0, 2],
      [4, 2, 2],
    ],
    [
      [2, 2, 0],
      [1, 2, 2],
      [5, 0, 2],
    ],
    [
      [4, 2, 0],
      [1, 0, 0],
      [0, 0, 2],
    ],
    [
      [5, 0, 0],
      [1, 2, 0],
      [0, 2, 2],
    ],
    [
      [4, 0, 0],
      [0, 0, 0],
      [3, 0, 2],
    ],
    [
      [0, 2, 0],
      [5, 2, 0],
      [3, 2, 2],
    ],
    [
      [2, 0, 2],
      [4, 0, 2],
      [3, 0, 0],
    ],
    [
      [2, 2, 2],
      [5, 2, 2],
      [3, 2, 0],
    ],
  ];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 3; j++) {
      if (
        JSON.stringify(resultsCorners[0]) === JSON.stringify(cornerPairs[i][j])
      ) {
        Array.prototype.push.apply(firstCornerPair, cornerPairs[i]);
      }
      if (
        JSON.stringify(resultsCorners[1]) === JSON.stringify(cornerPairs[i][j])
      ) {
        Array.prototype.push.apply(secondCornerPair, cornerPairs[i]);
      }
      if (
        JSON.stringify(resultsCorners[2]) === JSON.stringify(cornerPairs[i][j])
      ) {
        Array.prototype.push.apply(thirdCornerPair, cornerPairs[i]);
      }
      if (
        JSON.stringify(resultsCorners[3]) === JSON.stringify(cornerPairs[i][j])
      ) {
        Array.prototype.push.apply(fourthCornerPair, cornerPairs[i]);
      }
    }
  }

  const whiteOrangeGreenCorner = [];

  //whiteOrangeGreenCorner
  if (
    (aRc[firstCornerPair[0][0]][firstCornerPair[0][1]][firstCornerPair[0][2]] ==
      "white" &&
      aRc[firstCornerPair[1][0]][firstCornerPair[1][1]][
        firstCornerPair[1][2]
      ] == "orange" &&
      aRc[firstCornerPair[2][0]][firstCornerPair[2][1]][
        firstCornerPair[2][2]
      ] == "green") ||
    (aRc[firstCornerPair[0][0]][firstCornerPair[0][1]][firstCornerPair[0][2]] ==
      "white" &&
      aRc[firstCornerPair[1][0]][firstCornerPair[1][1]][
        firstCornerPair[1][2]
      ] == "green" &&
      aRc[firstCornerPair[2][0]][firstCornerPair[2][1]][
        firstCornerPair[2][2]
      ] == "orange") ||
    (aRc[firstCornerPair[0][0]][firstCornerPair[0][1]][firstCornerPair[0][2]] ==
      "orange" &&
      aRc[firstCornerPair[1][0]][firstCornerPair[1][1]][
        firstCornerPair[1][2]
      ] == "white" &&
      aRc[firstCornerPair[2][0]][firstCornerPair[2][1]][
        firstCornerPair[2][2]
      ] == "green") ||
    (aRc[firstCornerPair[0][0]][firstCornerPair[0][1]][firstCornerPair[0][2]] ==
      "orange" &&
      aRc[firstCornerPair[1][0]][firstCornerPair[1][1]][
        firstCornerPair[1][2]
      ] == "green" &&
      aRc[firstCornerPair[2][0]][firstCornerPair[2][1]][
        firstCornerPair[2][2]
      ] == "white") ||
    (aRc[firstCornerPair[0][0]][firstCornerPair[0][1]][firstCornerPair[0][2]] ==
      "green" &&
      aRc[firstCornerPair[1][0]][firstCornerPair[1][1]][
        firstCornerPair[1][2]
      ] == "orange" &&
      aRc[firstCornerPair[2][0]][firstCornerPair[2][1]][
        firstCornerPair[2][2]
      ] == "white") ||
    (aRc[firstCornerPair[0][0]][firstCornerPair[0][1]][firstCornerPair[0][2]] ==
      "green" &&
      aRc[firstCornerPair[1][0]][firstCornerPair[1][1]][
        firstCornerPair[1][2]
      ] == "white" &&
      aRc[firstCornerPair[2][0]][firstCornerPair[2][1]][
        firstCornerPair[2][2]
      ] == "orange")
  ) {
    for (i = 0; i < 3; i++) {
      if (
        aRc[firstCornerPair[i][0]][firstCornerPair[i][1]][
          firstCornerPair[i][2]
        ] == "white"
      ) {
        Array.prototype.push.apply(whiteOrangeGreenCorner, firstCornerPair[i]);
      }
    }
  }

  if (
    (aRc[secondCornerPair[0][0]][secondCornerPair[0][1]][
      secondCornerPair[0][2]
    ] == "white" &&
      aRc[secondCornerPair[1][0]][secondCornerPair[1][1]][
        secondCornerPair[1][2]
      ] == "orange" &&
      aRc[secondCornerPair[2][0]][secondCornerPair[2][1]][
        secondCornerPair[2][2]
      ] == "green") ||
    (aRc[secondCornerPair[0][0]][secondCornerPair[0][1]][
      secondCornerPair[0][2]
    ] == "white" &&
      aRc[secondCornerPair[1][0]][secondCornerPair[1][1]][
        secondCornerPair[1][2]
      ] == "green" &&
      aRc[secondCornerPair[2][0]][secondCornerPair[2][1]][
        secondCornerPair[2][2]
      ] == "orange") ||
    (aRc[secondCornerPair[0][0]][secondCornerPair[0][1]][
      secondCornerPair[0][2]
    ] == "orange" &&
      aRc[secondCornerPair[1][0]][secondCornerPair[1][1]][
        secondCornerPair[1][2]
      ] == "white" &&
      aRc[secondCornerPair[2][0]][secondCornerPair[2][1]][
        secondCornerPair[2][2]
      ] == "green") ||
    (aRc[secondCornerPair[0][0]][secondCornerPair[0][1]][
      secondCornerPair[0][2]
    ] == "orange" &&
      aRc[secondCornerPair[1][0]][secondCornerPair[1][1]][
        secondCornerPair[1][2]
      ] == "green" &&
      aRc[secondCornerPair[2][0]][secondCornerPair[2][1]][
        secondCornerPair[2][2]
      ] == "white") ||
    (aRc[secondCornerPair[0][0]][secondCornerPair[0][1]][
      secondCornerPair[0][2]
    ] == "green" &&
      aRc[secondCornerPair[1][0]][secondCornerPair[1][1]][
        secondCornerPair[1][2]
      ] == "orange" &&
      aRc[secondCornerPair[2][0]][secondCornerPair[2][1]][
        secondCornerPair[2][2]
      ] == "white") ||
    (aRc[secondCornerPair[0][0]][secondCornerPair[0][1]][
      secondCornerPair[0][2]
    ] == "green" &&
      aRc[secondCornerPair[1][0]][secondCornerPair[1][1]][
        secondCornerPair[1][2]
      ] == "white" &&
      aRc[secondCornerPair[2][0]][secondCornerPair[2][1]][
        secondCornerPair[2][2]
      ] == "orange")
  ) {
    for (i = 0; i < 3; i++) {
      if (
        aRc[secondCornerPair[i][0]][secondCornerPair[i][1]][
          secondCornerPair[i][2]
        ] == "white"
      ) {
        Array.prototype.push.apply(whiteOrangeGreenCorner, secondCornerPair[i]);
      }
    }
  }

  if (
    (aRc[thirdCornerPair[0][0]][thirdCornerPair[0][1]][thirdCornerPair[0][2]] ==
      "white" &&
      aRc[thirdCornerPair[1][0]][thirdCornerPair[1][1]][
        thirdCornerPair[1][2]
      ] == "orange" &&
      aRc[thirdCornerPair[2][0]][thirdCornerPair[2][1]][
        thirdCornerPair[2][2]
      ] == "green") ||
    (aRc[thirdCornerPair[0][0]][thirdCornerPair[0][1]][thirdCornerPair[0][2]] ==
      "white" &&
      aRc[thirdCornerPair[1][0]][thirdCornerPair[1][1]][
        thirdCornerPair[1][2]
      ] == "green" &&
      aRc[thirdCornerPair[2][0]][thirdCornerPair[2][1]][
        thirdCornerPair[2][2]
      ] == "orange") ||
    (aRc[thirdCornerPair[0][0]][thirdCornerPair[0][1]][thirdCornerPair[0][2]] ==
      "orange" &&
      aRc[thirdCornerPair[1][0]][thirdCornerPair[1][1]][
        thirdCornerPair[1][2]
      ] == "white" &&
      aRc[thirdCornerPair[2][0]][thirdCornerPair[2][1]][
        thirdCornerPair[2][2]
      ] == "green") ||
    (aRc[thirdCornerPair[0][0]][thirdCornerPair[0][1]][thirdCornerPair[0][2]] ==
      "orange" &&
      aRc[thirdCornerPair[1][0]][thirdCornerPair[1][1]][
        thirdCornerPair[1][2]
      ] == "green" &&
      aRc[thirdCornerPair[2][0]][thirdCornerPair[2][1]][
        thirdCornerPair[2][2]
      ] == "white") ||
    (aRc[thirdCornerPair[0][0]][thirdCornerPair[0][1]][thirdCornerPair[0][2]] ==
      "green" &&
      aRc[thirdCornerPair[1][0]][thirdCornerPair[1][1]][
        thirdCornerPair[1][2]
      ] == "orange" &&
      aRc[thirdCornerPair[2][0]][thirdCornerPair[2][1]][
        thirdCornerPair[2][2]
      ] == "white") ||
    (aRc[thirdCornerPair[0][0]][thirdCornerPair[0][1]][thirdCornerPair[0][2]] ==
      "green" &&
      aRc[thirdCornerPair[1][0]][thirdCornerPair[1][1]][
        thirdCornerPair[1][2]
      ] == "white" &&
      aRc[thirdCornerPair[2][0]][thirdCornerPair[2][1]][
        thirdCornerPair[2][2]
      ] == "orange")
  ) {
    for (i = 0; i < 3; i++) {
      if (
        aRc[thirdCornerPair[i][0]][thirdCornerPair[i][1]][
          thirdCornerPair[i][2]
        ] == "white"
      ) {
        Array.prototype.push.apply(whiteOrangeGreenCorner, thirdCornerPair[i]);
      }
    }
  }

  if (
    (aRc[fourthCornerPair[0][0]][fourthCornerPair[0][1]][
      fourthCornerPair[0][2]
    ] == "white" &&
      aRc[fourthCornerPair[1][0]][fourthCornerPair[1][1]][
        fourthCornerPair[1][2]
      ] == "orange" &&
      aRc[fourthCornerPair[2][0]][fourthCornerPair[2][1]][
        fourthCornerPair[2][2]
      ] == "green") ||
    (aRc[fourthCornerPair[0][0]][fourthCornerPair[0][1]][
      fourthCornerPair[0][2]
    ] == "white" &&
      aRc[fourthCornerPair[1][0]][fourthCornerPair[1][1]][
        fourthCornerPair[1][2]
      ] == "green" &&
      aRc[fourthCornerPair[2][0]][fourthCornerPair[2][1]][
        fourthCornerPair[2][2]
      ] == "orange") ||
    (aRc[fourthCornerPair[0][0]][fourthCornerPair[0][1]][
      fourthCornerPair[0][2]
    ] == "orange" &&
      aRc[fourthCornerPair[1][0]][fourthCornerPair[1][1]][
        fourthCornerPair[1][2]
      ] == "white" &&
      aRc[fourthCornerPair[2][0]][fourthCornerPair[2][1]][
        fourthCornerPair[2][2]
      ] == "green") ||
    (aRc[fourthCornerPair[0][0]][fourthCornerPair[0][1]][
      fourthCornerPair[0][2]
    ] == "orange" &&
      aRc[fourthCornerPair[1][0]][fourthCornerPair[1][1]][
        fourthCornerPair[1][2]
      ] == "green" &&
      aRc[fourthCornerPair[2][0]][fourthCornerPair[2][1]][
        fourthCornerPair[2][2]
      ] == "white") ||
    (aRc[fourthCornerPair[0][0]][fourthCornerPair[0][1]][
      fourthCornerPair[0][2]
    ] == "green" &&
      aRc[fourthCornerPair[1][0]][fourthCornerPair[1][1]][
        fourthCornerPair[1][2]
      ] == "orange" &&
      aRc[fourthCornerPair[2][0]][fourthCornerPair[2][1]][
        fourthCornerPair[2][2]
      ] == "white") ||
    (aRc[fourthCornerPair[0][0]][fourthCornerPair[0][1]][
      fourthCornerPair[0][2]
    ] == "green" &&
      aRc[fourthCornerPair[1][0]][fourthCornerPair[1][1]][
        fourthCornerPair[1][2]
      ] == "white" &&
      aRc[fourthCornerPair[2][0]][fourthCornerPair[2][1]][
        fourthCornerPair[2][2]
      ] == "orange")
  ) {
    for (i = 0; i < 3; i++) {
      if (
        aRc[fourthCornerPair[i][0]][fourthCornerPair[i][1]][
          fourthCornerPair[i][2]
        ] == "white"
      ) {
        Array.prototype.push.apply(whiteOrangeGreenCorner, fourthCornerPair[i]);
      }
    }
  }

  //whiteOrangeGreenCorner
  if (JSON.stringify(whiteOrangeGreenCorner) !== JSON.stringify([3, 0, 0])) {
    //na rumeni ploskvi
    if (JSON.stringify(whiteOrangeGreenCorner) == JSON.stringify([1, 2, 0])) {
      R();
      U();
      U();
      RI();
      UI();

      BI();
      U();
      U();
      B();
    }
    if (JSON.stringify(whiteOrangeGreenCorner) == JSON.stringify([1, 2, 2])) {
      U();
      R();
      U();
      U();
      RI();
      UI();

      BI();
      U();
      U();
      B();
    }
    if (JSON.stringify(whiteOrangeGreenCorner) == JSON.stringify([1, 0, 0])) {
      UI();
      R();
      U();
      U();
      RI();
      UI();

      BI();
      U();
      U();
      B();
    }
    if (JSON.stringify(whiteOrangeGreenCorner) == JSON.stringify([1, 0, 2])) {
      U();
      U();
      R();
      U();
      U();
      RI();
      UI();

      BI();
      U();
      U();
      B();
    }

    //na spodnji vrstici
    if (JSON.stringify(whiteOrangeGreenCorner) == JSON.stringify([0, 2, 0])) {
      FI();
      UI();
      F();
      U();

      L();
      U();
      U();
      LI();
    }
    if (JSON.stringify(whiteOrangeGreenCorner) == JSON.stringify([5, 2, 0])) {
      R();
      U();
      RI();
      UI();

      BI();
      U();
      U();
      B();
    }
    if (JSON.stringify(whiteOrangeGreenCorner) == JSON.stringify([0, 0, 0])) {
      F();
      U();
      FI();
      UI();
      UI();

      BI();
      U();
      U();
      B();
    }
    if (JSON.stringify(whiteOrangeGreenCorner) == JSON.stringify([4, 0, 0])) {
      LI();
      UI();
      L();

      L();
      U();
      U();
      LI();
    }
    if (JSON.stringify(whiteOrangeGreenCorner) == JSON.stringify([2, 0, 2])) {
      BI();
      U();
      U();
      B();

      L();
      U();
      U();
      LI();
    }
    if (JSON.stringify(whiteOrangeGreenCorner) == JSON.stringify([4, 0, 2])) {
      L();
      U();
      U();
      LI();

      BI();
      U();
      U();
      B();
    }
    if (JSON.stringify(whiteOrangeGreenCorner) == JSON.stringify([5, 2, 2])) {
      RI();
      U();
      U();
      R();
      UI();

      L();
      U();
      U();
      LI();
    }
    if (JSON.stringify(whiteOrangeGreenCorner) == JSON.stringify([2, 2, 2])) {
      B();
      U();
      BI();

      BI();
      U();
      U();
      B();
    }

    //na zgornji vrstici
    if (JSON.stringify(whiteOrangeGreenCorner) == JSON.stringify([0, 0, 2])) {
      UI();

      BI();
      U();
      U();
      B();
    }
    if (JSON.stringify(whiteOrangeGreenCorner) == JSON.stringify([4, 2, 0])) {
      UI();

      L();
      U();
      U();
      LI();
    }

    if (JSON.stringify(whiteOrangeGreenCorner) == JSON.stringify([4, 2, 2])) {
      U();
      U();

      BI();
      U();
      U();
      B();
    }
    if (JSON.stringify(whiteOrangeGreenCorner) == JSON.stringify([2, 0, 0])) {
      U();
      U();

      L();
      U();
      U();
      LI();
    }
    if (JSON.stringify(whiteOrangeGreenCorner) == JSON.stringify([5, 0, 2])) {
      U();

      L();
      U();
      U();
      LI();
    }
    if (JSON.stringify(whiteOrangeGreenCorner) == JSON.stringify([2, 2, 0])) {
      U();

      BI();
      U();
      U();
      B();
    }

    //na beli ploskvi
    if (JSON.stringify(whiteOrangeGreenCorner) == JSON.stringify([3, 2, 2])) {
      R();
      U();
      RI();
      UI();

      L();
      U();
      U();
      LI();
    }
    if (JSON.stringify(whiteOrangeGreenCorner) == JSON.stringify([3, 2, 0])) {
      RI();
      U();
      U();
      R();
      UI();

      BI();
      U();
      U();
      B();
    }
    if (JSON.stringify(whiteOrangeGreenCorner) == JSON.stringify([3, 0, 2])) {
      LI();
      UI();
      L();

      BI();
      U();
      U();
      B();
    }

    //sestavljanje
    if (JSON.stringify(whiteOrangeGreenCorner) == JSON.stringify([0, 2, 2])) {
      L();
      U();
      U();
      LI();
    }
    if (JSON.stringify(whiteOrangeGreenCorner) == JSON.stringify([5, 0, 0])) {
      BI();
      U();
      U();
      B();
    }
  }

  const resultsCorners1 = [];
  const whiteOrangeBlueCorner = [];
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        if (
          aRc[i][j][k] == "white" &&
          (j + k === 0 || j + k === 2 || j + k === 4) &&
          !(j + k === 2 && j === k)
        ) {
          resultsCorners1.push([i, j, k]);
        }
      }
    }
  }

  const firstCornerPair1 = [];
  const secondCornerPair1 = [];
  const thirdCornerPair1 = [];
  const fourthCornerPair1 = [];

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 3; j++) {
      if (
        JSON.stringify(resultsCorners1[0]) === JSON.stringify(cornerPairs[i][j])
      ) {
        Array.prototype.push.apply(firstCornerPair1, cornerPairs[i]);
      }
      if (
        JSON.stringify(resultsCorners1[1]) === JSON.stringify(cornerPairs[i][j])
      ) {
        Array.prototype.push.apply(secondCornerPair1, cornerPairs[i]);
      }
      if (
        JSON.stringify(resultsCorners1[2]) === JSON.stringify(cornerPairs[i][j])
      ) {
        Array.prototype.push.apply(thirdCornerPair1, cornerPairs[i]);
      }
      if (
        JSON.stringify(resultsCorners1[3]) === JSON.stringify(cornerPairs[i][j])
      ) {
        Array.prototype.push.apply(fourthCornerPair1, cornerPairs[i]);
      }
    }
  }

  //whiteOrangeBlueCorner
  if (
    (aRc[firstCornerPair1[0][0]][firstCornerPair1[0][1]][
      firstCornerPair1[0][2]
    ] == "white" &&
      aRc[firstCornerPair1[1][0]][firstCornerPair1[1][1]][
        firstCornerPair1[1][2]
      ] == "orange" &&
      aRc[firstCornerPair1[2][0]][firstCornerPair1[2][1]][
        firstCornerPair1[2][2]
      ] == "blue") ||
    (aRc[firstCornerPair1[0][0]][firstCornerPair1[0][1]][
      firstCornerPair1[0][2]
    ] == "white" &&
      aRc[firstCornerPair1[1][0]][firstCornerPair1[1][1]][
        firstCornerPair1[1][2]
      ] == "blue" &&
      aRc[firstCornerPair1[2][0]][firstCornerPair1[2][1]][
        firstCornerPair1[2][2]
      ] == "orange") ||
    (aRc[firstCornerPair1[0][0]][firstCornerPair1[0][1]][
      firstCornerPair1[0][2]
    ] == "orange" &&
      aRc[firstCornerPair1[1][0]][firstCornerPair1[1][1]][
        firstCornerPair1[1][2]
      ] == "white" &&
      aRc[firstCornerPair1[2][0]][firstCornerPair1[2][1]][
        firstCornerPair1[2][2]
      ] == "blue") ||
    (aRc[firstCornerPair1[0][0]][firstCornerPair1[0][1]][
      firstCornerPair1[0][2]
    ] == "orange" &&
      aRc[firstCornerPair1[1][0]][firstCornerPair1[1][1]][
        firstCornerPair1[1][2]
      ] == "blue" &&
      aRc[firstCornerPair1[2][0]][firstCornerPair1[2][1]][
        firstCornerPair1[2][2]
      ] == "white") ||
    (aRc[firstCornerPair1[0][0]][firstCornerPair1[0][1]][
      firstCornerPair1[0][2]
    ] == "blue" &&
      aRc[firstCornerPair1[1][0]][firstCornerPair1[1][1]][
        firstCornerPair1[1][2]
      ] == "orange" &&
      aRc[firstCornerPair1[2][0]][firstCornerPair1[2][1]][
        firstCornerPair1[2][2]
      ] == "white") ||
    (aRc[firstCornerPair1[0][0]][firstCornerPair1[0][1]][
      firstCornerPair1[0][2]
    ] == "blue" &&
      aRc[firstCornerPair1[1][0]][firstCornerPair1[1][1]][
        firstCornerPair1[1][2]
      ] == "white" &&
      aRc[firstCornerPair1[2][0]][firstCornerPair1[2][1]][
        firstCornerPair1[2][2]
      ] == "orange")
  ) {
    for (i = 0; i < 3; i++) {
      if (
        aRc[firstCornerPair1[i][0]][firstCornerPair1[i][1]][
          firstCornerPair1[i][2]
        ] == "white"
      ) {
        Array.prototype.push.apply(whiteOrangeBlueCorner, firstCornerPair1[i]);
      }
    }
  }

  if (
    (aRc[secondCornerPair1[0][0]][secondCornerPair1[0][1]][
      secondCornerPair1[0][2]
    ] == "white" &&
      aRc[secondCornerPair1[1][0]][secondCornerPair1[1][1]][
        secondCornerPair1[1][2]
      ] == "orange" &&
      aRc[secondCornerPair1[2][0]][secondCornerPair1[2][1]][
        secondCornerPair1[2][2]
      ] == "blue") ||
    (aRc[secondCornerPair1[0][0]][secondCornerPair1[0][1]][
      secondCornerPair1[0][2]
    ] == "white" &&
      aRc[secondCornerPair1[1][0]][secondCornerPair1[1][1]][
        secondCornerPair1[1][2]
      ] == "blue" &&
      aRc[secondCornerPair1[2][0]][secondCornerPair1[2][1]][
        secondCornerPair1[2][2]
      ] == "orange") ||
    (aRc[secondCornerPair1[0][0]][secondCornerPair1[0][1]][
      secondCornerPair1[0][2]
    ] == "orange" &&
      aRc[secondCornerPair1[1][0]][secondCornerPair1[1][1]][
        secondCornerPair1[1][2]
      ] == "white" &&
      aRc[secondCornerPair1[2][0]][secondCornerPair1[2][1]][
        secondCornerPair1[2][2]
      ] == "blue") ||
    (aRc[secondCornerPair1[0][0]][secondCornerPair1[0][1]][
      secondCornerPair1[0][2]
    ] == "orange" &&
      aRc[secondCornerPair1[1][0]][secondCornerPair1[1][1]][
        secondCornerPair1[1][2]
      ] == "blue" &&
      aRc[secondCornerPair1[2][0]][secondCornerPair1[2][1]][
        secondCornerPair1[2][2]
      ] == "white") ||
    (aRc[secondCornerPair1[0][0]][secondCornerPair1[0][1]][
      secondCornerPair1[0][2]
    ] == "blue" &&
      aRc[secondCornerPair1[1][0]][secondCornerPair1[1][1]][
        secondCornerPair1[1][2]
      ] == "orange" &&
      aRc[secondCornerPair1[2][0]][secondCornerPair1[2][1]][
        secondCornerPair1[2][2]
      ] == "white") ||
    (aRc[secondCornerPair1[0][0]][secondCornerPair1[0][1]][
      secondCornerPair1[0][2]
    ] == "blue" &&
      aRc[secondCornerPair1[1][0]][secondCornerPair1[1][1]][
        secondCornerPair1[1][2]
      ] == "white" &&
      aRc[secondCornerPair1[2][0]][secondCornerPair1[2][1]][
        secondCornerPair1[2][2]
      ] == "orange")
  ) {
    for (i = 0; i < 3; i++) {
      if (
        aRc[secondCornerPair1[i][0]][secondCornerPair1[i][1]][
          secondCornerPair1[i][2]
        ] == "white"
      ) {
        Array.prototype.push.apply(whiteOrangeBlueCorner, secondCornerPair1[i]);
      }
    }
  }

  if (
    (aRc[thirdCornerPair1[0][0]][thirdCornerPair1[0][1]][
      thirdCornerPair1[0][2]
    ] == "white" &&
      aRc[thirdCornerPair1[1][0]][thirdCornerPair1[1][1]][
        thirdCornerPair1[1][2]
      ] == "orange" &&
      aRc[thirdCornerPair1[2][0]][thirdCornerPair1[2][1]][
        thirdCornerPair1[2][2]
      ] == "blue") ||
    (aRc[thirdCornerPair1[0][0]][thirdCornerPair1[0][1]][
      thirdCornerPair1[0][2]
    ] == "white" &&
      aRc[thirdCornerPair1[1][0]][thirdCornerPair1[1][1]][
        thirdCornerPair1[1][2]
      ] == "blue" &&
      aRc[thirdCornerPair1[2][0]][thirdCornerPair1[2][1]][
        thirdCornerPair1[2][2]
      ] == "orange") ||
    (aRc[thirdCornerPair1[0][0]][thirdCornerPair1[0][1]][
      thirdCornerPair1[0][2]
    ] == "orange" &&
      aRc[thirdCornerPair1[1][0]][thirdCornerPair1[1][1]][
        thirdCornerPair1[1][2]
      ] == "white" &&
      aRc[thirdCornerPair1[2][0]][thirdCornerPair1[2][1]][
        thirdCornerPair1[2][2]
      ] == "blue") ||
    (aRc[thirdCornerPair1[0][0]][thirdCornerPair1[0][1]][
      thirdCornerPair1[0][2]
    ] == "orange" &&
      aRc[thirdCornerPair1[1][0]][thirdCornerPair1[1][1]][
        thirdCornerPair1[1][2]
      ] == "blue" &&
      aRc[thirdCornerPair1[2][0]][thirdCornerPair1[2][1]][
        thirdCornerPair1[2][2]
      ] == "white") ||
    (aRc[thirdCornerPair1[0][0]][thirdCornerPair1[0][1]][
      thirdCornerPair1[0][2]
    ] == "blue" &&
      aRc[thirdCornerPair1[1][0]][thirdCornerPair1[1][1]][
        thirdCornerPair1[1][2]
      ] == "orange" &&
      aRc[thirdCornerPair1[2][0]][thirdCornerPair1[2][1]][
        thirdCornerPair1[2][2]
      ] == "white") ||
    (aRc[thirdCornerPair1[0][0]][thirdCornerPair1[0][1]][
      thirdCornerPair1[0][2]
    ] == "blue" &&
      aRc[thirdCornerPair1[1][0]][thirdCornerPair1[1][1]][
        thirdCornerPair1[1][2]
      ] == "white" &&
      aRc[thirdCornerPair1[2][0]][thirdCornerPair1[2][1]][
        thirdCornerPair1[2][2]
      ] == "orange")
  ) {
    for (i = 0; i < 3; i++) {
      if (
        aRc[thirdCornerPair1[i][0]][thirdCornerPair1[i][1]][
          thirdCornerPair1[i][2]
        ] == "white"
      ) {
        Array.prototype.push.apply(whiteOrangeBlueCorner, thirdCornerPair1[i]);
      }
    }
  }

  if (
    (aRc[fourthCornerPair1[0][0]][fourthCornerPair1[0][1]][
      fourthCornerPair1[0][2]
    ] == "white" &&
      aRc[fourthCornerPair1[1][0]][fourthCornerPair1[1][1]][
        fourthCornerPair1[1][2]
      ] == "orange" &&
      aRc[fourthCornerPair1[2][0]][fourthCornerPair1[2][1]][
        fourthCornerPair1[2][2]
      ] == "blue") ||
    (aRc[fourthCornerPair1[0][0]][fourthCornerPair1[0][1]][
      fourthCornerPair1[0][2]
    ] == "white" &&
      aRc[fourthCornerPair1[1][0]][fourthCornerPair1[1][1]][
        fourthCornerPair1[1][2]
      ] == "blue" &&
      aRc[fourthCornerPair1[2][0]][fourthCornerPair1[2][1]][
        fourthCornerPair1[2][2]
      ] == "orange") ||
    (aRc[fourthCornerPair1[0][0]][fourthCornerPair1[0][1]][
      fourthCornerPair1[0][2]
    ] == "orange" &&
      aRc[fourthCornerPair1[1][0]][fourthCornerPair1[1][1]][
        fourthCornerPair1[1][2]
      ] == "white" &&
      aRc[fourthCornerPair1[2][0]][fourthCornerPair1[2][1]][
        fourthCornerPair1[2][2]
      ] == "blue") ||
    (aRc[fourthCornerPair1[0][0]][fourthCornerPair1[0][1]][
      fourthCornerPair1[0][2]
    ] == "orange" &&
      aRc[fourthCornerPair1[1][0]][fourthCornerPair1[1][1]][
        fourthCornerPair1[1][2]
      ] == "blue" &&
      aRc[fourthCornerPair1[2][0]][fourthCornerPair1[2][1]][
        fourthCornerPair1[2][2]
      ] == "white") ||
    (aRc[fourthCornerPair1[0][0]][fourthCornerPair1[0][1]][
      fourthCornerPair1[0][2]
    ] == "blue" &&
      aRc[fourthCornerPair1[1][0]][fourthCornerPair1[1][1]][
        fourthCornerPair1[1][2]
      ] == "orange" &&
      aRc[fourthCornerPair1[2][0]][fourthCornerPair1[2][1]][
        fourthCornerPair1[2][2]
      ] == "white") ||
    (aRc[fourthCornerPair1[0][0]][fourthCornerPair1[0][1]][
      fourthCornerPair1[0][2]
    ] == "blue" &&
      aRc[fourthCornerPair1[1][0]][fourthCornerPair1[1][1]][
        fourthCornerPair1[1][2]
      ] == "white" &&
      aRc[fourthCornerPair1[2][0]][fourthCornerPair1[2][1]][
        fourthCornerPair1[2][2]
      ] == "orange")
  ) {
    for (i = 0; i < 3; i++) {
      if (
        aRc[fourthCornerPair1[i][0]][fourthCornerPair1[i][1]][
          fourthCornerPair1[i][2]
        ] == "white"
      ) {
        Array.prototype.push.apply(whiteOrangeBlueCorner, fourthCornerPair1[i]);
      }
    }
  }

  //whiteOrangeBlueCorner
  if (JSON.stringify(whiteOrangeBlueCorner) !== JSON.stringify([3, 0, 2])) {
    //na rumeni ploskvi
    if (JSON.stringify(whiteOrangeBlueCorner) == JSON.stringify([1, 2, 0])) {
      R();
      U();
      U();
      RI();
      UI();

      LI();
      U();
      L();
    }
    if (JSON.stringify(whiteOrangeBlueCorner) == JSON.stringify([1, 2, 2])) {
      U();
      R();
      U();
      U();
      RI();
      UI();

      LI();
      U();
      L();
    }
    if (JSON.stringify(whiteOrangeBlueCorner) == JSON.stringify([1, 0, 0])) {
      UI();
      R();
      U();
      U();
      RI();
      UI();

      LI();
      U();
      L();
    }
    if (JSON.stringify(whiteOrangeBlueCorner) == JSON.stringify([1, 0, 2])) {
      U();
      U();
      R();
      U();
      U();
      RI();
      UI();

      LI();
      U();
      L();
    }

    //na spodnji vrstici
    if (JSON.stringify(whiteOrangeBlueCorner) == JSON.stringify([0, 2, 0])) {
      FI();
      UI();
      F();
      U();

      U();
      U();
      F();
      UI();
      FI();
    }
    if (JSON.stringify(whiteOrangeBlueCorner) == JSON.stringify([5, 2, 0])) {
      R();
      U();
      RI();
      UI();

      LI();
      U();
      L();
    }
    if (JSON.stringify(whiteOrangeBlueCorner) == JSON.stringify([0, 0, 0])) {
      F();
      U();
      FI();
      UI();
      UI();

      LI();
      U();
      L();
    }
    if (JSON.stringify(whiteOrangeBlueCorner) == JSON.stringify([4, 0, 0])) {
      LI();
      UI();
      L();

      U();
      U();
      F();
      UI();
      FI();
    }
    if (JSON.stringify(whiteOrangeBlueCorner) == JSON.stringify([2, 0, 2])) {
      BI();
      U();
      U();
      B();

      U();
      U();
      F();
      UI();
      FI();
    }
    if (JSON.stringify(whiteOrangeBlueCorner) == JSON.stringify([4, 0, 2])) {
      L();
      U();
      U();
      LI();

      LI();
      U();
      L();
    }
    if (JSON.stringify(whiteOrangeBlueCorner) == JSON.stringify([5, 2, 2])) {
      RI();
      U();
      U();
      R();
      UI();

      U();
      U();
      F();
      UI();
      FI();
    }
    if (JSON.stringify(whiteOrangeBlueCorner) == JSON.stringify([2, 2, 2])) {
      B();
      U();
      BI();

      LI();
      U();
      L();
    }

    //na zgornji vrstici
    if (JSON.stringify(whiteOrangeBlueCorner) == JSON.stringify([0, 0, 2])) {
      UI();

      LI();
      U();
      L();
    }
    if (JSON.stringify(whiteOrangeBlueCorner) == JSON.stringify([4, 2, 0])) {
      UI();

      U();
      U();
      F();
      UI();
      FI();
    }
    if (JSON.stringify(whiteOrangeBlueCorner) == JSON.stringify([4, 2, 2])) {
      U();
      U();

      LI();
      U();
      L();
    }
    if (JSON.stringify(whiteOrangeBlueCorner) == JSON.stringify([2, 0, 0])) {
      U();
      U();

      U();
      U();
      F();
      UI();
      FI();
    }
    if (JSON.stringify(whiteOrangeBlueCorner) == JSON.stringify([5, 0, 2])) {
      U();

      U();
      U();
      F();
      UI();
      FI();
    }
    if (JSON.stringify(whiteOrangeBlueCorner) == JSON.stringify([2, 2, 0])) {
      U();

      LI();
      U();
      L();
    }

    //na beli ploskvi
    if (JSON.stringify(whiteOrangeBlueCorner) == JSON.stringify([3, 2, 2])) {
      R();
      U();
      RI();
      UI();

      U();
      U();
      F();
      UI();
      FI();
    }
    if (JSON.stringify(whiteOrangeBlueCorner) == JSON.stringify([3, 2, 0])) {
      RI();
      U();
      U();
      R();
      UI();

      LI();
      U();
      L();
    }
    if (JSON.stringify(whiteOrangeBlueCorner) == JSON.stringify([3, 0, 0])) {
      L();
      U();
      U();
      LI();

      U();
      U();
      F();
      UI();
      FI();
    }

    //sestavljanje
    if (JSON.stringify(whiteOrangeBlueCorner) == JSON.stringify([0, 2, 2])) {
      U();
      U();
      F();
      UI();
      FI();
    }
    if (JSON.stringify(whiteOrangeBlueCorner) == JSON.stringify([5, 0, 0])) {
      LI();
      U();
      L();
    }
  }

  const resultsCorners2 = [];
  const whiteRedGreenCorner = [];
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        if (
          aRc[i][j][k] == "white" &&
          (j + k === 0 || j + k === 2 || j + k === 4) &&
          !(j + k === 2 && j === k)
        ) {
          resultsCorners2.push([i, j, k]);
        }
      }
    }
  }
  const firstCornerPair2 = [];
  const secondCornerPair2 = [];
  const thirdCornerPair2 = [];
  const fourthCornerPair2 = [];

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 3; j++) {
      if (
        JSON.stringify(resultsCorners2[0]) === JSON.stringify(cornerPairs[i][j])
      ) {
        Array.prototype.push.apply(firstCornerPair2, cornerPairs[i]);
      }
      if (
        JSON.stringify(resultsCorners2[1]) === JSON.stringify(cornerPairs[i][j])
      ) {
        Array.prototype.push.apply(secondCornerPair2, cornerPairs[i]);
      }
      if (
        JSON.stringify(resultsCorners2[2]) === JSON.stringify(cornerPairs[i][j])
      ) {
        Array.prototype.push.apply(thirdCornerPair2, cornerPairs[i]);
      }
      if (
        JSON.stringify(resultsCorners2[3]) === JSON.stringify(cornerPairs[i][j])
      ) {
        Array.prototype.push.apply(fourthCornerPair2, cornerPairs[i]);
      }
    }
  }

  //whiteRedGreenCorner
  if (
    (aRc[firstCornerPair2[0][0]][firstCornerPair2[0][1]][
      firstCornerPair2[0][2]
    ] == "white" &&
      aRc[firstCornerPair2[1][0]][firstCornerPair2[1][1]][
        firstCornerPair2[1][2]
      ] == "red" &&
      aRc[firstCornerPair2[2][0]][firstCornerPair2[2][1]][
        firstCornerPair2[2][2]
      ] == "green") ||
    (aRc[firstCornerPair2[0][0]][firstCornerPair2[0][1]][
      firstCornerPair2[0][2]
    ] == "white" &&
      aRc[firstCornerPair2[1][0]][firstCornerPair2[1][1]][
        firstCornerPair2[1][2]
      ] == "green" &&
      aRc[firstCornerPair2[2][0]][firstCornerPair2[2][1]][
        firstCornerPair2[2][2]
      ] == "red") ||
    (aRc[firstCornerPair2[0][0]][firstCornerPair2[0][1]][
      firstCornerPair2[0][2]
    ] == "red" &&
      aRc[firstCornerPair2[1][0]][firstCornerPair2[1][1]][
        firstCornerPair2[1][2]
      ] == "white" &&
      aRc[firstCornerPair2[2][0]][firstCornerPair2[2][1]][
        firstCornerPair2[2][2]
      ] == "green") ||
    (aRc[firstCornerPair2[0][0]][firstCornerPair2[0][1]][
      firstCornerPair2[0][2]
    ] == "red" &&
      aRc[firstCornerPair2[1][0]][firstCornerPair2[1][1]][
        firstCornerPair2[1][2]
      ] == "green" &&
      aRc[firstCornerPair2[2][0]][firstCornerPair2[2][1]][
        firstCornerPair2[2][2]
      ] == "white") ||
    (aRc[firstCornerPair2[0][0]][firstCornerPair2[0][1]][
      firstCornerPair2[0][2]
    ] == "green" &&
      aRc[firstCornerPair2[1][0]][firstCornerPair2[1][1]][
        firstCornerPair2[1][2]
      ] == "red" &&
      aRc[firstCornerPair2[2][0]][firstCornerPair2[2][1]][
        firstCornerPair2[2][2]
      ] == "white") ||
    (aRc[firstCornerPair2[0][0]][firstCornerPair2[0][1]][
      firstCornerPair2[0][2]
    ] == "green" &&
      aRc[firstCornerPair2[1][0]][firstCornerPair2[1][1]][
        firstCornerPair2[1][2]
      ] == "white" &&
      aRc[firstCornerPair2[2][0]][firstCornerPair2[2][1]][
        firstCornerPair2[2][2]
      ] == "red")
  ) {
    for (i = 0; i < 3; i++) {
      if (
        aRc[firstCornerPair2[i][0]][firstCornerPair2[i][1]][
          firstCornerPair2[i][2]
        ] == "white"
      ) {
        Array.prototype.push.apply(whiteRedGreenCorner, firstCornerPair2[i]);
      }
    }
  }

  if (
    (aRc[secondCornerPair2[0][0]][secondCornerPair2[0][1]][
      secondCornerPair2[0][2]
    ] == "white" &&
      aRc[secondCornerPair2[1][0]][secondCornerPair2[1][1]][
        secondCornerPair2[1][2]
      ] == "red" &&
      aRc[secondCornerPair2[2][0]][secondCornerPair2[2][1]][
        secondCornerPair2[2][2]
      ] == "green") ||
    (aRc[secondCornerPair2[0][0]][secondCornerPair2[0][1]][
      secondCornerPair2[0][2]
    ] == "white" &&
      aRc[secondCornerPair2[1][0]][secondCornerPair2[1][1]][
        secondCornerPair2[1][2]
      ] == "green" &&
      aRc[secondCornerPair2[2][0]][secondCornerPair2[2][1]][
        secondCornerPair2[2][2]
      ] == "red") ||
    (aRc[secondCornerPair2[0][0]][secondCornerPair2[0][1]][
      secondCornerPair2[0][2]
    ] == "red" &&
      aRc[secondCornerPair2[1][0]][secondCornerPair2[1][1]][
        secondCornerPair2[1][2]
      ] == "white" &&
      aRc[secondCornerPair2[2][0]][secondCornerPair2[2][1]][
        secondCornerPair2[2][2]
      ] == "green") ||
    (aRc[secondCornerPair2[0][0]][secondCornerPair2[0][1]][
      secondCornerPair2[0][2]
    ] == "red" &&
      aRc[secondCornerPair2[1][0]][secondCornerPair2[1][1]][
        secondCornerPair2[1][2]
      ] == "green" &&
      aRc[secondCornerPair2[2][0]][secondCornerPair2[2][1]][
        secondCornerPair2[2][2]
      ] == "white") ||
    (aRc[secondCornerPair2[0][0]][secondCornerPair2[0][1]][
      secondCornerPair2[0][2]
    ] == "green" &&
      aRc[secondCornerPair2[1][0]][secondCornerPair2[1][1]][
        secondCornerPair2[1][2]
      ] == "red" &&
      aRc[secondCornerPair2[2][0]][secondCornerPair2[2][1]][
        secondCornerPair2[2][2]
      ] == "white") ||
    (aRc[secondCornerPair2[0][0]][secondCornerPair2[0][1]][
      secondCornerPair2[0][2]
    ] == "green" &&
      aRc[secondCornerPair2[1][0]][secondCornerPair2[1][1]][
        secondCornerPair2[1][2]
      ] == "white" &&
      aRc[secondCornerPair2[2][0]][secondCornerPair2[2][1]][
        secondCornerPair2[2][2]
      ] == "red")
  ) {
    for (i = 0; i < 3; i++) {
      if (
        aRc[secondCornerPair2[i][0]][secondCornerPair2[i][1]][
          secondCornerPair2[i][2]
        ] == "white"
      ) {
        Array.prototype.push.apply(whiteRedGreenCorner, secondCornerPair2[i]);
      }
    }
  }

  if (
    (aRc[thirdCornerPair2[0][0]][thirdCornerPair2[0][1]][
      thirdCornerPair2[0][2]
    ] == "white" &&
      aRc[thirdCornerPair2[1][0]][thirdCornerPair2[1][1]][
        thirdCornerPair2[1][2]
      ] == "red" &&
      aRc[thirdCornerPair2[2][0]][thirdCornerPair2[2][1]][
        thirdCornerPair2[2][2]
      ] == "green") ||
    (aRc[thirdCornerPair2[0][0]][thirdCornerPair2[0][1]][
      thirdCornerPair2[0][2]
    ] == "white" &&
      aRc[thirdCornerPair2[1][0]][thirdCornerPair2[1][1]][
        thirdCornerPair2[1][2]
      ] == "green" &&
      aRc[thirdCornerPair2[2][0]][thirdCornerPair2[2][1]][
        thirdCornerPair2[2][2]
      ] == "red") ||
    (aRc[thirdCornerPair2[0][0]][thirdCornerPair2[0][1]][
      thirdCornerPair2[0][2]
    ] == "red" &&
      aRc[thirdCornerPair2[1][0]][thirdCornerPair2[1][1]][
        thirdCornerPair2[1][2]
      ] == "white" &&
      aRc[thirdCornerPair2[2][0]][thirdCornerPair2[2][1]][
        thirdCornerPair2[2][2]
      ] == "green") ||
    (aRc[thirdCornerPair2[0][0]][thirdCornerPair2[0][1]][
      thirdCornerPair2[0][2]
    ] == "red" &&
      aRc[thirdCornerPair2[1][0]][thirdCornerPair2[1][1]][
        thirdCornerPair2[1][2]
      ] == "green" &&
      aRc[thirdCornerPair2[2][0]][thirdCornerPair2[2][1]][
        thirdCornerPair2[2][2]
      ] == "white") ||
    (aRc[thirdCornerPair2[0][0]][thirdCornerPair2[0][1]][
      thirdCornerPair2[0][2]
    ] == "green" &&
      aRc[thirdCornerPair2[1][0]][thirdCornerPair2[1][1]][
        thirdCornerPair2[1][2]
      ] == "red" &&
      aRc[thirdCornerPair2[2][0]][thirdCornerPair2[2][1]][
        thirdCornerPair2[2][2]
      ] == "white") ||
    (aRc[thirdCornerPair2[0][0]][thirdCornerPair2[0][1]][
      thirdCornerPair2[0][2]
    ] == "green" &&
      aRc[thirdCornerPair2[1][0]][thirdCornerPair2[1][1]][
        thirdCornerPair2[1][2]
      ] == "white" &&
      aRc[thirdCornerPair2[2][0]][thirdCornerPair2[2][1]][
        thirdCornerPair2[2][2]
      ] == "red")
  ) {
    for (i = 0; i < 3; i++) {
      if (
        aRc[thirdCornerPair2[i][0]][thirdCornerPair2[i][1]][
          thirdCornerPair2[i][2]
        ] == "white"
      ) {
        Array.prototype.push.apply(whiteRedGreenCorner, thirdCornerPair2[i]);
      }
    }
  }

  if (
    (aRc[fourthCornerPair2[0][0]][fourthCornerPair2[0][1]][
      fourthCornerPair2[0][2]
    ] == "white" &&
      aRc[fourthCornerPair2[1][0]][fourthCornerPair2[1][1]][
        fourthCornerPair2[1][2]
      ] == "red" &&
      aRc[fourthCornerPair2[2][0]][fourthCornerPair2[2][1]][
        fourthCornerPair2[2][2]
      ] == "green") ||
    (aRc[fourthCornerPair2[0][0]][fourthCornerPair2[0][1]][
      fourthCornerPair2[0][2]
    ] == "white" &&
      aRc[fourthCornerPair2[1][0]][fourthCornerPair2[1][1]][
        fourthCornerPair2[1][2]
      ] == "green" &&
      aRc[fourthCornerPair2[2][0]][fourthCornerPair2[2][1]][
        fourthCornerPair2[2][2]
      ] == "red") ||
    (aRc[fourthCornerPair2[0][0]][fourthCornerPair2[0][1]][
      fourthCornerPair2[0][2]
    ] == "red" &&
      aRc[fourthCornerPair2[1][0]][fourthCornerPair2[1][1]][
        fourthCornerPair2[1][2]
      ] == "white" &&
      aRc[fourthCornerPair2[2][0]][fourthCornerPair2[2][1]][
        fourthCornerPair2[2][2]
      ] == "green") ||
    (aRc[fourthCornerPair2[0][0]][fourthCornerPair2[0][1]][
      fourthCornerPair2[0][2]
    ] == "red" &&
      aRc[fourthCornerPair2[1][0]][fourthCornerPair2[1][1]][
        fourthCornerPair2[1][2]
      ] == "green" &&
      aRc[fourthCornerPair2[2][0]][fourthCornerPair2[2][1]][
        fourthCornerPair2[2][2]
      ] == "white") ||
    (aRc[fourthCornerPair2[0][0]][fourthCornerPair2[0][1]][
      fourthCornerPair2[0][2]
    ] == "green" &&
      aRc[fourthCornerPair2[1][0]][fourthCornerPair2[1][1]][
        fourthCornerPair2[1][2]
      ] == "red" &&
      aRc[fourthCornerPair2[2][0]][fourthCornerPair2[2][1]][
        fourthCornerPair2[2][2]
      ] == "white") ||
    (aRc[fourthCornerPair2[0][0]][fourthCornerPair2[0][1]][
      fourthCornerPair2[0][2]
    ] == "green" &&
      aRc[fourthCornerPair2[1][0]][fourthCornerPair2[1][1]][
        fourthCornerPair2[1][2]
      ] == "white" &&
      aRc[fourthCornerPair2[2][0]][fourthCornerPair2[2][1]][
        fourthCornerPair2[2][2]
      ] == "red")
  ) {
    for (i = 0; i < 3; i++) {
      if (
        aRc[fourthCornerPair2[i][0]][fourthCornerPair2[i][1]][
          fourthCornerPair2[i][2]
        ] == "white"
      ) {
        Array.prototype.push.apply(whiteRedGreenCorner, fourthCornerPair2[i]);
      }
    }
  }

  //whiteRedGreenCorner
  if (JSON.stringify(whiteRedGreenCorner) !== JSON.stringify([3, 0, 2])) {
    //na rumeni ploskvi
    if (JSON.stringify(whiteRedGreenCorner) == JSON.stringify([1, 2, 0])) {
      R();
      U();
      U();
      RI();
      UI();

      U();
      RI();
      UI();
      UI();
      R();
    }
    if (JSON.stringify(whiteRedGreenCorner) == JSON.stringify([1, 2, 2])) {
      U();
      R();
      U();
      U();
      RI();
      UI();

      U();
      RI();
      UI();
      UI();
      R();
    }
    if (JSON.stringify(whiteRedGreenCorner) == JSON.stringify([1, 0, 0])) {
      UI();
      R();
      U();
      U();
      RI();
      UI();

      U();
      RI();
      UI();
      UI();
      R();
    }
    if (JSON.stringify(whiteRedGreenCorner) == JSON.stringify([1, 0, 2])) {
      U();
      U();
      R();
      U();
      U();
      RI();
      UI();

      U();
      RI();
      UI();
      UI();
      R();
    }

    //na spodnji vrstici
    if (JSON.stringify(whiteRedGreenCorner) == JSON.stringify([0, 2, 0])) {
      FI();
      UI();
      F();
      U();

      B();
      UI();
      BI();
    }
    if (JSON.stringify(whiteRedGreenCorner) == JSON.stringify([5, 2, 0])) {
      R();
      U();
      RI();
      UI();

      U();
      RI();
      UI();
      UI();
      R();
    }
    if (JSON.stringify(whiteRedGreenCorner) == JSON.stringify([0, 0, 0])) {
      F();
      U();
      FI();
      UI();
      UI();

      U();
      RI();
      UI();
      UI();
      R();
    }
    if (JSON.stringify(whiteRedGreenCorner) == JSON.stringify([4, 0, 0])) {
      LI();
      UI();
      L();

      B();
      UI();
      BI();
    }
    if (JSON.stringify(whiteRedGreenCorner) == JSON.stringify([2, 0, 2])) {
      BI();
      U();
      U();
      B();

      B();
      UI();
      BI();
    }
    if (JSON.stringify(whiteRedGreenCorner) == JSON.stringify([4, 0, 2])) {
      L();
      U();
      U();
      LI();

      U();
      RI();
      UI();
      UI();
      R();
    }
    if (JSON.stringify(whiteRedGreenCorner) == JSON.stringify([5, 2, 2])) {
      RI();
      U();
      U();
      R();
      UI();

      B();
      UI();
      BI();
    }
    if (JSON.stringify(whiteRedGreenCorner) == JSON.stringify([2, 2, 2])) {
      B();
      U();
      BI();

      U();
      RI();
      UI();
      UI();
      R();
    }

    //na zgornji vrstici
    if (JSON.stringify(whiteRedGreenCorner) == JSON.stringify([0, 0, 2])) {
      UI();

      U();
      RI();
      UI();
      UI();
      R();
    }
    if (JSON.stringify(whiteRedGreenCorner) == JSON.stringify([4, 2, 0])) {
      UI();

      B();
      UI();
      BI();
    }
    if (JSON.stringify(whiteRedGreenCorner) == JSON.stringify([4, 2, 2])) {
      U();
      U();

      U();
      RI();
      UI();
      UI();
      R();
    }
    if (JSON.stringify(whiteRedGreenCorner) == JSON.stringify([2, 0, 0])) {
      U();
      U();

      B();
      UI();
      BI();
    }
    if (JSON.stringify(whiteRedGreenCorner) == JSON.stringify([5, 0, 2])) {
      U();

      B();
      UI();
      BI();
    }
    if (JSON.stringify(whiteRedGreenCorner) == JSON.stringify([2, 2, 0])) {
      U();

      U();
      RI();
      UI();
      UI();
      R();
    }

    //na beli ploskvi
    if (JSON.stringify(whiteRedGreenCorner) == JSON.stringify([3, 2, 2])) {
      R();
      U();
      RI();
      UI();

      B();
      UI();
      BI();
    }
    if (JSON.stringify(whiteRedGreenCorner) == JSON.stringify([3, 0, 2])) {
      LI();
      UI();
      L();

      U();
      RI();
      UI();
      UI();
      R();
    }
    if (JSON.stringify(whiteRedGreenCorner) == JSON.stringify([3, 0, 0])) {
      L();
      U();
      U();
      LI();

      B();
      UI();
      BI();
    }

    //sestavljanje
    if (JSON.stringify(whiteRedGreenCorner) == JSON.stringify([0, 2, 2])) {
      B();
      UI();
      BI();
    }
    if (JSON.stringify(whiteRedGreenCorner) == JSON.stringify([5, 0, 0])) {
      U();
      RI();
      UI();
      UI();
      R();
    }
  }

  const resultsCorners3 = [];
  const whiteRedBlueCorner = [];
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        if (
          aRc[i][j][k] == "white" &&
          (j + k === 0 || j + k === 2 || j + k === 4) &&
          !(j + k === 2 && j === k)
        ) {
          resultsCorners3.push([i, j, k]);
        }
      }
    }
  }
  const firstCornerPair3 = [];
  const secondCornerPair3 = [];
  const thirdCornerPair3 = [];
  const fourthCornerPair3 = [];

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 3; j++) {
      if (
        JSON.stringify(resultsCorners3[0]) === JSON.stringify(cornerPairs[i][j])
      ) {
        Array.prototype.push.apply(firstCornerPair3, cornerPairs[i]);
      }
      if (
        JSON.stringify(resultsCorners3[1]) === JSON.stringify(cornerPairs[i][j])
      ) {
        Array.prototype.push.apply(secondCornerPair3, cornerPairs[i]);
      }
      if (
        JSON.stringify(resultsCorners3[2]) === JSON.stringify(cornerPairs[i][j])
      ) {
        Array.prototype.push.apply(thirdCornerPair3, cornerPairs[i]);
      }
      if (
        JSON.stringify(resultsCorners3[3]) === JSON.stringify(cornerPairs[i][j])
      ) {
        Array.prototype.push.apply(fourthCornerPair3, cornerPairs[i]);
      }
    }
  }

  //whiteRedBlueCorner
  if (
    (aRc[firstCornerPair3[0][0]][firstCornerPair3[0][1]][
      firstCornerPair3[0][2]
    ] == "white" &&
      aRc[firstCornerPair3[1][0]][firstCornerPair3[1][1]][
        firstCornerPair3[1][2]
      ] == "red" &&
      aRc[firstCornerPair3[2][0]][firstCornerPair3[2][1]][
        firstCornerPair3[2][2]
      ] == "blue") ||
    (aRc[firstCornerPair3[0][0]][firstCornerPair3[0][1]][
      firstCornerPair3[0][2]
    ] == "white" &&
      aRc[firstCornerPair3[1][0]][firstCornerPair3[1][1]][
        firstCornerPair3[1][2]
      ] == "blue" &&
      aRc[firstCornerPair3[2][0]][firstCornerPair3[2][1]][
        firstCornerPair3[2][2]
      ] == "red") ||
    (aRc[firstCornerPair3[0][0]][firstCornerPair3[0][1]][
      firstCornerPair3[0][2]
    ] == "red" &&
      aRc[firstCornerPair3[1][0]][firstCornerPair3[1][1]][
        firstCornerPair3[1][2]
      ] == "white" &&
      aRc[firstCornerPair3[2][0]][firstCornerPair3[2][1]][
        firstCornerPair3[2][2]
      ] == "blue") ||
    (aRc[firstCornerPair3[0][0]][firstCornerPair3[0][1]][
      firstCornerPair3[0][2]
    ] == "red" &&
      aRc[firstCornerPair3[1][0]][firstCornerPair3[1][1]][
        firstCornerPair3[1][2]
      ] == "blue" &&
      aRc[firstCornerPair3[2][0]][firstCornerPair3[2][1]][
        firstCornerPair3[2][2]
      ] == "white") ||
    (aRc[firstCornerPair3[0][0]][firstCornerPair3[0][1]][
      firstCornerPair3[0][2]
    ] == "blue" &&
      aRc[firstCornerPair3[1][0]][firstCornerPair3[1][1]][
        firstCornerPair3[1][2]
      ] == "red" &&
      aRc[firstCornerPair3[2][0]][firstCornerPair3[2][1]][
        firstCornerPair3[2][2]
      ] == "white") ||
    (aRc[firstCornerPair3[0][0]][firstCornerPair3[0][1]][
      firstCornerPair3[0][2]
    ] == "blue" &&
      aRc[firstCornerPair3[1][0]][firstCornerPair3[1][1]][
        firstCornerPair3[1][2]
      ] == "white" &&
      aRc[firstCornerPair3[2][0]][firstCornerPair3[2][1]][
        firstCornerPair3[2][2]
      ] == "red")
  ) {
    for (i = 0; i < 3; i++) {
      if (
        aRc[firstCornerPair3[i][0]][firstCornerPair3[i][1]][
          firstCornerPair3[i][2]
        ] == "white"
      ) {
        Array.prototype.push.apply(whiteRedBlueCorner, firstCornerPair3[i]);
      }
    }
  }

  if (
    (aRc[secondCornerPair3[0][0]][secondCornerPair3[0][1]][
      secondCornerPair3[0][2]
    ] == "white" &&
      aRc[secondCornerPair3[1][0]][secondCornerPair3[1][1]][
        secondCornerPair3[1][2]
      ] == "red" &&
      aRc[secondCornerPair3[2][0]][secondCornerPair3[2][1]][
        secondCornerPair3[2][2]
      ] == "blue") ||
    (aRc[secondCornerPair3[0][0]][secondCornerPair3[0][1]][
      secondCornerPair3[0][2]
    ] == "white" &&
      aRc[secondCornerPair3[1][0]][secondCornerPair3[1][1]][
        secondCornerPair3[1][2]
      ] == "blue" &&
      aRc[secondCornerPair3[2][0]][secondCornerPair3[2][1]][
        secondCornerPair3[2][2]
      ] == "red") ||
    (aRc[secondCornerPair3[0][0]][secondCornerPair3[0][1]][
      secondCornerPair3[0][2]
    ] == "red" &&
      aRc[secondCornerPair3[1][0]][secondCornerPair3[1][1]][
        secondCornerPair3[1][2]
      ] == "white" &&
      aRc[secondCornerPair3[2][0]][secondCornerPair3[2][1]][
        secondCornerPair3[2][2]
      ] == "blue") ||
    (aRc[secondCornerPair3[0][0]][secondCornerPair3[0][1]][
      secondCornerPair3[0][2]
    ] == "red" &&
      aRc[secondCornerPair3[1][0]][secondCornerPair3[1][1]][
        secondCornerPair3[1][2]
      ] == "blue" &&
      aRc[secondCornerPair3[2][0]][secondCornerPair3[2][1]][
        secondCornerPair3[2][2]
      ] == "white") ||
    (aRc[secondCornerPair3[0][0]][secondCornerPair3[0][1]][
      secondCornerPair3[0][2]
    ] == "blue" &&
      aRc[secondCornerPair3[1][0]][secondCornerPair3[1][1]][
        secondCornerPair3[1][2]
      ] == "red" &&
      aRc[secondCornerPair3[2][0]][secondCornerPair3[2][1]][
        secondCornerPair3[2][2]
      ] == "white") ||
    (aRc[secondCornerPair3[0][0]][secondCornerPair3[0][1]][
      secondCornerPair3[0][2]
    ] == "blue" &&
      aRc[secondCornerPair3[1][0]][secondCornerPair3[1][1]][
        secondCornerPair3[1][2]
      ] == "white" &&
      aRc[secondCornerPair3[2][0]][secondCornerPair3[2][1]][
        secondCornerPair3[2][2]
      ] == "red")
  ) {
    for (i = 0; i < 3; i++) {
      if (
        aRc[secondCornerPair3[i][0]][secondCornerPair3[i][1]][
          secondCornerPair3[i][2]
        ] == "white"
      ) {
        Array.prototype.push.apply(whiteRedBlueCorner, secondCornerPair3[i]);
      }
    }
  }

  if (
    (aRc[thirdCornerPair3[0][0]][thirdCornerPair3[0][1]][
      thirdCornerPair3[0][2]
    ] == "white" &&
      aRc[thirdCornerPair3[1][0]][thirdCornerPair3[1][1]][
        thirdCornerPair3[1][2]
      ] == "red" &&
      aRc[thirdCornerPair3[2][0]][thirdCornerPair3[2][1]][
        thirdCornerPair3[2][2]
      ] == "blue") ||
    (aRc[thirdCornerPair3[0][0]][thirdCornerPair3[0][1]][
      thirdCornerPair3[0][2]
    ] == "white" &&
      aRc[thirdCornerPair3[1][0]][thirdCornerPair3[1][1]][
        thirdCornerPair3[1][2]
      ] == "blue" &&
      aRc[thirdCornerPair3[2][0]][thirdCornerPair3[2][1]][
        thirdCornerPair3[2][2]
      ] == "red") ||
    (aRc[thirdCornerPair3[0][0]][thirdCornerPair3[0][1]][
      thirdCornerPair3[0][2]
    ] == "red" &&
      aRc[thirdCornerPair3[1][0]][thirdCornerPair3[1][1]][
        thirdCornerPair3[1][2]
      ] == "white" &&
      aRc[thirdCornerPair3[2][0]][thirdCornerPair3[2][1]][
        thirdCornerPair3[2][2]
      ] == "blue") ||
    (aRc[thirdCornerPair3[0][0]][thirdCornerPair3[0][1]][
      thirdCornerPair3[0][2]
    ] == "red" &&
      aRc[thirdCornerPair3[1][0]][thirdCornerPair3[1][1]][
        thirdCornerPair3[1][2]
      ] == "blue" &&
      aRc[thirdCornerPair3[2][0]][thirdCornerPair3[2][1]][
        thirdCornerPair3[2][2]
      ] == "white") ||
    (aRc[thirdCornerPair3[0][0]][thirdCornerPair3[0][1]][
      thirdCornerPair3[0][2]
    ] == "blue" &&
      aRc[thirdCornerPair3[1][0]][thirdCornerPair3[1][1]][
        thirdCornerPair3[1][2]
      ] == "red" &&
      aRc[thirdCornerPair3[2][0]][thirdCornerPair3[2][1]][
        thirdCornerPair3[2][2]
      ] == "white") ||
    (aRc[thirdCornerPair3[0][0]][thirdCornerPair3[0][1]][
      thirdCornerPair3[0][2]
    ] == "blue" &&
      aRc[thirdCornerPair3[1][0]][thirdCornerPair3[1][1]][
        thirdCornerPair3[1][2]
      ] == "white" &&
      aRc[thirdCornerPair3[2][0]][thirdCornerPair3[2][1]][
        thirdCornerPair3[2][2]
      ] == "red")
  ) {
    for (i = 0; i < 3; i++) {
      if (
        aRc[thirdCornerPair3[i][0]][thirdCornerPair3[i][1]][
          thirdCornerPair3[i][2]
        ] == "white"
      ) {
        Array.prototype.push.apply(whiteRedBlueCorner, thirdCornerPair3[i]);
      }
    }
  }

  if (
    (aRc[fourthCornerPair3[0][0]][fourthCornerPair3[0][1]][
      fourthCornerPair3[0][2]
    ] == "white" &&
      aRc[fourthCornerPair3[1][0]][fourthCornerPair3[1][1]][
        fourthCornerPair3[1][2]
      ] == "red" &&
      aRc[fourthCornerPair3[2][0]][fourthCornerPair3[2][1]][
        fourthCornerPair3[2][2]
      ] == "blue") ||
    (aRc[fourthCornerPair3[0][0]][fourthCornerPair3[0][1]][
      fourthCornerPair3[0][2]
    ] == "white" &&
      aRc[fourthCornerPair3[1][0]][fourthCornerPair3[1][1]][
        fourthCornerPair3[1][2]
      ] == "blue" &&
      aRc[fourthCornerPair3[2][0]][fourthCornerPair3[2][1]][
        fourthCornerPair3[2][2]
      ] == "red") ||
    (aRc[fourthCornerPair3[0][0]][fourthCornerPair3[0][1]][
      fourthCornerPair3[0][2]
    ] == "red" &&
      aRc[fourthCornerPair3[1][0]][fourthCornerPair3[1][1]][
        fourthCornerPair3[1][2]
      ] == "white" &&
      aRc[fourthCornerPair3[2][0]][fourthCornerPair3[2][1]][
        fourthCornerPair3[2][2]
      ] == "blue") ||
    (aRc[fourthCornerPair3[0][0]][fourthCornerPair3[0][1]][
      fourthCornerPair3[0][2]
    ] == "red" &&
      aRc[fourthCornerPair3[1][0]][fourthCornerPair3[1][1]][
        fourthCornerPair3[1][2]
      ] == "blue" &&
      aRc[fourthCornerPair3[2][0]][fourthCornerPair3[2][1]][
        fourthCornerPair3[2][2]
      ] == "white") ||
    (aRc[fourthCornerPair3[0][0]][fourthCornerPair3[0][1]][
      fourthCornerPair3[0][2]
    ] == "blue" &&
      aRc[fourthCornerPair3[1][0]][fourthCornerPair3[1][1]][
        fourthCornerPair3[1][2]
      ] == "red" &&
      aRc[fourthCornerPair3[2][0]][fourthCornerPair3[2][1]][
        fourthCornerPair3[2][2]
      ] == "white") ||
    (aRc[fourthCornerPair3[0][0]][fourthCornerPair3[0][1]][
      fourthCornerPair3[0][2]
    ] == "blue" &&
      aRc[fourthCornerPair3[1][0]][fourthCornerPair3[1][1]][
        fourthCornerPair3[1][2]
      ] == "white" &&
      aRc[fourthCornerPair3[2][0]][fourthCornerPair3[2][1]][
        fourthCornerPair3[2][2]
      ] == "red")
  ) {
    for (i = 0; i < 3; i++) {
      if (
        aRc[fourthCornerPair3[i][0]][fourthCornerPair3[i][1]][
          fourthCornerPair3[i][2]
        ] == "white"
      ) {
        Array.prototype.push.apply(whiteRedBlueCorner, fourthCornerPair3[i]);
      }
    }
  }

  //whiteRedBlueCorner
  if (JSON.stringify(whiteRedBlueCorner) !== JSON.stringify([3, 0, 2])) {
    //na rumeni ploskvi
    if (JSON.stringify(whiteRedBlueCorner) == JSON.stringify([1, 2, 0])) {
      R();
      U();
      U();
      RI();
      UI();

      R();
      U();
      RI();
    }
    if (JSON.stringify(whiteRedBlueCorner) == JSON.stringify([1, 2, 2])) {
      U();
      R();
      U();
      U();
      RI();
      UI();

      R();
      U();
      RI();
    }
    if (JSON.stringify(whiteRedBlueCorner) == JSON.stringify([1, 0, 0])) {
      UI();
      R();
      U();
      U();
      RI();
      UI();

      R();
      U();
      RI();
    }
    if (JSON.stringify(whiteRedBlueCorner) == JSON.stringify([1, 0, 2])) {
      U();
      U();
      R();
      U();
      U();
      RI();
      UI();

      R();
      U();
      RI();
    }

    //na spodnji vrstici
    if (JSON.stringify(whiteRedBlueCorner) == JSON.stringify([0, 2, 0])) {
      FI();
      UI();
      F();
      U();

      U();
      R();
      UI();
      RI();
    }
    if (JSON.stringify(whiteRedBlueCorner) == JSON.stringify([5, 2, 0])) {
      R();
      U();
      RI();
      UI();

      R();
      U();
      RI();
    }
    if (JSON.stringify(whiteRedBlueCorner) == JSON.stringify([0, 0, 0])) {
      F();
      U();
      FI();
      UI();
      UI();

      R();
      U();
      RI();
    }
    if (JSON.stringify(whiteRedBlueCorner) == JSON.stringify([4, 0, 0])) {
      LI();
      UI();
      L();

      U();
      R();
      UI();
      RI();
    }
    if (JSON.stringify(whiteRedBlueCorner) == JSON.stringify([2, 0, 2])) {
      BI();
      U();
      U();
      B();

      U();
      R();
      UI();
      RI();
    }
    if (JSON.stringify(whiteRedBlueCorner) == JSON.stringify([4, 0, 2])) {
      L();
      U();
      U();
      LI();

      R();
      U();
      RI();
    }
    if (JSON.stringify(whiteRedBlueCorner) == JSON.stringify([5, 2, 2])) {
      RI();
      U();
      U();
      R();
      UI();

      U();
      R();
      UI();
      RI();
    }
    if (JSON.stringify(whiteRedBlueCorner) == JSON.stringify([2, 2, 2])) {
      B();
      U();
      BI();

      R();
      U();
      RI();
    }

    //na zgornji vrstici
    if (JSON.stringify(whiteRedBlueCorner) == JSON.stringify([0, 0, 2])) {
      UI();

      R();
      U();
      RI();
    }
    if (JSON.stringify(whiteRedBlueCorner) == JSON.stringify([4, 2, 0])) {
      UI();

      U();
      R();
      UI();
      RI();
    }
    if (JSON.stringify(whiteRedBlueCorner) == JSON.stringify([4, 2, 2])) {
      U();
      U();

      R();
      U();
      RI();
    }
    if (JSON.stringify(whiteRedBlueCorner) == JSON.stringify([2, 0, 0])) {
      U();
      U();

      U();
      R();
      UI();
      RI();
    }
    if (JSON.stringify(whiteRedBlueCorner) == JSON.stringify([5, 0, 2])) {
      U();

      U();
      R();
      UI();
      RI();
    }
    if (JSON.stringify(whiteRedBlueCorner) == JSON.stringify([2, 2, 0])) {
      U();

      R();
      U();
      RI();
    }

    //sestavljanje
    if (JSON.stringify(whiteRedBlueCorner) == JSON.stringify([0, 2, 2])) {
      U();
      R();
      UI();
      RI();
    }
    if (JSON.stringify(whiteRedBlueCorner) == JSON.stringify([5, 0, 0])) {
      R();
      U();
      RI();
    }
  }
}

function solverColorEdges() {
  const edgePairs = [
    [
      [0, 2, 1],
      [5, 1, 0],
    ],
    [
      [5, 1, 2],
      [2, 2, 1],
    ],
    [
      [2, 0, 1],
      [4, 1, 2],
    ],
    [
      [4, 1, 0],
      [0, 0, 1],
    ],
    [
      [0, 1, 2],
      [1, 1, 0],
    ],
    [
      [5, 0, 1],
      [1, 2, 1],
    ],
    [
      [2, 1, 0],
      [1, 1, 2],
    ],
    [
      [4, 2, 1],
      [1, 0, 1],
    ],
  ];
  //BLUE RED EDGE//
  const blueRedEdge = [];

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        if (aRc[i][j][k] == "blue" && (j + k === 1 || j + k === 3)) {
          for (let a = 0; a < 6; a++) {
            for (let b = 0; b < 3; b++) {
              for (let c = 0; c < 3; c++) {
                if (aRc[a][b][c] == "red" && (b + c === 1 || b + c === 3)) {
                  for (let d = 0; d < 8; d++) {
                    if (
                      JSON.stringify(edgePairs[d][0]) ==
                        JSON.stringify([i, j, k]) ||
                      JSON.stringify(edgePairs[d][0]) ==
                        JSON.stringify([a, b, c])
                    ) {
                      if (
                        JSON.stringify(edgePairs[d][1]) ==
                          JSON.stringify([i, j, k]) ||
                        JSON.stringify(edgePairs[d][1]) ==
                          JSON.stringify([a, b, c])
                      ) {
                        Array.prototype.push.apply(blueRedEdge, [i, j, k]);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  //solverBlueRedEdges
  if (JSON.stringify(blueRedEdge) !== JSON.stringify([0, 2, 1])) {
    //ob straneh
    if (JSON.stringify(blueRedEdge) == JSON.stringify([5, 1, 0])) {
      R();
      UI();
      RI();
      F();
      RI();
      FI();
      R();
      //210
      UI();
      R();
      UI();
      RI();
      F();
      RI();
      FI();
      R();
    }
    if (JSON.stringify(blueRedEdge) == JSON.stringify([5, 1, 2])) {
      B();
      UI();
      BI();
      R();
      BI();
      RI();
      B();
      //101
      U();
      FI();
      U();
      F();
      RI();
      F();
      R();
      FI();
    }
    if (JSON.stringify(blueRedEdge) == JSON.stringify([2, 2, 1])) {
      B();
      UI();
      BI();
      R();
      BI();
      RI();
      B();
      //421
      R();
      UI();
      RI();
      F();
      RI();
      FI();
      R();
    }
    if (JSON.stringify(blueRedEdge) == JSON.stringify([2, 0, 1])) {
      L();
      UI();
      LI();
      B();
      LI();
      BI();
      L();
      //110
      U();
      U();
      FI();
      U();
      F();
      RI();
      F();
      R();
      FI();
    }
    if (JSON.stringify(blueRedEdge) == JSON.stringify([4, 1, 2])) {
      L();
      UI();
      LI();
      B();
      LI();
      BI();
      L();
      //012
      U();
      R();
      UI();
      RI();
      F();
      RI();
      FI();
      R();
    }
    if (JSON.stringify(blueRedEdge) === JSON.stringify([0, 0, 1])) {
      LI();
      U();
      L();
      FI();
      L();
      F();
      LI();
      //112
      FI();
      U();
      F();
      RI();
      F();
      R();
      FI();
    }
    if (JSON.stringify(blueRedEdge) === JSON.stringify([4, 1, 0])) {
      LI();
      U();
      L();
      FI();
      L();
      F();
      LI();
      //210
      UI();
      R();
      UI();
      RI();
      F();
      RI();
      FI();
      R();
    }

    //sestavljanje

    //modra oduspred
    if (JSON.stringify(blueRedEdge) == JSON.stringify([0, 1, 2])) {
      U();
      R();
      UI();
      RI();
      F();
      RI();
      FI();
      R();
    }
    if (JSON.stringify(blueRedEdge) == JSON.stringify([5, 0, 1])) {
      U();
      U();
      R();
      UI();
      RI();
      F();
      RI();
      FI();
      R();
    }
    if (JSON.stringify(blueRedEdge) == JSON.stringify([2, 1, 0])) {
      UI();
      R();
      UI();
      RI();
      F();
      RI();
      FI();
      R();
    }
    if (JSON.stringify(blueRedEdge) == JSON.stringify([4, 2, 1])) {
      R();
      UI();
      RI();
      F();
      RI();
      FI();
      R();
    }

    //modra oduzgor
    if (JSON.stringify(blueRedEdge) === JSON.stringify([1, 1, 0])) {
      U();
      U();
      FI();
      U();
      F();
      RI();
      F();
      R();
      FI();
    }
    if (JSON.stringify(blueRedEdge) == JSON.stringify([1, 2, 1])) {
      UI();
      FI();
      U();
      F();
      RI();
      F();
      R();
      FI();
    }
    if (JSON.stringify(blueRedEdge) == JSON.stringify([1, 1, 2])) {
      FI();
      U();
      F();
      RI();
      F();
      R();
      FI();
    }
    if (JSON.stringify(blueRedEdge) == JSON.stringify([1, 0, 1])) {
      U();
      FI();
      U();
      F();
      RI();
      F();
      R();
      FI();
    }
  }

  //GREEN RED EDGE//
  const greenRedEdge = [];

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        if (aRc[i][j][k] == "green" && (j + k === 1 || j + k === 3)) {
          for (let a = 0; a < 6; a++) {
            for (let b = 0; b < 3; b++) {
              for (let c = 0; c < 3; c++) {
                if (aRc[a][b][c] == "red" && (b + c === 1 || b + c === 3)) {
                  for (let d = 0; d < 8; d++) {
                    if (
                      JSON.stringify(edgePairs[d][0]) ==
                        JSON.stringify([i, j, k]) ||
                      JSON.stringify(edgePairs[d][0]) ==
                        JSON.stringify([a, b, c])
                    ) {
                      if (
                        JSON.stringify(edgePairs[d][1]) ==
                          JSON.stringify([i, j, k]) ||
                        JSON.stringify(edgePairs[d][1]) ==
                          JSON.stringify([a, b, c])
                      ) {
                        Array.prototype.push.apply(greenRedEdge, [i, j, k]);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  //solverGreenRedEdges
  if (JSON.stringify(greenRedEdge) !== JSON.stringify([2, 2, 1])) {
    //ob straneh
    if (JSON.stringify(greenRedEdge) == JSON.stringify([5, 1, 0])) {
      R();
      UI();
      RI();
      F();
      RI();
      FI();
      R();
      //210
      UI();
      RI();
      U();
      R();
      BI();
      R();
      B();
      RI();
    }
    if (JSON.stringify(greenRedEdge) == JSON.stringify([0, 2, 1])) {
      R();
      UI();
      RI();
      F();
      RI();
      FI();
      R();
      //112
      U();
      U();
      B();
      UI();
      BI();
      R();
      BI();
      RI();
      B();
    }
    if (JSON.stringify(greenRedEdge) == JSON.stringify([5, 1, 2])) {
      B();
      UI();
      BI();
      R();
      BI();
      RI();
      B();
      //101
      UI();
      B();
      UI();
      BI();
      R();
      BI();
      RI();
      B();
    }
    if (JSON.stringify(greenRedEdge) == JSON.stringify([2, 0, 1])) {
      L();
      UI();
      LI();
      B();
      LI();
      BI();
      L();
      //110
      B();
      UI();
      BI();
      R();
      BI();
      RI();
      B();
    }
    if (JSON.stringify(greenRedEdge) == JSON.stringify([4, 1, 2])) {
      L();
      UI();
      LI();
      B();
      LI();
      BI();
      L();
      //012
      U();
      RI();
      U();
      R();
      BI();
      R();
      B();
      RI();
    }
    if (JSON.stringify(greenRedEdge) === JSON.stringify([0, 0, 1])) {
      LI();
      U();
      L();
      FI();
      L();
      F();
      LI();
      //112
      U();
      U();
      B();
      UI();
      BI();
      R();
      BI();
      RI();
      B();
    }
    if (JSON.stringify(greenRedEdge) === JSON.stringify([4, 1, 0])) {
      LI();
      U();
      L();
      FI();
      L();
      F();
      LI();
      //210
      UI();
      RI();
      U();
      R();
      BI();
      R();
      B();
      RI();
    }

    //sestavljanje

    //zelena oduspred
    if (JSON.stringify(greenRedEdge) == JSON.stringify([0, 1, 2])) {
      U();
      RI();
      U();
      R();
      BI();
      R();
      B();
      RI();
    }
    if (JSON.stringify(greenRedEdge) == JSON.stringify([5, 0, 1])) {
      U();
      U();
      RI();
      U();
      R();
      BI();
      R();
      B();
      RI();
    }
    if (JSON.stringify(greenRedEdge) == JSON.stringify([2, 1, 0])) {
      UI();
      RI();
      U();
      R();
      BI();
      R();
      B();
      RI();
    }
    if (JSON.stringify(greenRedEdge) == JSON.stringify([4, 2, 1])) {
      RI();
      U();
      R();
      BI();
      R();
      B();
      RI();
    }

    //zelena oduzgor
    if (JSON.stringify(greenRedEdge) === JSON.stringify([1, 1, 0])) {
      B();
      UI();
      BI();
      R();
      BI();
      RI();
      B();
    }
    if (JSON.stringify(greenRedEdge) == JSON.stringify([1, 2, 1])) {
      U();
      B();
      UI();
      BI();
      R();
      BI();
      RI();
      B();
    }
    if (JSON.stringify(greenRedEdge) == JSON.stringify([1, 1, 2])) {
      U();
      U();
      B();
      UI();
      BI();
      R();
      BI();
      RI();
      B();
    }
    if (JSON.stringify(greenRedEdge) == JSON.stringify([1, 0, 1])) {
      UI();
      B();
      UI();
      BI();
      R();
      BI();
      RI();
      B();
    }
  }

  //GREEN ORANGE EDGE//
  const greenOrangeEdge = [];

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        if (aRc[i][j][k] == "green" && (j + k === 1 || j + k === 3)) {
          for (let a = 0; a < 6; a++) {
            for (let b = 0; b < 3; b++) {
              for (let c = 0; c < 3; c++) {
                if (aRc[a][b][c] == "orange" && (b + c === 1 || b + c === 3)) {
                  for (let d = 0; d < 8; d++) {
                    if (
                      JSON.stringify(edgePairs[d][0]) ==
                        JSON.stringify([i, j, k]) ||
                      JSON.stringify(edgePairs[d][0]) ==
                        JSON.stringify([a, b, c])
                    ) {
                      if (
                        JSON.stringify(edgePairs[d][1]) ==
                          JSON.stringify([i, j, k]) ||
                        JSON.stringify(edgePairs[d][1]) ==
                          JSON.stringify([a, b, c])
                      ) {
                        Array.prototype.push.apply(greenOrangeEdge, [i, j, k]);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  //solverGreenOrangeEdges
  if (JSON.stringify(greenOrangeEdge) !== JSON.stringify([2, 0, 1])) {
    //ob straneh
    if (JSON.stringify(greenOrangeEdge) == JSON.stringify([5, 1, 0])) {
      R();
      UI();
      RI();
      F();
      RI();
      FI();
      R();
      //210
      U();
      L();
      UI();
      LI();
      B();
      LI();
      BI();
      L();
    }
    if (JSON.stringify(greenOrangeEdge) == JSON.stringify([0, 2, 1])) {
      R();
      UI();
      RI();
      F();
      RI();
      FI();
      R();
      //112
      U();
      U();
      BI();
      U();
      B();
      LI();
      B();
      L();
      BI();
    }
    if (JSON.stringify(greenOrangeEdge) == JSON.stringify([5, 1, 2])) {
      B();
      UI();
      BI();
      R();
      BI();
      RI();
      B();
      //101
      UI();
      BI();
      U();
      B();
      LI();
      B();
      L();
      BI();
    }
    if (JSON.stringify(greenOrangeEdge) == JSON.stringify([2, 2, 1])) {
      B();
      UI();
      BI();
      R();
      BI();
      RI();
      B();
      //421
      U();
      U();
      L();
      UI();
      LI();
      B();
      LI();
      BI();
      L();
    }
    if (JSON.stringify(greenOrangeEdge) == JSON.stringify([4, 1, 2])) {
      L();
      UI();
      LI();
      B();
      LI();
      BI();
      L();
      //012
      UI();
      L();
      UI();
      LI();
      B();
      LI();
      BI();
      L();
    }
    if (JSON.stringify(greenOrangeEdge) === JSON.stringify([0, 0, 1])) {
      LI();
      U();
      L();
      FI();
      L();
      F();
      LI();
      //112
      U();
      U();
      BI();
      U();
      B();
      LI();
      B();
      L();
      BI();
    }
    if (JSON.stringify(greenOrangeEdge) === JSON.stringify([4, 1, 0])) {
      LI();
      U();
      L();
      FI();
      L();
      F();
      LI();
      //210
      U();
      L();
      UI();
      LI();
      B();
      LI();
      BI();
      L();
    }

    //sestavljanje

    //zelena oduspred
    if (JSON.stringify(greenOrangeEdge) == JSON.stringify([0, 1, 2])) {
      UI();
      L();
      UI();
      LI();
      B();
      LI();
      BI();
      L();
    }
    if (JSON.stringify(greenOrangeEdge) == JSON.stringify([5, 0, 1])) {
      L();
      UI();
      LI();
      B();
      LI();
      BI();
      L();
    }
    if (JSON.stringify(greenOrangeEdge) == JSON.stringify([2, 1, 0])) {
      U();
      L();
      UI();
      LI();
      B();
      LI();
      BI();
      L();
    }
    if (JSON.stringify(greenOrangeEdge) == JSON.stringify([4, 2, 1])) {
      U();
      U();
      L();
      UI();
      LI();
      B();
      LI();
      BI();
      L();
    }

    //zelena oduzgor
    if (JSON.stringify(greenOrangeEdge) === JSON.stringify([1, 1, 0])) {
      BI();
      U();
      B();
      LI();
      B();
      L();
      BI();
    }
    if (JSON.stringify(greenOrangeEdge) == JSON.stringify([1, 2, 1])) {
      U();
      BI();
      U();
      B();
      LI();
      B();
      L();
      BI();
    }
    if (JSON.stringify(greenOrangeEdge) == JSON.stringify([1, 1, 2])) {
      U();
      U();
      BI();
      U();
      B();
      LI();
      B();
      L();
      BI();
    }
    if (JSON.stringify(greenOrangeEdge) == JSON.stringify([1, 0, 1])) {
      UI();
      BI();
      U();
      B();
      LI();
      B();
      L();
      BI();
    }
  }

  //BLUE ORANGE CORNER//
  const blueOrangeEdge = [];

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        if (aRc[i][j][k] == "blue" && (j + k === 1 || j + k === 3)) {
          for (let a = 0; a < 6; a++) {
            for (let b = 0; b < 3; b++) {
              for (let c = 0; c < 3; c++) {
                if (aRc[a][b][c] == "orange" && (b + c === 1 || b + c === 3)) {
                  for (let d = 0; d < 8; d++) {
                    if (
                      JSON.stringify(edgePairs[d][0]) ==
                        JSON.stringify([i, j, k]) ||
                      JSON.stringify(edgePairs[d][0]) ==
                        JSON.stringify([a, b, c])
                    ) {
                      if (
                        JSON.stringify(edgePairs[d][1]) ==
                          JSON.stringify([i, j, k]) ||
                        JSON.stringify(edgePairs[d][1]) ==
                          JSON.stringify([a, b, c])
                      ) {
                        Array.prototype.push.apply(blueOrangeEdge, [i, j, k]);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  //solverBlueOrangeCorner
  if (JSON.stringify(blueOrangeEdge) !== JSON.stringify([0, 0, 1])) {
    //ob straneh
    if (JSON.stringify(blueOrangeEdge) == JSON.stringify([5, 1, 0])) {
      R();
      UI();
      RI();
      F();
      RI();
      FI();
      R();
      //210
      U();
      LI();
      U();
      L();
      FI();
      L();
      F();
      LI();
    }
    if (JSON.stringify(blueOrangeEdge) == JSON.stringify([0, 2, 1])) {
      R();
      UI();
      RI();
      F();
      RI();
      FI();
      R();
      //112
      F();
      UI();
      FI();
      L();
      FI();
      LI();
      F();
    }
    if (JSON.stringify(blueOrangeEdge) == JSON.stringify([5, 1, 2])) {
      B();
      UI();
      BI();
      R();
      BI();
      RI();
      B();
      //101
      U();
      F();
      UI();
      FI();
      L();
      FI();
      LI();
      F();
    }
    if (JSON.stringify(blueOrangeEdge) == JSON.stringify([2, 2, 1])) {
      B();
      UI();
      BI();
      R();
      BI();
      RI();
      B();
      //421
      U();
      U();
      LI();
      U();
      L();
      FI();
      L();
      F();
      LI();
    }
    if (JSON.stringify(blueOrangeEdge) == JSON.stringify([2, 0, 1])) {
      L();
      UI();
      LI();
      B();
      LI();
      BI();
      L();
      //110
      U();
      U();
      F();
      UI();
      FI();
      L();
      FI();
      LI();
      F();
    }
    if (JSON.stringify(blueOrangeEdge) == JSON.stringify([4, 1, 2])) {
      L();
      UI();
      LI();
      B();
      LI();
      BI();
      L();
      //012
      UI();
      LI();
      U();
      L();
      FI();
      L();
      F();
      LI();
    }
    if (JSON.stringify(blueOrangeEdge) === JSON.stringify([4, 1, 0])) {
      LI();
      U();
      L();
      FI();
      L();
      F();
      LI();
      //210
      U();
      LI();
      U();
      L();
      FI();
      L();
      F();
      LI();
    }

    //sestavljanje

    //modra oduspred
    if (JSON.stringify(blueOrangeEdge) == JSON.stringify([0, 1, 2])) {
      UI();
      LI();
      U();
      L();
      FI();
      L();
      F();
      LI();
    }
    if (JSON.stringify(blueOrangeEdge) == JSON.stringify([5, 0, 1])) {
      LI();
      U();
      L();
      FI();
      L();
      F();
      LI();
    }
    if (JSON.stringify(blueOrangeEdge) == JSON.stringify([2, 1, 0])) {
      U();
      LI();
      U();
      L();
      FI();
      L();
      F();
      LI();
    }
    if (JSON.stringify(blueOrangeEdge) == JSON.stringify([4, 2, 1])) {
      U();
      U();
      LI();
      U();
      L();
      FI();
      L();
      F();
      LI();
    }

    //modra oduzgor
    if (JSON.stringify(blueOrangeEdge) === JSON.stringify([1, 1, 0])) {
      U();
      U();
      F();
      UI();
      FI();
      L();
      FI();
      LI();
      F();
    }
    if (JSON.stringify(blueOrangeEdge) == JSON.stringify([1, 2, 1])) {
      UI();
      F();
      UI();
      FI();
      L();
      FI();
      LI();
      F();
    }
    if (JSON.stringify(blueOrangeEdge) == JSON.stringify([1, 1, 2])) {
      F();
      UI();
      FI();
      L();
      FI();
      LI();
      F();
    }
    if (JSON.stringify(blueOrangeEdge) == JSON.stringify([1, 0, 1])) {
      U();
      F();
      UI();
      FI();
      L();
      FI();
      LI();
      F();
    }
  }
}

function upperCross() {
  let yellowEdges = 0;
  if (aRc[1][1][0] == "yellow") {
    yellowEdges++;
  }
  if (aRc[1][0][1] == "yellow") {
    yellowEdges++;
  }
  if (aRc[1][1][2] == "yellow") {
    yellowEdges++;
  }
  if (aRc[1][2][1] == "yellow") {
    yellowEdges++;
  }
  if (yellowEdges < 2) {
    F();
    R();
    U();
    RI();
    UI();
    FI();
  }

  if (
    aRc[1][1][0] == "yellow" &&
    aRc[1][2][1] == "yellow" &&
    !(aRc[1][1][2] == "yellow" && aRc[1][0][1] == "yellow")
  ) {
    F();
    R();
    U();
    RI();
    UI();
    FI();
  }

  if (
    aRc[1][1][0] == "yellow" &&
    aRc[1][0][1] == "yellow" &&
    !(aRc[1][1][2] == "yellow" && aRc[1][2][1] == "yellow")
  ) {
    UI();
    F();
    R();
    U();
    RI();
    UI();
    FI();
  }

  if (
    aRc[1][0][1] == "yellow" &&
    aRc[1][1][2] == "yellow" &&
    !(aRc[1][2][1] == "yellow" && aRc[1][1][0] == "yellow")
  ) {
    U();
    U();
    F();
    R();
    U();
    RI();
    UI();
    FI();
  }

  if (
    aRc[1][1][2] == "yellow" &&
    aRc[1][2][1] == "yellow" &&
    !(aRc[1][1][0] == "yellow" && aRc[1][0][1] == "yellow")
  ) {
    U();
    F();
    R();
    U();
    RI();
    UI();
    FI();
  }

  if (
    aRc[1][1][0] == "yellow" &&
    aRc[1][1][2] == "yellow" &&
    !(aRc[1][0][1] == "yellow" && aRc[1][2][1] == "yellow")
  ) {
    U();
    F();
    R();
    U();
    RI();
    UI();
    FI();
  }

  if (
    aRc[1][0][1] == "yellow" &&
    aRc[1][2][1] == "yellow" &&
    !(aRc[1][1][0] == "yellow" && aRc[1][1][2] == "yellow")
  ) {
    F();
    R();
    U();
    RI();
    UI();
    FI();
  }
}

function twoEdgeAlligner() {
  let countEdges = 0;
  for (let i = 0; i < 4; i++) {
    if (aRc[0][1][2] == "blue") {
      countEdges++;
    }
    if (aRc[4][2][1] == "orange") {
      countEdges++;
    }
    if (aRc[2][1][0] == "green") {
      countEdges++;
    }
    if (aRc[5][0][1] == "red") {
      countEdges++;
    }
    if (countEdges < 2) {
      U();
    }

    countEdges = 0;
  }
}
function allEdgeAlligner() {
  if (
    aRc[2][1][0] !== "green" ||
    aRc[0][1][2] !== "blue" ||
    aRc[5][0][1] !== "red" ||
    aRc[4][2][1] !== "orange"
  ) {
    if (
      aRc[2][1][0] == "green" &&
      aRc[0][1][2] == "blue" &&
      !(aRc[5][0][1] == "red" && aRc[4][2][1] == "orange")
    ) {
      R();
      U();
      U();
      RI();
      UI();
      R();
      UI();
      RI();
    }
    if (
      !(aRc[2][1][0] == "green" && aRc[0][1][2] == "blue") &&
      aRc[5][0][1] == "red" &&
      aRc[4][2][1] == "orange"
    ) {
      F();
      U();
      U();
      FI();
      UI();
      F();
      UI();
      FI();
    }
    if (
      aRc[2][1][0] == "green" &&
      aRc[4][2][1] == "orange" &&
      !(aRc[5][0][1] == "red" && aRc[0][1][2] == "blue")
    ) {
      R();
      U();
      U();
      RI();
      UI();
      R();
      UI();
      RI();
    }
    if (
      aRc[2][1][0] == "green" &&
      aRc[5][0][1] == "red" &&
      !(aRc[0][1][2] == "blue" && aRc[4][2][1] == "orange")
    ) {
      F();
      U();
      U();
      FI();
      UI();
      F();
      UI();
      FI();
    }
    if (
      aRc[0][1][2] == "blue" &&
      aRc[5][0][1] == "red" &&
      !(aRc[2][1][0] == "green" && aRc[4][2][1] == "orange")
    ) {
      L();
      U();
      U();
      LI();
      UI();
      L();
      UI();
      LI();
    }
    if (
      aRc[0][1][2] == "blue" &&
      aRc[4][2][1] == "orange" &&
      !(aRc[2][1][0] == "green" && aRc[5][0][1] == "red")
    ) {
      B();
      U();
      U();
      BI();
      UI();
      B();
      UI();
      BI();
    }
  }
  for (let i = 0; i < 4; i++) {
    if (
      !(
        aRc[2][1][0] == "green" &&
        aRc[0][1][2] == "blue" &&
        aRc[5][0][1] == "red" &&
        aRc[4][2][1] == "orange"
      )
    ) {
      U();
    }
  }
}

function checkCorners() {
  let orangeGreen = 0;
  let correctness = 0;
  if (aRc[1][0][2] == "green") {
    orangeGreen++;
  }
  if (aRc[1][0][2] == "orange") {
    orangeGreen++;
  }
  if (aRc[4][2][2] == "green") {
    orangeGreen++;
  }
  if (aRc[4][2][2] == "orange") {
    orangeGreen++;
  }
  if (aRc[2][0][0] == "green") {
    orangeGreen++;
  }
  if (aRc[2][0][0] == "orange") {
    orangeGreen++;
  }

  if (orangeGreen == 2) {
    correctness++;
    orangeGreen = "correct";
  }

  let greenRed = 0;
  if (aRc[2][2][0] == "green") {
    greenRed++;
  }
  if (aRc[2][2][0] == "red") {
    greenRed++;
  }
  if (aRc[5][0][2] == "green") {
    greenRed++;
  }
  if (aRc[5][0][2] == "red") {
    greenRed++;
  }
  if (aRc[1][2][2] == "green") {
    greenRed++;
  }
  if (aRc[1][2][2] == "red") {
    greenRed++;
  }

  if (greenRed == 2) {
    correctness++;
    greenRed = "correct";
  }

  let redBlue = 0;
  if (aRc[1][2][0] == "blue") {
    redBlue++;
  }
  if (aRc[1][2][0] == "red") {
    redBlue++;
  }
  if (aRc[5][0][0] == "blue") {
    redBlue++;
  }
  if (aRc[5][0][0] == "red") {
    redBlue++;
  }
  if (aRc[0][2][2] == "blue") {
    redBlue++;
  }
  if (aRc[0][2][2] == "red") {
    redBlue++;
  }

  if (redBlue == 2) {
    correctness++;
    redBlue = "correct";
  }

  let blueOrange = 0;
  if (aRc[0][0][2] == "blue") {
    blueOrange++;
  }
  if (aRc[0][0][2] == "orange") {
    blueOrange++;
  }
  if (aRc[4][2][0] == "blue") {
    blueOrange++;
  }
  if (aRc[4][2][0] == "orange") {
    blueOrange++;
  }
  if (aRc[1][0][0] == "blue") {
    blueOrange++;
  }
  if (aRc[1][0][0] == "orange") {
    blueOrange++;
  }

  if (blueOrange == 2) {
    correctness++;
    blueOrange = "correct";
  }
  return [correctness, redBlue, blueOrange, greenRed, orangeGreen];
}

function cornerCorrectness() {
  for (let i = 0; i < 3; i++) {
    checkCorners();
    const result = checkCorners();
    let correctness = result[0];
    let redBlue = result[1];
    let blueOrange = result[2];
    let greenRed = result[3];
    let orangeGreen = result[4];

    if (correctness == 0) {
      LI();
      U();
      R();
      UI();
      L();
      U();
      RI();
      UI();
      checkCorners();
      const result = checkCorners();
      correctness = result[0];
      redBlue = result[1];
      blueOrange = result[2];
      greenRed = result[3];
      orangeGreen = result[4];
    }
    if (
      (redBlue =
        "correct" &&
        correctness < 4 &&
        !(
          greenRed == "correct" ||
          blueOrange == "correct" ||
          orangeGreen == "correct"
        ))
    ) {
      LI();
      U();
      R();
      UI();
      L();
      U();
      RI();
      UI();
      checkCorners();
      const result = checkCorners();
      correctness = result[0];
      redBlue = result[1];
      blueOrange = result[2];
      greenRed = result[3];
      orangeGreen = result[4];
    }
    if (
      (blueOrange =
        "correct" &&
        correctness < 4 &&
        !(
          orangeGreen == "correct" ||
          greenRed == "correct" ||
          redBlue == "correct"
        ))
    ) {
      BI();
      U();
      F();
      UI();
      B();
      U();
      FI();
      UI();
      checkCorners();
      const result = checkCorners();
      correctness = result[0];
      redBlue = result[1];
      blueOrange = result[2];
      greenRed = result[3];
      orangeGreen = result[4];
    }
    if (
      (greenRed =
        "correct" &&
        correctness < 4 &&
        !(
          orangeGreen == "correct" ||
          blueOrange == "correct" ||
          redBlue == "correct"
        ))
    ) {
      FI();
      U();
      B();
      UI();
      F();
      U();
      BI();
      UI();
      checkCorners();
      const result = checkCorners();
      correctness = result[0];
      redBlue = result[1];
      blueOrange = result[2];
      greenRed = result[3];
      orangeGreen = result[4];
    }
    if (
      (orangeGreen =
        "correct" &&
        correctness < 4 &&
        !(
          greenRed == "correct" ||
          blueOrange == "correct" ||
          redBlue == "correct"
        ))
    ) {
      for (let i = 0; i < 2; i++) {
        RI();
        U();
        L();
        UI();
        R();
        U();
        LI();
        UI();
        checkCorners();
        const result = checkCorners();
        correctness = result[0];
        redBlue = result[1];
        blueOrange = result[2];
        greenRed = result[3];
        orangeGreen = result[4];
      }
    }
  }
}
function orentationCheck() {
  let wrongOriented = 0;
  let orangeGreen = 0;
  let greenRed = 0;
  let redBlue = 0;
  let blueOrange = 0;
  if (aRc[4][2][2] == "yellow" || aRc[2][0][0] == "yellow") {
    orangeGreen = "wrong";
    wrongOriented++;
  }
  if (aRc[2][2][0] == "yellow" || aRc[5][0][2] == "yellow") {
    greenRed = "wrong";
    wrongOriented++;
  }
  if (aRc[5][0][0] == "yellow" || aRc[0][2][2] == "yellow") {
    redBlue = "wrong";
    wrongOriented++;
  }
  if (aRc[0][0][2] == "yellow" || aRc[4][2][0] == "yellow") {
    blueOrange = "wrong";
    wrongOriented++;
  }

  return [wrongOriented, orangeGreen, greenRed, redBlue, blueOrange];
}
function cornerOrientation() {
  orentationCheck();
  const results = orentationCheck();

  let wrongOriented = results[0];
  let orangeGreen = results[1];
  let greenRed = results[2];
  let redBlue = results[3];
  let blueOrange = results[4];

  if (greenRed == "wrong" && !(wrongOriented == 0)) {
    U();

    while (aRc[1][2][0] != "yellow") {
      RI();
      DI();
      R();
      D();
    }
    if (aRc[1][2][0] == "yellow") {
      UI();
    }
    orentationCheck();
    const results = orentationCheck();

    orangeGreen = results[1];
    greenRed = results[2];
    redBlue = results[3];
    blueOrange = results[4];
  }

  if (redBlue == "wrong" && !(wrongOriented == 0)) {
    while (aRc[1][2][0] != "yellow") {
      RI();
      DI();
      R();
      D();
    }
    orentationCheck();
    const results = orentationCheck();

    orangeGreen = results[1];
    greenRed = results[2];
    redBlue = results[3];
    blueOrange = results[4];
  }

  if (blueOrange == "wrong" && !(wrongOriented == 0)) {
    UI();
    while (aRc[1][2][0] != "yellow") {
      RI();
      DI();
      R();
      D();
    }
    if (aRc[1][2][0] == "yellow") {
      U();
    }

    orentationCheck();
    const results = orentationCheck();

    orangeGreen = results[1];
    greenRed = results[2];
    redBlue = results[3];
    blueOrange = results[4];
  }

  if (orangeGreen == "wrong" && !(wrongOriented == 0)) {
    U();
    U();
    while (aRc[1][2][0] != "yellow") {
      RI();
      DI();
      R();
      D();
    }
    if (aRc[1][2][0] == "yellow") {
      U();
      U();
    }
    orentationCheck();
    const results = orentationCheck();

    orangeGreen = results[1];
    greenRed = results[2];
    redBlue = results[3];
    blueOrange = results[4];
  }
}

function clearHistory() {
  moves = [];
}
function repeat() {
  for (let i = 0; i < 4; i++) {
    solverEdges();
  }
}
function deepCopy(item) {
  if (Array.isArray(item)) {
    return item.map((element) => deepCopy(element));
  } else if (typeof item === "object" && item !== null) {
    let copy = {};
    for (let key in item) {
      copy[key] = deepCopy(item[key]);
    }
    return copy;
  } else {
    return item;
  }
}

function deepCopy3D() {
  let aRcCopy = aRc.map((layer) =>
    layer.map((row) => row.map((item) => deepCopy(item)))
  );

  return aRcCopy;
}

function copyMoves() {
  let movesCopy = [];
  for (let i = 0; i < moves.length; i++) {
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
      (moves[i] === "BI" && moves[i + 1] === "B") ||
      (moves[i] === "B " &&
        moves[i + 1] === "B" &&
        moves[i + 2] === "B" &&
        moves[i + 3] === "B") ||
      (moves[i] === "F " &&
        moves[i + 1] === "F" &&
        moves[i + 2] === "F" &&
        moves[i + 3] === "F") ||
      (moves[i] === "R " &&
        moves[i + 1] === "R" &&
        moves[i + 2] === "R" &&
        moves[i + 3] === "R") ||
      (moves[i] === "L " &&
        moves[i + 1] === "L" &&
        moves[i + 2] === "L" &&
        moves[i + 3] === "L") ||
      (moves[i] === "D " &&
        moves[i + 1] === "D" &&
        moves[i + 2] === "D" &&
        moves[i + 3] === "D") ||
      (moves[i] === "U" &&
        moves[i + 1] === "U" &&
        moves[i + 2] === "U" &&
        moves[i + 3] === "U")
    ) {
      i++;
    } else if (
      moves[i] === moves[i + 1] &&
      moves[i + 1] === moves[i + 2] &&
      moves[i + 2] === moves[i + 3]
    ) {
      i += 3;
    } else if (moves[i] === moves[i + 1] && moves[i + 1] === moves[i + 2]) {
      movesCopy.push(moves[i] + "I");
      i += 2;
    } else {
      movesCopy.push(moves[i]);
    }
  }

  return movesCopy;
}

function solver() {
  deepCopy3D();
  aRcCopy = deepCopy3D();
  let flatColors = aRc.flat(3).map((color) => color[0]);

  let colorCounts = {};
  flatColors.forEach((color) => {
    if (colorCounts[color]) {
      colorCounts[color]++;
    } else {
      colorCounts[color] = 1;
    }
  });

  let allAppearNineTimes = Object.values(colorCounts).every(
    (count) => count === 9
  );

  if (allAppearNineTimes) {
    let nonMatchingCount = 0;

    if (aRc[3][1][0] == "white") {
      nonMatchingCount++;
    }
    if (aRc[3][0][1] == "white") {
      nonMatchingCount++;
    }
    if (aRc[3][1][2] == "white") {
      nonMatchingCount++;
    }
    if (aRc[3][2][1] == "white") {
      nonMatchingCount++;
    }
    if (aRc[0][1][0] == "blue") {
      nonMatchingCount++;
    }
    if (aRc[4][0][1] == "orange") {
      nonMatchingCount++;
    }
    if (aRc[2][1][0] == "green") {
      nonMatchingCount++;
    }
    if (aRc[5][2][1] == "red") {
      nonMatchingCount++;
    }

    if (nonMatchingCount < 8) {
      repeat();
      matchEdges();
      solverCorners();
      solverColorEdges();
      upperCross();
      twoEdgeAlligner();
      allEdgeAlligner();
      cornerCorrectness();
      cornerOrientation();
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 3; j++) {
          for (let k = 0; k < 3; k++) {
            if (!(j === 1 && k === 1)) {
              aRc[i][j][k] = aRcCopy[i][j][k];
            }
          }
        }
      }

      for (let i0 = 0; i0 < 6; i0++) {
        for (let i1 = 0; i1 < 3; i1++) {
          for (let i2 = 0; i2 < 3; i2++) {
            if (!(i1 === 1 && i2 === 1)) {
              const coordinates = [i0, i1, i2];
              const idSticker = "box" + coordinates.join("");
              const stickerElement = document.getElementById(idSticker);
              stickerElement.style.backgroundColor = aRcCopy[i0][i1][i2];
            }
          }
        }
      }
    }
  } else {
    document.getElementById("education").innerHTML =
      "Not solvable.<br> Some colors do not appear 9 times.";
  }
}

function opacityToZero() {
  const arrowU = document.querySelectorAll(".arrowU");
  const arrowUI = document.querySelectorAll(".arrowUI");
  const arrowR = document.querySelectorAll(".arrowR");
  const arrowRI = document.querySelectorAll(".arrowRI");
  const arrowL = document.querySelectorAll(".arrowL");
  const arrowLI = document.querySelectorAll(".arrowLI");
  const arrowF = document.querySelectorAll(".arrowF");
  const arrowFI = document.querySelectorAll(".arrowFI");
  const arrowB = document.querySelectorAll(".arrowB");
  const arrowBI = document.querySelectorAll(".arrowBI");
  const arrowD = document.querySelectorAll(".arrowD");
  const arrowDI = document.querySelectorAll(".arrowDI");

  arrowU.forEach((arrow) => (arrow.style.opacity = 0));
  arrowUI.forEach((arrow) => (arrow.style.opacity = 0));
  arrowR.forEach((arrow) => (arrow.style.opacity = 0));
  arrowRI.forEach((arrow) => (arrow.style.opacity = 0));
  arrowL.forEach((arrow) => (arrow.style.opacity = 0));
  arrowLI.forEach((arrow) => (arrow.style.opacity = 0));
  arrowF.forEach((arrow) => (arrow.style.opacity = 0));
  arrowFI.forEach((arrow) => (arrow.style.opacity = 0));
  arrowB.forEach((arrow) => (arrow.style.opacity = 0));
  arrowBI.forEach((arrow) => (arrow.style.opacity = 0));
  arrowD.forEach((arrow) => (arrow.style.opacity = 0));
  arrowDI.forEach((arrow) => (arrow.style.opacity = 0));
}

function changePropertiesU() {
  opacityToZero();
  const arrows = document.querySelectorAll(".arrowU");
  arrows.forEach((arrow) => {
    arrow.style.opacity = 1;
    document.getElementById("okncek").innerHTML = "U";
  });
}
function changePropertiesUI() {
  opacityToZero();
  const arrows = document.querySelectorAll(".arrowUI");
  arrows.forEach((arrow) => {
    arrow.style.opacity = 1;
    document.getElementById("okncek").innerHTML = "U'";
  });
}
function changePropertiesR() {
  opacityToZero();
  const arrows = document.querySelectorAll(".arrowR");
  arrows.forEach((arrow) => {
    arrow.style.opacity = 1;
    document.getElementById("okncek").innerHTML = "R";
  });
}
function changePropertiesRI() {
  opacityToZero();
  const arrows = document.querySelectorAll(".arrowRI");
  arrows.forEach((arrow) => {
    arrow.style.opacity = 1;
    document.getElementById("okncek").innerHTML = "R'";
  });
}
function changePropertiesL() {
  opacityToZero();
  const arrows = document.querySelectorAll(".arrowL");
  arrows.forEach((arrow) => {
    arrow.style.opacity = 1;
    document.getElementById("okncek").innerHTML = "L";
  });
}
function changePropertiesLI() {
  opacityToZero();
  const arrows = document.querySelectorAll(".arrowLI");
  arrows.forEach((arrow) => {
    arrow.style.opacity = 1;
    document.getElementById("okncek").innerHTML = "L'";
  });
}
function changePropertiesB() {
  opacityToZero();
  const arrows = document.querySelectorAll(".arrowB");
  arrows.forEach((arrow) => {
    arrow.style.opacity = 1;
    document.getElementById("okncek").innerHTML = "B";
  });
}
function changePropertiesBI() {
  opacityToZero();
  const arrows = document.querySelectorAll(".arrowBI");
  arrows.forEach((arrow) => {
    arrow.style.opacity = 1;
    document.getElementById("okncek").innerHTML = "B'";
  });
}
function changePropertiesF() {
  opacityToZero();
  const arrows = document.querySelectorAll(".arrowF");
  arrows.forEach((arrow) => {
    arrow.style.opacity = 1;
    document.getElementById("okncek").innerHTML = "F";
  });
}
function changePropertiesFI() {
  opacityToZero();
  const arrows = document.querySelectorAll(".arrowFI");
  arrows.forEach((arrow) => {
    arrow.style.opacity = 1;
    document.getElementById("okncek").innerHTML = "F'";
  });
}
function changePropertiesD() {
  opacityToZero();
  const arrows = document.querySelectorAll(".arrowD");
  arrows.forEach((arrow) => {
    arrow.style.opacity = 1;
    document.getElementById("okncek").innerHTML = "D";
  });
}
function changePropertiesDI() {
  opacityToZero();
  const arrows = document.querySelectorAll(".arrowDI");
  arrows.forEach((arrow) => {
    arrow.style.opacity = 1;
    document.getElementById("okncek").innerHTML = "D'";
  });
}

function replaceElements() {
  let movesCopy = copyMoves();

  const replacementRules = {
    U: changePropertiesU,
    UI: changePropertiesUI,
    R: changePropertiesR,
    RI: changePropertiesRI,
    L: changePropertiesL,
    LI: changePropertiesLI,
    F: changePropertiesF,
    FI: changePropertiesFI,
    B: changePropertiesB,
    BI: changePropertiesBI,
    D: changePropertiesD,
    DI: changePropertiesDI,
  };

  return movesCopy.map((element) => replacementRules[element]);
}
let i11 = -1;
let i12 = 0;
let movesCopyCount = 0;
let movesCopyArrows = replaceElements();
let countMakeMove = 0;

function doMove() {
  if (movesCopyCount === 0) {
    movesCopy = copyMoves();
    movesCopyCount++;
  }
  if (i11 < movesCopy.length) {
    makeMove(movesCopy[i11]);
  }
  i11++;
  if (countMakeMove == 0) {
    countMakeMove++;
    document.getElementById("steps").innerHTML = "White cross";
    document.getElementById("education").innerHTML =
      "In the beginner's method we first bring the edges on the yellow face  and then bring them down to the white face so it is easier to align them to match the center color, creating a white cross. This involves placing the white edge pieces in such a way that they form a cross with the white center piece as the anchor.";
  }
  if (
    aRc[3][1][0] == "white" &&
    aRc[3][2][1] == "white" &&
    aRc[3][1][2] == "white" &&
    aRc[3][0][1] == "white" &&
    countMakeMove == 1
  ) {
    countMakeMove++;
    document.getElementById("steps").innerHTML = "White corners";
    document.getElementById("education").innerHTML =
      "Place the corner pieces on the white face so that they match the adjacent side colors, completing the first layer.";
  }
  if (
    aRc[3][0][0] == "white" &&
    aRc[3][2][0] == "white" &&
    aRc[3][2][2] == "white" &&
    aRc[3][0][2] == "white" &&
    aRc[0][0][0] == "blue" &&
    aRc[0][2][0] == "blue" &&
    aRc[5][2][0] == "red" &&
    aRc[5][2][2] == "red" &&
    aRc[2][2][2] == "green" &&
    aRc[2][0][2] == "green" &&
    aRc[4][0][2] == "orange" &&
    aRc[4][0][0] == "orange" &&
    countMakeMove == 2
  ) {
    countMakeMove++;
    document.getElementById("steps").innerHTML = "First two layers";
    document.getElementById("education").innerHTML =
      "Focus on solving the middle layer by correctly positioning the edge pieces that have the middle color and matching the side colors. This might involve moving them out of the way temporarily to slot them in correctly during later steps.";
  }

  if (
    aRc[3][0][0] == "white" &&
    aRc[3][2][0] == "white" &&
    aRc[3][2][2] == "white" &&
    aRc[3][0][2] == "white" &&
    aRc[0][0][0] == "blue" &&
    aRc[0][2][0] == "blue" &&
    aRc[5][2][0] == "red" &&
    aRc[5][2][2] == "red" &&
    aRc[2][2][2] == "green" &&
    aRc[2][0][2] == "green" &&
    aRc[4][0][2] == "orange" &&
    aRc[4][0][0] == "orange" &&
    aRc[0][0][1] == "blue" &&
    aRc[0][2][1] == "blue" &&
    aRc[5][1][0] == "red" &&
    aRc[5][1][2] == "red" &&
    aRc[2][0][1] == "green" &&
    aRc[2][2][1] == "green" &&
    aRc[4][1][0] == "orange" &&
    aRc[4][1][2] == "orange" &&
    countMakeMove == 3
  ) {
    countMakeMove++;
    document.getElementById("steps").innerHTML = "Yellow cross";
    document.getElementById("education").innerHTML =
      "On the last layer (in our case yellow face), orient and position the yellow edge pieces to form a yellow cross.";
  }

  if (
    aRc[3][0][0] == "white" &&
    aRc[3][2][0] == "white" &&
    aRc[3][2][2] == "white" &&
    aRc[3][0][2] == "white" &&
    aRc[0][0][0] == "blue" &&
    aRc[0][2][0] == "blue" &&
    aRc[5][2][0] == "red" &&
    aRc[5][2][2] == "red" &&
    aRc[2][2][2] == "green" &&
    aRc[2][0][2] == "green" &&
    aRc[4][0][2] == "orange" &&
    aRc[4][0][0] == "orange" &&
    aRc[0][0][1] == "blue" &&
    aRc[0][2][1] == "blue" &&
    aRc[5][1][0] == "red" &&
    aRc[5][1][2] == "red" &&
    aRc[2][0][1] == "green" &&
    aRc[2][2][1] == "green" &&
    aRc[4][1][0] == "orange" &&
    aRc[4][1][2] == "orange" &&
    aRc[1][1][2] == "yellow" &&
    aRc[1][2][1] == "yellow" &&
    aRc[1][1][0] == "yellow" &&
    aRc[1][0][1] == "yellow" &&
    countMakeMove == 4
  ) {
    countMakeMove++;
    document.getElementById("steps").innerHTML = "Yellow edges";
    document.getElementById("education").innerHTML =
      "Once the yellow cross is finished we have to correctly align their colors to match the center pieces (in our case blue, orange, green and red center)";
  }

  if (
    aRc[3][0][0] == "white" &&
    aRc[3][2][0] == "white" &&
    aRc[3][2][2] == "white" &&
    aRc[3][0][2] == "white" &&
    aRc[0][0][0] == "blue" &&
    aRc[0][2][0] == "blue" &&
    aRc[5][2][0] == "red" &&
    aRc[5][2][2] == "red" &&
    aRc[2][2][2] == "green" &&
    aRc[2][0][2] == "green" &&
    aRc[4][0][2] == "orange" &&
    aRc[4][0][0] == "orange" &&
    aRc[0][0][1] == "blue" &&
    aRc[0][2][1] == "blue" &&
    aRc[5][1][0] == "red" &&
    aRc[5][1][2] == "red" &&
    aRc[2][0][1] == "green" &&
    aRc[2][2][1] == "green" &&
    aRc[4][1][0] == "orange" &&
    aRc[4][1][2] == "orange" &&
    aRc[0][1][2] == "blue" &&
    aRc[4][2][1] == "orange" &&
    aRc[2][1][0] == "green" &&
    aRc[5][0][1] == "red" &&
    countMakeMove == 5
  ) {
    countMakeMove++;
    document.getElementById("steps").innerHTML = "Position yellow corners";
    document.getElementById("education").innerHTML =
      "In this step we have to move the yellow corners to their correct positions. This requires several moves or algorithms to cycle the corners without affecting the rest of the cube.";
  }
  results = checkCorners();

  if (
    aRc[3][0][0] == "white" &&
    aRc[3][2][0] == "white" &&
    aRc[3][2][2] == "white" &&
    aRc[3][0][2] == "white" &&
    aRc[0][0][0] == "blue" &&
    aRc[0][2][0] == "blue" &&
    aRc[5][2][0] == "red" &&
    aRc[5][2][2] == "red" &&
    aRc[2][2][2] == "green" &&
    aRc[2][0][2] == "green" &&
    aRc[4][0][2] == "orange" &&
    aRc[4][0][0] == "orange" &&
    aRc[0][0][1] == "blue" &&
    aRc[0][2][1] == "blue" &&
    aRc[5][1][0] == "red" &&
    aRc[5][1][2] == "red" &&
    aRc[2][0][1] == "green" &&
    aRc[2][2][1] == "green" &&
    aRc[4][1][0] == "orange" &&
    aRc[4][1][2] == "orange" &&
    aRc[0][1][2] == "blue" &&
    aRc[4][2][1] == "orange" &&
    aRc[2][1][0] == "green" &&
    aRc[5][0][1] == "red" &&
    results[1] == "correct" &&
    results[2] == "correct" &&
    results[3] == "correct" &&
    results[4] == "correct" &&
    countMakeMove == 6
  ) {
    countMakeMove++;
    document.getElementById("steps").innerHTML = "Orient yellow corners";
    document.getElementById("education").innerHTML =
      "Turn the top layer to align the yellow corners correctly according to their adjacent side colors. This requires one simple alghorithm (R', D', R, D). Repeat this alghorithm until all of the Yellow Corners are facing up.";
  }
  if (
    aRc[3][0][0] == "white" &&
    aRc[3][2][0] == "white" &&
    aRc[3][2][2] == "white" &&
    aRc[3][0][2] == "white" &&
    aRc[0][0][0] == "blue" &&
    aRc[0][2][0] == "blue" &&
    aRc[5][2][0] == "red" &&
    aRc[5][2][2] == "red" &&
    aRc[2][2][2] == "green" &&
    aRc[2][0][2] == "green" &&
    aRc[4][0][2] == "orange" &&
    aRc[4][0][0] == "orange" &&
    aRc[0][0][1] == "blue" &&
    aRc[0][2][1] == "blue" &&
    aRc[5][1][0] == "red" &&
    aRc[5][1][2] == "red" &&
    aRc[2][0][1] == "green" &&
    aRc[2][2][1] == "green" &&
    aRc[4][1][0] == "orange" &&
    aRc[4][1][2] == "orange" &&
    aRc[0][1][2] == "blue" &&
    aRc[4][2][1] == "orange" &&
    aRc[2][1][0] == "green" &&
    aRc[5][0][1] == "red" &&
    results[1] == "correct" &&
    results[2] == "correct" &&
    results[3] == "correct" &&
    results[4] == "correct" &&
    aRc[1][2][0] == "yellow" &&
    aRc[1][2][2] == "yellow" &&
    aRc[1][0][2] == "yellow" &&
    aRc[1][0][0] == "yellow" &&
    countMakeMove == 7
  ) {
    countMakeMove++;
    document.getElementById("education").innerHTML = "Rubik's Cube is solved";
    document.getElementById("okncek").innerHTML = "";
    document.getElementById("steps").innerHTML = "";
  }

  if (i12 < movesCopy.length) {
    replaceElements()[i12]();
  } else {
    opacityToZero();
  }
  i12++;

  movesToCube3D();
}

function movesToCube3D() {
  for (let i0 = 0; i0 < 6; i0++) {
    for (let i1 = 0; i1 < 3; i1++) {
      for (let i2 = 0; i2 < 3; i2++) {
        if (!(i1 === 1 && i2 === 1)) {
          const coordinates = [i0, i1, i2];
          const idSticker = "box" + coordinates.join("") + "3";
          const stickerElement = document.getElementById(idSticker);
          if (stickerElement) {
            stickerElement.style.backgroundColor = aRc[i0][i1][i2];
          }
        }
      }
    }
  }
}
