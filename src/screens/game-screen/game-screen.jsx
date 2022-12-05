import { useState, useEffect } from "react";
import { Board } from "../../components";
import { Wrapper, ScoresWrapper, BoardWrapper, QuitWrapper } from "./styles";
import { screens } from "../../constants";

export default function GameScreen({ playMode, players, setViewingScreen }) {
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);

  useEffect(() => {
    console.log({ players, playMode });
  }, [players, playMode]);

  return (
    <Wrapper>
      <ScoresWrapper>
        <div>
          <div>
            {players.playerOne.name} ({players.playerOne.mark.toUpperCase()})
          </div>
          <div>
            {playerOneScore}
          </div>
        </div>
        <div>
          <div>{players.playerTwo.name} ({players.playerTwo.mark.toUpperCase()})</div>
          <div>{playerTwoScore}</div>
        </div>
      </ScoresWrapper>
      <BoardWrapper>
        <Board
          setPlayerOneScore={setPlayerOneScore}
          setPlayerTwoScore={setPlayerTwoScore}
          players={players}
          playMode={playMode}
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
    </Wrapper>
  );
}
