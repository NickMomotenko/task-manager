import styled from "styled-components";

export const TextareaWrapp = styled.div`
  width: 100%;
`;

export const TextareaBody = styled.textarea`
  width: 100%;

  font-family: "Poppins";

  background: #ffffff;

  border: 0.8px solid #e0e0e0;
  border-radius: 8px;
  resize: none;
  outline: #2f80ed;

  padding: 12px;

  font-size: 13px;
  color: #bdbdbd;

  min-height: 121px;

  &::placeholder {
    font-size: 13px;
    color: #bdbdbd;
  }

  &:focus,
  &:hover {
    border-color: #2f80ed;
    box-shadow: 0px 4px 6px 3px rgba(45, 83, 219, 0.1);
  }
`;
