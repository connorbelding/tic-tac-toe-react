import { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";

const modes = {
  solo: "solo",
  multi: "multi",
};

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
    <Wrapper>
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
    </Wrapper>
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

const colors = {
  "radio-btn-bg": "rgb(32, 75, 192)",
  "submit-btn-bg": "rgb(41, 41, 41)",
};

const Wrapper = styled.div`
  max-width: 1600px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-family: "Hind Siliguri";
`;

const Form = styled.form`
  background: #fff;
  border-radius: 8px;
  padding: 2.2rem;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.52);
`;

const CenteredMsg = styled.p`
  font-size: ${(props) => `${props.fontSize}`};
  text-align: center;
  font-weight: 500;
`;

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
          background: ${colors["radio-btn-bg"]};
          color: rgba(255, 255, 255, 1);
          border: 2px solid ${colors["radio-btn-bg"]};
        `
      : css`
          background: transparent;
          color: rgba(0, 0, 0, 0.5);
          border: 2px solid rgba(0, 0, 0, 0.5);
        `}
`;

const SubmitButton = styled.button`
  border: 2px solid rgba(0, 0, 0, 0.5);
  color: rgba(0, 0, 0, 0.5);
  padding: 0.4rem 0;
  width: 100%;
  border-radius: 8px;
  user-select: none;
  font-weight: 500;
  font-size: 1.15rem;
  margin: 1rem 0 0 0;
  background: ${colors["submit-btn-bg"]};
  color: #fff;
`;
