import { potentialWins } from "../../constants";

export function aiMoveCheck({ mode, board, cpuMark, playerMark }) {
  if (mode !== "block" && mode !== "win") throw new Error("invalid mode");

  const modeArr = [];

  for (let i = 0; i < potentialWins.length; i++) {
    const split = potentialWins[i].split("/");
    const arr = [];
    split.forEach((coords) => {
      const [row, col] = coords.split(",");
      arr.push({
        tile: board[Number(row)][Number(col)],
        rowIndex: Number(row),
        colIndex: Number(col),
      });
    });

    let cpuMarkCount = 0;
    let playerMarkCount = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j].tile === cpuMark) cpuMarkCount++;
      if (arr[j].tile === playerMark) playerMarkCount++;
    }

    if (mode === "win") {
      if (cpuMarkCount === 2 && playerMarkCount === 0) {
        modeArr.push(potentialWins[i]);
      }
    } else {
      if (cpuMarkCount === 0 && playerMarkCount === 2) {
        modeArr.push(potentialWins[i]);
      }
    }
  }

  if (modeArr.length === 0) return false;
  if (modeArr.length === 1) {
    const [x] = modeArr;

    const split = x.split("/");
    for (let i = 0; i < split.length; i++) {
      const [row, col] = split[i].split(",");
      if (!board[row][col]) return { rowIndex: row, colIndex: col };
    }
    return x;
  }

  const random = Math.floor(Math.random() * modeArr.length);

  const x = modeArr[random];

  const split = x.split("/");
  for (let i = 0; i < split.length; i++) {
    const [row, col] = split[i];
    if (!board[row][col]) return { rowIndex: row, colIndex: col };
  }
  return x;
}

export function makeRandomMove(board) {
  const openMoves = [];

  board.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      if (!col) {
        openMoves.push({ rowIndex, colIndex });
      }
    });
  });

  const random = Math.floor(Math.random() * openMoves.length);
  return openMoves[random];
}
