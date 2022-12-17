import styled, { css } from "styled-components";
import { colors, screens } from "../../constants";

export const RadioButtonWrapper = styled.div`
  & label,
  input {
    height: 0;
    width: 0;
    position: absolute;
    top: -99999px;
    left: -99999px;
  }
`;

export const RadioButton = styled.button`
  border-radius: 8px;
  user-select: none;
  font-weight: 500;
  font-size: 1.15rem;
  ${(props) =>
    props.screen === screens.mode
      ? css`
          font-size: 1.15rem;
          padding: 0.4rem 0.7rem;
        `
      : css`
          font-size: 1.8rem;
          padding: 0.5rem 0.9rem;
        `}
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
