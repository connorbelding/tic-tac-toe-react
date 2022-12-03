import { useState } from "react";
import { marks, modes, screens } from "../../constants";
import {
  Form,
  FormScreenWrapper,
  RadioButtonsWrapper,
} from "../../shared-styles/shared-styles";
import { CustomRadioButton } from "../../components";

export default function NameScreen({ setPlayers, playMode, setViewingScreen }) {
  const [playerOneName, setPlayerOneName] = useState("");
  const [playerTwoName, setPlayerTwoName] = useState("");
  const [playerOneMark, setPlayerOneMark] = useState(marks.x);

  function handleSubmit(e) {
    e.preventDefault();

    if (playMode === modes.solo) {
      setPlayers({
        playerOne: {
          name: playerOneName,
          mark: playerOneMark,
        },
        playerTwo: {
          name: "CPU",
          mark: playerOneMark === marks.x ? marks.o : marks.x,
        },
      });
    } else {
      setPlayers({
        playerOne: {
          name: playerOneName,
          mark: playerOneMark,
        },
        playerTwo: {
          name: playerTwoName,
          mark: playerOneMark === marks.x ? marks.o : marks.x,
        },
      });
    }
    setViewingScreen(screens.game);
  }

  function p1msg() {
    if (playMode === modes.solo) return `You will be ${playerOneMark}`;

    return `Player 1 will be ${playerOneMark}`;
  }

  function p2msg() {
    if (playMode === modes.solo)
      return `CPU will be ${playerOneMark === marks.x ? marks.o : marks.x}`;

    return `Player 2 will be ${playerOneMark === marks.x ? marks.o : marks.x}`;
  }

  return (
    <FormScreenWrapper>
      <Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="p1-name">
            {playMode === modes.solo ? "Your name:" : "Player 1 name:"}
          </label>
          <input
            id="p1-name"
            value={playerOneName}
            onChange={(e) => setPlayerOneName(e.target.value)}
          />
        </div>
        {playMode === modes.multi && (
          <div>
            <label htmlFor="p2-name">Player 2 name:</label>
            <input
              id="p2-name"
              value={playerTwoName}
              onChange={(e) => setPlayerTwoName(e.target.value)}
            />
          </div>
        )}
        <RadioButtonsWrapper>
          <CustomRadioButton
            groupName="mark"
            id={marks.x}
            value={marks.x}
            customButtonText="X"
            handleInputChange={() => setPlayerOneMark(marks.x)}
            isChecked={playerOneMark === marks.x}
          />
          <CustomRadioButton
            groupName="mark"
            id={marks.o}
            value={marks.o}
            customButtonText="O"
            handleInputChange={() => setPlayerOneMark(marks.o)}
            isChecked={playerOneMark === marks.o}
          />
        </RadioButtonsWrapper>
        <div>{p1msg()}</div>
        <div>{p2msg()}</div>
        <button type="submit">Play</button>
      </Form>
    </FormScreenWrapper>
  );
}
