import React, { useEffect } from "react";
import propTypes from "prop-types";
import { marks } from "../../constants";
import { Wrapper, Tile } from "./styles";
import { checkForDraw, checkForWin, makeMove, determineMove } from "./utils";

function Board({
  setPlayerOneScore,
  setPlayerTwoScore,
  players,
  playMode,
  gameOver,
  setGameOver,
  board,
  setBoard,
  currentPlayer,
  setCurrentPlayer,
  aiTurn,
  setAiTurn,
}) {
  const playerOneMark = players.playerOne.mark;
  const playerTwoMark = players.playerTwo.mark;

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
  }, [
    board,
    players,
    setPlayerOneScore,
    setPlayerTwoScore,
    gameOver,
    setGameOver,
  ]);

  useEffect(() => {
    if (gameOver) return;
    const drawCheck = checkForDraw(board);
    if (drawCheck) {
      console.warn("draw!!!!!!!!!");
      setGameOver(true);
    }
  }, [board, gameOver, setGameOver]);

  useEffect(() => {
    if (playMode === "solo" && !gameOver) {
      if (currentPlayer === playerTwoMark) {
        setAiTurn(true);
      } else {
        setAiTurn(false);
      }
    }
  }, [playMode, currentPlayer, playerTwoMark, gameOver, setAiTurn]);

  useEffect(() => {
    if (gameOver) return;
    let x;
    if (aiTurn) {
      x = setTimeout(() => {
        setBoard((prevState) =>
          determineMove({
            board: prevState,
            cpuMark: playerTwoMark,
            playerMark: playerOneMark,
          })
        );
        setCurrentPlayer((prevState) =>
          prevState === marks.x ? marks.o : marks.x
        );
      }, 1000);
      return () => {
        clearTimeout(x);
      };
    }
  }, [
    aiTurn,
    gameOver,
    playerTwoMark,
    playerOneMark,
    setBoard,
    setCurrentPlayer,
  ]);

  return (
    <Wrapper>
      {board.map((row, rowIndex) => {
        return row.map((tile, tileIndex) => {
          function handleClick() {
            setBoard(
              makeMove({
                board,
                mark: currentPlayer,
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
              disabled={tile || gameOver || aiTurn}
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
  gameOver: propTypes.bool.isRequired,
  setGameOver: propTypes.func.isRequired,
  board: propTypes.array.isRequired,
  setBoard: propTypes.func.isRequired,
  currentPlayer: propTypes.string.isRequired,
  setCurrentPlayer: propTypes.func.isRequired,
  aiTurn: propTypes.bool.isRequired,
  setAiTurn: propTypes.func.isRequired,
};

export default Board;
