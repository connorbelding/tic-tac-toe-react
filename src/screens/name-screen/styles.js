import styled from "styled-components";

export const TextInputLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  &:not(:first-child) {
    margin: 0.45rem 0 0 0;
  }
  & label {
    width: fit-content;
    font-weight: 500;
  }
`;
export const MarksSelectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin: 0.9rem 0 0 0;
`;

export const MessageWrapper = styled.div`
  font-weight: 500;
`;
