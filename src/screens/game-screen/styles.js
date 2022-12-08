import styled from "styled-components";
import { colors } from "../../constants";

export const Wrapper = styled.div`
  max-width: 1600px;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 1rem;
  position: relative;
`;

export const ScoresWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const BoardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QuitWrapper = styled.div``;

export const ReplayWindow = styled.form`
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

export const ScoreCard = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  background: ${colors.white};
  border-radius: 8px;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.52);
`;

export const ScoreCardName = styled.div`
  font-weight: 500;
  font-size: 21px;
`;
export const ScoreCardNum = styled.div`
  font-weight: 500;
  font-size: 32px;
  text-align: center;
`;

export const MarkText = styled.span`
  color: ${(props) => (props.mark === "x" ? "red" : "blue")};
`;
