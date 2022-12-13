import styled from "styled-components";
import { colors } from "../../constants";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  border: 2px solid ${colors.lightGrey};
  background: ${colors.lightGrey};
  gap: 3px;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.52);
  @media (min-width: 900px) {
    height: 400px;
    width: 400px;
    font-size: 68px;
  }
  @media (min-width: 600px) and (max-width: 899px) {
    height: 350px;
    width: 350px;
    font-size: 58px;
  }
  @media (max-width: 599px) {
    height: 300px;
    width: 300px;
    font-size: 48px;
  }
`;

export const Tile = styled.button`
  font-size: 1em;
  font-weight: 500;
  background: ${colors.white};
  color: ${(props) => (props.mark === "x" ? "red" : "blue")};
  &:disabled {
    background: ${colors.white};
  }
`;
