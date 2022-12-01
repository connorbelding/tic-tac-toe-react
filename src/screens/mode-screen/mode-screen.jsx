import { useState, useRef, useEffect } from "react";
import { modes, colors } from "../../constants";
import {
  FormScreenWrapper,
  Form,
  CenteredMsg,
  SubmitButton,
} from "../../shared-styles/shared-styles";
import styled, { css } from "styled-components";

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
          <CustomButtonAccesible
            mode={modes.solo}
            groupName="mode"
            customButtonText="Solo (VS AI)"
            handleInputChange={handleInputChange}
            isChecked={selectedMode === modes.solo}
          />
          <CustomButtonAccesible
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

function CustomButtonAccesible({
  groupName,
  mode,
  customButtonText,
  handleInputChange,
  isChecked,
}) {
  const inputRef = useRef();

  function handleCustomButtonClick() {
    inputRef.current.click();
  }

  return (
    <RadioButtonWrapper>
      <label htmlFor={mode}>{customButtonText}</label>
      <input
        ref={inputRef}
        type="radio"
        name={groupName}
        id={mode}
        value={mode}
        checked={isChecked}
        onChange={handleInputChange}
      />
      <RadioButton
        type="button"
        isSelected={isChecked}
        onClick={handleCustomButtonClick}
      >
        {customButtonText}
      </RadioButton>
    </RadioButtonWrapper>
  );
}

const RadioButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  margin: 0.75rem 0 0 0;
`;

const RadioButtonWrapper = styled.div`
  & label,
  input {
    height: 0;
    width: 0;
    position: absolute;
    top: -99999px;
    left: -99999px;
  }
`;

const RadioButton = styled.button`
  padding: 0.4rem 0.7rem;
  border-radius: 8px;
  user-select: none;
  font-weight: 500;
  font-size: 1.15rem;
  ${(props) =>
    props.isSelected
      ? css`
          background: ${colors.blue};
          color: rgba(255, 255, 255, 1);
          border: 2px solid ${colors.blue};
        `
      : css`
          background: transparent;
          color: ${colors.grey};
          border: 2px solid ${colors.grey};
        `}
`;
