//import { useState, useEffect } from "react";
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
      if (!board[row][col])
        return { rowIndex: Number(row), colIndex: Number(col) };
    }
    return x;
  }

  const random = Math.floor(Math.random() * modeArr.length);

  const x = modeArr[random];

  const split = x.split("/");
  for (let i = 0; i < split.length; i++) {
    const [row, col] = split[i].split(",");
    if (!board[row][col])
      return { rowIndex: Number(row), colIndex: Number(col) };
  }
  return x;
}

export function pickRandomMove(board) {
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

export function checkForWin(board) {
  let win = {};

  for (let i = 0; i < potentialWins.length; i++) {
    const split = potentialWins[i].split("/");
    const arr = [];
    split.forEach((coords) => {
      const [row, col] = coords.split(",");
      arr.push(board[Number(row)][Number(col)]);
    });
    const [first, second, third] = arr;
    if (first && second && third && first === second && second === third) {
      win.coords = potentialWins[i];
      win.mark = first;
    }
    if (win.coords && win.mark) return win;
  }

  return false;
}

export function checkForDraw(board) {
  function checkWinConAvailable(potentialWin) {
    let mark;
    let isAvailable = true;

    const split = potentialWin.split("/");
    const arr = [];
    split.forEach((coords) => {
      const [row, col] = coords.split(",");
      arr.push(board[Number(row)][Number(col)]);
    });
    arr.forEach((tile) => {
      if (tile && !mark) mark = tile;

      if (tile !== mark && tile !== "") isAvailable = false;
    });

    return isAvailable;
  }

  let drawGame = true;

  for (let i = 0; i < potentialWins.length; i++) {
    let check = checkWinConAvailable(potentialWins[i]);
    if (check) {
      drawGame = false;
      break;
    }
  }

  return drawGame;
}

export function determineMove({ board, cpuMark, playerMark }) {
  const winMove = aiMoveCheck({ mode: "win", board, cpuMark, playerMark });
  if (winMove) return winMove;
  const blockMove = aiMoveCheck({ mode: "block", board, cpuMark, playerMark });
  if (blockMove) return blockMove;
  const randomMove = pickRandomMove(board);
  return randomMove;
}

export function makeMove({ board, playerMark, tileRow, tileCol }) {
  return board.map((boardRow, boardRowIndex) => {
    return boardRow.map((boardCol, boardColIndex) => {
      if (boardRowIndex === tileRow && boardColIndex === tileCol) {
        if (!boardCol) return playerMark;
      }
      return boardCol;
    });
  });
}
/* 
export function useAiThinking({
  board,
  currentPlayer,
  cpuMark,
  playerMark,
  playMode,
}) {
  const [thinking, setThinking] = useState(false);
  const [aiMove, setAiMove] = useState(null);

  useEffect(() => {
    if (playMode !== modes.solo) return;
    if (currentPlayer === cpuMark) {
      setThinking(true);
      const move = determineMove({ board, cpuMark, playerMark });
      setAiMove(move);
    } else {
      setThinking(false);
      setAiMove(null);
    }
  }, [cpuMark, currentPlayer, playMode, playerMark, board]);
  return { thinking, aiMove };
}
 */
/* export function useAiThinking({ currentPlayer, cpuMark, playMode }) {
  const [thinking, setThinking] = useState(false);

  useEffect(() => {
    if (playMode !== modes.solo) return;
    if (currentPlayer === cpuMark) {
      setThinking(true);
    } else {
      setThinking(false);
    }
  }, [cpuMark, currentPlayer, playMode]);
  return thinking;
}

export function useAiMove({ thinking, board, cpuMark, playerMark }) {
  const [aiMove, setAiMove] = useState(null);

  useEffect(() => {
    console.log("thinking var in useaimove hook", thinking);
    if (thinking) {
      const move = determineMove({ board, cpuMark, playerMark });
      setAiMove(move);
    } else {
      setAiMove(null);
    }
  }, [thinking, board, cpuMark, playerMark]);
  return aiMove;
}
 */
