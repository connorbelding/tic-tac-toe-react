import React, { useState } from "react";
import propTypes from "prop-types";
import { marks, modes, screens } from "../../constants";
import {
  Form,
  FormScreenWrapper,
  RadioButtonsWrapper,
  BigButton,
  TextInput,
  CenteredMsg,
} from "../../shared-styles/shared-styles";
import { TextInputLabelWrapper, MarksSelectionWrapper } from "./styles";
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

  return (
    <FormScreenWrapper>
      <Form onSubmit={handleSubmit}>
        <TextInputLabelWrapper>
          <label htmlFor="p1-name">
            {playMode === modes.solo ? "Your name" : "Player 1 name"}
          </label>
          <TextInput
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
            <label htmlFor="p2-name">Player 2 name</label>
            <TextInput
              id="p2-name"
              value={playerTwoName}
              onChange={(e) => setPlayerTwoName(e.target.value)}
              minLength="1"
              maxLength="10"
              required
            />
          </TextInputLabelWrapper>
        )}
        <MarksSelectionWrapper>
          <CenteredMsg>
            {playMode === modes.solo
              ? "Select your mark"
              : "Select player 1 mark"}
          </CenteredMsg>
          <RadioButtonsWrapper screen={screens.name}>
            <CustomRadioButton
              groupName="mark"
              id={marks.x}
              value={marks.x}
              customButtonText="X"
              handleInputChange={() => setPlayerOneMark(marks.x)}
              isChecked={playerOneMark === marks.x}
              screen={screens.name}
            />
            <CustomRadioButton
              groupName="mark"
              id={marks.o}
              value={marks.o}
              customButtonText="O"
              handleInputChange={() => setPlayerOneMark(marks.o)}
              isChecked={playerOneMark === marks.o}
              screen={screens.name}
            />
          </RadioButtonsWrapper>
        </MarksSelectionWrapper>
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
