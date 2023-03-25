import styled, { css } from "styled-components";

export const ButtonWrapp = styled.button<{ view: string; size: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: var(--button-color);
  background: var(--button-bg);
  border-radius: var(--button-radius);

  font-weight: 700;
  font-size: var(--button-font-size);

  padding: var(--button-m-padding);
  max-width: 302px;

  ${({ view }) =>
    view === "ghost" &&
    css`
      --button-color: #2f80ed;
      font-weight: 500;
      background: transparent;
      border-radius: 0;
      padding: 0;
    `}

  ${({ size }) =>
    size === "s" &&
    css`
      padding: var(--button-s-padding);
      font-size: 12px;
      font-weight: 500;
    `}

  ${({ size }) =>
    size === "b" &&
    css`
      padding: var(--button-b-padding);
    `}
`;
