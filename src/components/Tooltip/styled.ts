import styled, { css } from "styled-components";

export const TooltipWrapp = styled.div<{ position?: string }>`
  --bg: #333333;
  --radius: 4px;
  --color: #f2f2f2;
  --fontSize: 10px;

  background: var(--bg);
  border-radius: var(--radius);
  font-size: var(--fontSize);
  color: var(--color);
  padding: 3.5px 17px;
  display: inline-block;
  white-space: nowrap;
  visibility: hidden;

  position: absolute;

  &:after {
    content: "";
    display: inline-block;
    position: absolute;

    border: var(--radius) solid transparent;
    border-top-color: var(--bg);
  }

  ${({ position }) =>
    position === "top" &&
    css`
      bottom: calc(100% + var(--radius));
      left: 50%;
      transform: translateX(-50%);

      &::after {
        left: 50%;
        top: 100%;
        transform: translateX(-50%);
      }
    `}

  ${({ position }) =>
    position === "left" &&
    css`
      right: calc(100% + var(--radius));
      left: auto;
      top: 50%;
      transform: translateY(-50%);

      &::after {
        top: 50%;
        left: 100%;
        transform: translateY(-50%);
        border-color: transparent;
        border-left-color: var(--bg);
      }
    `}

    ${({ position }) =>
    position === "right" &&
    css`
      left: calc(100% + var(--radius));
      top: 50%;
      transform: translateY(-50%);

      &::after {
        top: 50%;
        right: 100%;
        left: auto;
        transform: translateY(-50%);
        border-top-color: transparent;
        border-right-color: var(--bg);
      }
    `}

    ${({ position }) =>
    position === "bottom" &&
    css`
      top: calc(100% + var(--radius));
      left: 50%;
      transform: translateX(-50%);

      &::after {
        top: auto;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        border-color: transparent;
        border-bottom-color: var(--bg);
      }
    `}
`;
