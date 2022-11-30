import { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";

const modes = {
  solo: "solo",
  multi: "multi",
};

export default function ModeScreen() {
  const [selectedMode, setSelectedMode] = useState(modes.solo);

  const soloRadioRef = useRef();
  const multiRadioRef = useRef();

  useEffect(() => {
    console.log(selectedMode);
  }, [selectedMode]);

  return (
    <Wrapper>
      <Form>
        <CenteredMsg fontSize="1.45rem">Select mode</CenteredMsg>
        <RadioBtnsWrapper>
          <RadioBtnWrapper>
            <label for="solo">Solo (VS CPU)</label>
            <input
              ref={soloRadioRef}
              type="radio"
              name="mode"
              id="solo"
              value={modes.solo}
              checked={selectedMode === modes.solo}
              onChange={() => setSelectedMode(soloRadioRef.current.value)}
            />
            <button type="button" isSelected={selectedMode === modes.solo}>
              Solo
            </button>
          </RadioBtnWrapper>
          <RadioBtnWrapper>
            <label for="multi">Multiplayer</label>
            <input
              ref={multiRadioRef}
              type="radio"
              name="mode"
              id="multi"
              value={modes.multi}
              checked={selectedMode === modes.multi}
              onChange={() => setSelectedMode(multiRadioRef.current.value)}
            />
            <button type="button" isSelected={selectedMode === modes.multi}>
              Multi
            </button>
          </RadioBtnWrapper>
        </RadioBtnsWrapper>
        <SubmitBtn type="submit">Next</SubmitBtn>
      </Form>
    </Wrapper>
  );
}

const styledVariables = {
  bgGradientOne: "rgba(56, 47, 88, 1)",
  bgGradientTwo: "rgba(148, 141, 238, 1)",
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
  padding: 1.5rem;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.52);
`;

const CenteredMsg = styled.p`
  font-size: ${(props) => `${props.fontSize}`};
  text-align: center;
`;

const RadioBtnsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin: 0.5rem 0 0 0;
`;

const hiddenStyles = css`
  height: 0;
  width: 0;
  position: absolute;
  top: -99999px;
  left: -99999px;
`;

const RadioBtnWrapper = styled.div`
  & label,
  input {
    ${hiddenStyles}
  }
  & button {
    border: 2px solid rgba(0, 0, 0, 0.5);
    color: rgba(0, 0, 0, 0.5);
    padding: 0.4rem 0.7rem;
    border-radius: 8px;
    user-select: none;
    font-weight: 500;
  }
`;

const SubmitBtn = styled.button`
  border: 2px solid rgba(0, 0, 0, 0.5);
  color: rgba(0, 0, 0, 0.5);
  padding: 0.4rem 0.7rem;
  border-radius: 8px;
  user-select: none;
  font-weight: 500;
`;
