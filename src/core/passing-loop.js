let train1 = ["A", "A", "A", "A", "A", "A", "B"];
let train2 = ["Y", "X", "X", "X", "X", "X", "X"];

const lineSize = 40;
const loopSize = 4;
const loopStartPosition = 18;

let lineDisplay = [[], [], []];

function generateLine(lineSize, loopSize, loopStartPosition, lineDisplay) {
  for (let index = 1; index <= lineSize; index++) {
    if (index + 1 == loopStartPosition) {
      lineDisplay[1].push("║");
      lineDisplay[0].push("╝");
    } else if (index == loopStartPosition + loopSize) {
      lineDisplay[1].push("║");
      lineDisplay[0].push("╚");
    } else {
      lineDisplay[1].push(" ");
      lineDisplay[0].push("═");
    }

    if (index + 1 == loopStartPosition) {
      lineDisplay[2].push("╔");
    } else if (index == loopStartPosition + loopSize) {
      lineDisplay[2].push("╗");
    } else if (
      index >= loopStartPosition &&
      index <= loopStartPosition + loopSize
    ) {
      lineDisplay[2].push("═");
    } else {
      lineDisplay[2].push(" ");
    }
  }
}

// generateLine(lineSize, loopSize, loopStartPosition, lineDisplay);

// console.log(lineDisplay[2].join(""));
// console.log(lineDisplay[1].join(""));
// console.log(lineDisplay[0].join(""));

// let updateArray = (lineDisplay, train, trainStartPosition) =>
//   lineDisplay.map((value, index) =>
//     index >= trainStartPosition && index < trainStartPosition + train.length
//       ? train[index - trainStartPosition]
//       : value
//   );

// let updatedLineDisplay = updateArray(lineDisplay[0], train1, 3);

// updatedLineDisplay = updateArray(updatedLineDisplay, train2, 25);

// console.log(lineDisplay[2].join(""));
// console.log(lineDisplay[1].join(""));
// console.log(updatedLineDisplay.join(""));
