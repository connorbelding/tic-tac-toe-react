import React, { useState } from "react";
import propTypes from "prop-types";
import { marks, modes, screens } from "../../constants";
import {
  Form,
  FormScreenWrapper,
  RadioButtonsWrapper,
  BigButton,
} from "../../shared-styles/shared-styles";
import { TextInputLabelWrapper, MessagesWrapper } from "./styles";
import { CustomRadioButton } from "../../components";

function NameScreen({ setPlayers, playMode, setViewingScreen }) {
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
        <TextInputLabelWrapper>
          <label htmlFor="p1-name">
            {playMode === modes.solo ? "Your name:" : "Player 1 name:"}
          </label>
          <input
            id="p1-name"
            value={playerOneName}
            onChange={(e) => setPlayerOneName(e.target.value)}
            minLength="1"
            maxLength="10"
            required
          />
        </TextInputLabelWrapper>
        {playMode === modes.multi && (
          <TextInputLabelWrapper>
            <label htmlFor="p2-name">Player 2 name:</label>
            <input
              id="p2-name"
              value={playerTwoName}
              onChange={(e) => setPlayerTwoName(e.target.value)}
              minLength="1"
              maxLength="10"
              required
            />
          </TextInputLabelWrapper>
        )}
        <RadioButtonsWrapper screen={screens.name}>
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
        <MessagesWrapper>
          <div>{p1msg()}</div>
          <div>{p2msg()}</div>
        </MessagesWrapper>
        <BigButton type="submit">Play</BigButton>
      </Form>
    </FormScreenWrapper>
  );
}

NameScreen.propTypes = {
  setPlayers: propTypes.func.isRequired,
  playMode: propTypes.string.isRequired,
  setViewingScreen: propTypes.func.isRequired,
};

export default NameScreen;
