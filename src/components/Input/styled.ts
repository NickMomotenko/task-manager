import styled from "styled-components";

export const InputWrapp = styled.label`
  position: relative;
  display: block;
`;

export const InputBody = styled.input`
  width: 100%;
  color: #aaadb7;
  background: rgb(244, 247, 252);
  border-radius: 28px;
  border: 1px solid transparent;
  outline: none;
  padding: 9px 20px 9px 50px;

  font-family: "Poppins", sans-serif;

  &::placeholder {
    color: #aaadb7;
  }

  &:focus {
    border-color: #e2e2e2;
  }
`;

export const InputIcon = styled.div`
  position: absolute;
  top: 59%;
  left: 15px;
  transform: translateY(-50%);
  display: inline-block;
`;
