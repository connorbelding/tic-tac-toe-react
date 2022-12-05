import styled from "styled-components";

export const Wrapper = styled.div`
  height: 300px;
  width: 300px;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  border: 2px solid black;
`;
