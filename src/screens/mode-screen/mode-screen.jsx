import { useState } from "react";
import { modes } from "../../constants";
import { CustomRadioButton } from "../../components";
import {
  FormScreenWrapper,
  Form,
  CenteredMsg,
  RadioButtonsWrapper,
  SubmitButton,
} from "../../shared-styles/shared-styles";

export default function ModeScreen() {
  const [selectedMode, setSelectedMode] = useState(modes.solo);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(selectedMode);
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
            mode={modes.solo}
            groupName="mode"
            customButtonText="Solo (VS AI)"
            handleInputChange={handleInputChange}
            isChecked={selectedMode === modes.solo}
          />
          <CustomRadioButton
            mode={modes.multi}
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
