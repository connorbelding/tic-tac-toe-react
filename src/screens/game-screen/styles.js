import styled from "styled-components";

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
