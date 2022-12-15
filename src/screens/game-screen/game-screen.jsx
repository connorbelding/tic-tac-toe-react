import React, { useState } from "react";
import propTypes from "prop-types";
import { Board } from "../../components";
import {
  Wrapper,
  ScoresWrapper,
  BoardWrapper,
  QuitWrapper,
  ReplayWindow,
  ScoreCard,
  ScoreCardName,
  ScoreCardNum,
  MarkText,
  ReplayMessage,
  ReplayButton,
  ReplayButtonsWrapper,
  QuitButton,
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
        <ScoreCard>
          <ScoreCardName>
            {players.playerOne.name} (
            <MarkText mark={players.playerOne.mark}>
              {players.playerOne.mark.toUpperCase()}
            </MarkText>
            )
          </ScoreCardName>
          <ScoreCardNum>{playerOneScore}</ScoreCardNum>
        </ScoreCard>
        <ScoreCard>
          <ScoreCardName>
            {players.playerTwo.name} (
            <MarkText mark={players.playerTwo.mark}>
              {players.playerTwo.mark.toUpperCase()}
            </MarkText>
            )
          </ScoreCardName>
          <ScoreCardNum>{playerTwoScore}</ScoreCardNum>
        </ScoreCard>
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
        <QuitButton
          onClick={() => {
            setViewingScreen(screens.mode);
          }}
        >
          Quit
        </QuitButton>
      </QuitWrapper>
      {gameOver && (
        <ReplayWindow>
          <ReplayMessage>Play again?</ReplayMessage>
          <ReplayButtonsWrapper>
            <ReplayButton
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
            </ReplayButton>
            <ReplayButton
              type="button"
              onClick={() => {
                setViewingScreen(screens.mode);
              }}
            >
              No
            </ReplayButton>
          </ReplayButtonsWrapper>
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
