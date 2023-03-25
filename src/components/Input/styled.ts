import styled from "styled-components";

export const InputWrapp = styled.label`
  display: flex;
  align-items: center;

  background: rgb(244, 247, 252);
  border-radius: 28px;
  border: 1px solid transparent;
  padding: 9px 20px 9px 20px;

  &:focus {
    border-color: #e2e2e2;
  }

  &:active {
    border-color: #e2e2e2;
  }
`;

export const InputBody = styled.input`
  color: #aaadb7;

  &::placeholder {
    color: #aaadb7;
  }
`;

export const InputIcon = styled.span`
  --icon-size: 20px;

  display: inline-block;
  margin-right: 12px;
  height: var(--input-icon);
  width: var(--input-icon);

  img {
    max-width: 100%;
  }
`;
