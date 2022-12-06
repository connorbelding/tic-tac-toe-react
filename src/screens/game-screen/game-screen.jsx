import React, { useState } from "react";
import propTypes from "prop-types";
import { Board } from "../../components";
import {
  Wrapper,
  ScoresWrapper,
  BoardWrapper,
  QuitWrapper,
  ReplayWindow,
} from "./styles";
import { screens, marks } from "../../constants";

function GameScreen({ playMode, players, setViewingScreen }) {
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [currentPlayer, setCurrentPlayer] = useState(marks.x);
  const [aiTurn, setAiTurn] = useState(false);

  return (
    <Wrapper>
      <ScoresWrapper>
        <div>
          <div>
            {players.playerOne.name} ({players.playerOne.mark.toUpperCase()})
          </div>
          <div>{playerOneScore}</div>
        </div>
        <div>
          <div>
            {players.playerTwo.name} ({players.playerTwo.mark.toUpperCase()})
          </div>
          <div>{playerTwoScore}</div>
        </div>
      </ScoresWrapper>
      <BoardWrapper>
        <Board
          setPlayerOneScore={setPlayerOneScore}
          setPlayerTwoScore={setPlayerTwoScore}
          players={players}
          playMode={playMode}
          gameOver={gameOver}
          setGameOver={setGameOver}
          board={board}
          setBoard={setBoard}
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
          aiTurn={aiTurn}
          setAiTurn={setAiTurn}
        />
      </BoardWrapper>
      <QuitWrapper>
        <button
          onClick={() => {
            setViewingScreen(screens.mode);
          }}
        >
          Quit
        </button>
      </QuitWrapper>
      {gameOver && (
        <ReplayWindow>
          <div>Play again?</div>
          <div>
            <button
              type="button"
              onClick={() => {
                setBoard([
                  ["", "", ""],
                  ["", "", ""],
                  ["", "", ""],
                ]);
                setAiTurn(false);
                setCurrentPlayer(marks.x);
                setGameOver(false);
              }}
            >
              Yes
            </button>
            <button
              type="button"
              onClick={() => {
                setViewingScreen(screens.mode);
              }}
            >
              No
            </button>
          </div>
        </ReplayWindow>
      )}
    </Wrapper>
  );
}

GameScreen.propTypes = {
  playMode: propTypes.string.isRequired,
  players: propTypes.object.isRequired,
  setViewingScreen: propTypes.func.isRequired,
};

export default GameScreen;
