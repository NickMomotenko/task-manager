import styled from "styled-components";

export const InputWrapp = styled.div``;

export const InputBody = styled.input`
  color: #aaadb7;
  background: rgb(244, 247, 252);
  border-radius: 28px;
  border: 1px solid transparent;
  outline: none;
  padding: 9px 20px;

  &::placeholder {
    color: #aaadb7;
  }

  &:focus {
    border-color: #e2e2e2;
  }
`;
