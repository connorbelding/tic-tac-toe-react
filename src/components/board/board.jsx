import React, { useState, useEffect, useCallback } from "react";
import propTypes from "prop-types";
import { marks } from "../../constants";
import { Wrapper, Tile } from "./styles";
import { checkForDraw, checkForWin, makeMove, determineMove } from "./utils";

function Board({ setPlayerOneScore, setPlayerTwoScore, players, playMode }) {
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [currentPlayer, setCurrentPlayer] = useState(marks.x);
  const [aiTurn, setAiTurn] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const playerOneMark = players.playerOne.mark;
  const playerTwoMark = players.playerTwo.mark;

  useEffect(() => {
    if (gameOver) {
      console.log("gameOver", gameOver);
    }
  }, [gameOver]);

  useEffect(() => {
    if (gameOver) return;
    const winCheck = checkForWin(board);
    if (winCheck) {
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
      console.warn("winning!!!!");
      setGameOver(true);
    }
  }, [board, players, setPlayerOneScore, setPlayerTwoScore, gameOver]);

  useEffect(() => {
    if (gameOver) return;
    const drawCheck = checkForDraw(board);
    if (drawCheck) {
      console.warn("draw!!!!!!!!!");
      setGameOver(true);
    }
  }, [board, gameOver]);

  useEffect(() => {
    if (playMode === "solo" && !gameOver) {
      if (currentPlayer === playerTwoMark) {
        setAiTurn(true);
      } else {
        setAiTurn(false);
      }
    }
  }, [playMode, currentPlayer, playerTwoMark, gameOver]);

  useEffect(() => {
    if (gameOver) return;
    if (aiTurn) {
      console.log("ai turn :)");
    } else {
      console.log("not ai turn :(");
    }
  }, [aiTurn, gameOver]);

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
              disabled={tile || gameOver}
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

Board.propTypes = {
  setPlayerOneScore: propTypes.func.isRequired,
  setPlayerTwoScore: propTypes.func.isRequired,
  playMode: propTypes.string.isRequired,
  players: propTypes.object.isRequired,
};

export default Board;
