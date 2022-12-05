import { useState, useEffect, useCallback } from "react";
import { marks, potentialWins } from "../../constants";
import { Wrapper, Tile } from "./styles";

export default function Board({
  setPlayerOneScore,
  setPlayerTwoScore,
  players,
  playMode,
}) {
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const [currentPlayer, setCurrentPlayer] = useState(marks.x);

  const resetGame = useCallback(() => {
    setBoard([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setCurrentPlayer(marks.x);
  }, [setCurrentPlayer]);

  useEffect(() => {
    const winCheck = checkForWin(board);
    if (winCheck) {
      setTimeout(() => {
        const winningMark = winCheck.mark;

        for (const player in players) {
          if (players[player].mark === winningMark) {
            if (player === "playerOne") {
              setPlayerOneScore((prevState) => prevState + 1);
            } else {
              setPlayerTwoScore((prevState) => prevState + 1);
            }
          }
        }
        resetGame();
      }, 0);
    }
  }, [board, resetGame, players]);
  //HERE

  useEffect(() => {
    const drawCheck = checkForDraw(board);
    if (drawCheck) {
      setTimeout(() => {
        window.alert("draw!!!!!!!!!");
        resetGame();
      }, 0);
    }
  }, [board, resetGame]);

  return (
    <Wrapper>
      {board.map((row, rowIndex) => {
        return row.map((tile, tileIndex) => {
          function handleClick() {
            setBoard(
              makeMove({
                board,
                playerMark: currentPlayer,
                tileCol: tileIndex,
                tileRow: rowIndex,
              })
            );
            setCurrentPlayer((prevState) =>
              prevState === marks.x ? marks.o : marks.x
            );
          }
          return (
            <Tile
              key={`${rowIndex}${tileIndex}`}
              disabled={tile}
              onClick={handleClick}
              data-mark={tile}
              mark={tile}
            >
              {tile}
            </Tile>
          );
        });
      })}
    </Wrapper>
  );
}

function checkForWin(board) {
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

function checkForDraw(board) {
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

function makeMove({ board, playerMark, tileRow, tileCol }) {
  return board.map((boardRow, boardRowIndex) => {
    return boardRow.map((boardCol, boardColIndex) => {
      if (boardRowIndex === tileRow && boardColIndex === tileCol) {
        if (!boardCol) return playerMark;
      }
      return boardCol;
    });
  });
}
