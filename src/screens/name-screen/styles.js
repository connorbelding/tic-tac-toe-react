import styled from "styled-components";

export const TextInputLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  &:not(:first-child) {
    margin: 0.3rem 0 0 0;
  }
`;

export const MessagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  margin: 0.3rem 0 0 0;
`;
