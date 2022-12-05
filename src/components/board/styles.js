import styled from "styled-components";
import { colors } from "../../constants";

export const Wrapper = styled.div`
  height: 300px;
  width: 300px;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  border: 2px solid ${colors.lightGrey};
  background: ${colors.lightGrey};
  gap: 3px;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.52);
`;

export const Tile = styled.button`
  font-size: 42px;
  font-weight: 500;
  background: ${colors.white};
  color: ${(props) => (props.mark === "x" ? "red" : "blue")};
  &:disabled {
    background: ${colors.white};
  }
`;
