import { useState } from "react";
import { modes, screens } from "../../constants";
import { CustomRadioButton } from "../../components";
import {
  FormScreenWrapper,
  Form,
  CenteredMsg,
  RadioButtonsWrapper,
  SubmitButton,
} from "../../shared-styles/shared-styles";

export default function ModeScreen({ setPlayMode, setViewingScreen }) {
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
        <RadioButtonsWrapper>
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
        <SubmitButton type="submit">Next</SubmitButton>
      </Form>
    </FormScreenWrapper>
  );
}
