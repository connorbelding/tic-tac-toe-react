import styled, { css } from "styled-components";
import { colors, screens } from "../constants";

const FormScreenWrapper = styled.div`
  max-width: 1600px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const Form = styled.form`
  background: ${colors.white};
  border-radius: 8px;
  padding: 2.2rem;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.52);
`;

const CenteredMsg = styled.p`
  ${(props) =>
    props.size === "lg"
      ? css`
          font-size: 1.45rem;
        `
      : css`
          font-size: 1.15rem;
        `};
  text-align: center;
  font-weight: 500;
`;

const RadioButtonsWrapper = styled.div`
  display: flex;
  ${(props) => {
    if (props.screen === screens.mode)
      return css`
        gap: 1.2rem;
        @media (max-width: 450px) {
          flex-direction: column;
        }
      `;
    if (props.screen == screens.name)
      return css`
        justify-content: space-around;
      `;
  }}
  margin: 0.75rem 0 0 0;
`;

const BigButton = styled.button`
  border: 2px solid rgba(0, 0, 0, 0.5);
  padding: 0.4rem 0;
  width: 100%;
  border-radius: 8px;
  user-select: none;
  font-weight: 500;
  font-size: 1.15rem;
  margin: 1rem 0 0 0;
  background: ${colors.black};
  color: ${colors.white};
`;

const TextInput = styled.input`
  padding: 0.25rem 0.35rem;
  font-size: 18px;
  border-radius: 5px;
  border: 1px solid ${colors.black};
  transition: border 0.05s, outline 0.05s;
  outline: 0px solid ${colors.lightBlue};
  width: 100%;
  min-width: 200px;
  &:focus-visible {
    border: 1px solid ${colors.lightBlue};
    outline: 2px solid ${colors.lightBlue};
  }
`;

export {
  FormScreenWrapper,
  Form,
  CenteredMsg,
  BigButton,
  RadioButtonsWrapper,
  TextInput,
};
