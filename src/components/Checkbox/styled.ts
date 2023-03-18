import styled, { css } from "styled-components";

import checkIcon from "../../assets/icons/check.svg";

export const CheckboxWrapp = styled.label``;

export const CheckboxFake = styled.div<{ isChecked: boolean }>`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: #219653;
  border: 1px solid #219653;

  border-radius: 50%;
  position: relative;

  ${({ isChecked }) =>
    !isChecked &&
    css`
      background: transparent;
      border-color: #bdbdbd;
    `}

  &:before {
    content: "";
    display: inline-block;
    width: 8px;
    height: 6.67px;
    background: url(${checkIcon}) center no-repeat;
    background-size: cover;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    visibility: ${({ isChecked }) => (isChecked ? "visible" : "hidden")};
  }
`;

export const CheckboxInput = styled.input`
  display: none;
`;
