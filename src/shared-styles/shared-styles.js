import styled from "styled-components";
import { colors } from "../constants";

const FormScreenWrapper = styled.div`
  max-width: 1600px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const Form = styled.form`
  background: #fff;
  border-radius: 8px;
  padding: 2.2rem;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.52);
`;

const CenteredMsg = styled.p`
  font-size: ${(props) => `${props.fontSize}`};
  text-align: center;
  font-weight: 500;
`;

const SubmitButton = styled.button`
  border: 2px solid rgba(0, 0, 0, 0.5);
  color: rgba(0, 0, 0, 0.5);
  padding: 0.4rem 0;
  width: 100%;
  border-radius: 8px;
  user-select: none;
  font-weight: 500;
  font-size: 1.15rem;
  margin: 1rem 0 0 0;
  background: ${colors.black};
  color: #fff;
`;

export { FormScreenWrapper, Form, CenteredMsg, SubmitButton };
