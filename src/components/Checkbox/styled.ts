import styled, { css } from "styled-components";

import checkIcon from "../../assets/icons/check.svg";

export const CheckboxWrapp = styled.label``;

export const CheckboxFake = styled.div<{ isChecked: boolean; view?: string }>`
  --size: 16px;
  --bg-circle: #219653;
  --bg-round: #08a0f7;
  --radius-round: 4px;

  display: inline-block;
  width: var(--size);
  height: var(--size);
  background: var(--bg-circle);
  border: 1px solid var(--bg-circle);

  border-radius: 50%;
  position: relative;

  ${({ isChecked, view }) =>
    !isChecked &&
    view === "circle" &&
    css`
      background: transparent;
      border-color: var(--bg-circle);
    `}

  ${({ view }) =>
    view === "round" &&
    css`
      border-radius: var(--radius-round);
      background: var(--bg-round);
      border-color: var(--bg-round);
    `}

  ${({ isChecked, view }) =>
    !isChecked &&
    view === "round" &&
    css`
      background: transparent;
      border-color: var(--bg-round);
    `}

  &:before {
    --icon-h: 6.67px;
    --icon-w: 8px;
    content: "";
    display: inline-block;
    width: var(--icon-w);
    height: var(--icon-h);
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
