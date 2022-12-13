import React, { useState } from "react";
import propTypes from "prop-types";
import { modes, screens } from "../../constants";
import { CustomRadioButton } from "../../components";
import {
  FormScreenWrapper,
  Form,
  CenteredMsg,
  RadioButtonsWrapper,
  BigButton,
} from "../../shared-styles/shared-styles";

function ModeScreen({ setPlayMode, setViewingScreen }) {
  const [selectedMode, setSelectedMode] = useState(modes.solo);

  function handleSubmit(e) {
    e.preventDefault();
    setPlayMode(selectedMode);
    setViewingScreen(screens.name);
  }

  function handleInputChange(e) {
    setSelectedMode(e.target.value);
  }

  return (
    <FormScreenWrapper>
      <Form onSubmit={handleSubmit}>
        <CenteredMsg fontSize="1.45rem">Select mode</CenteredMsg>
        <RadioButtonsWrapper screen={screens.mode}>
          <CustomRadioButton
            id={modes.solo}
            value={modes.solo}
            groupName="mode"
            customButtonText="Solo (VS AI)"
            handleInputChange={handleInputChange}
            isChecked={selectedMode === modes.solo}
          />
          <CustomRadioButton
            id={modes.multi}
            value={modes.multi}
            groupName="mode"
            customButtonText="Multiplayer"
            handleInputChange={handleInputChange}
            isChecked={selectedMode === modes.multi}
          />
        </RadioButtonsWrapper>
        <BigButton type="submit">Next</BigButton>
      </Form>
    </FormScreenWrapper>
  );
}

ModeScreen.propTypes = {
  setPlayMode: propTypes.func.isRequired,
  setViewingScreen: propTypes.func.isRequired,
};

export default ModeScreen;
