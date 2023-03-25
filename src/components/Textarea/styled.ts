import styled from "styled-components";

export const TextareaWrapp = styled.label<{ isFocused: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #ffffff;
  border: 0.8px solid #e0e0e0;
  border-radius: 8px;
  padding: 12px;
  min-height: 121px;

  &:focus,
  &:hover {
    border-color: #2f80ed;
    box-shadow: 0px 4px 6px 3px rgba(45, 83, 219, 0.1);
  }
`;

export const TextareaBody = styled.textarea`
  display: block;
  flex: 1;

  font-size: 13px;
  color: #bdbdbd;

  &::placeholder {
    font-size: 13px;
    color: #bdbdbd;
  }
`;
