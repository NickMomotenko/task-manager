import styled, { css } from "styled-components";

export const ButtonWrapp = styled.button<{ view: string }>`
  background: #2f80ed;
  border-radius: 8px;

  font-weight: 700;
  font-size: 13px;
  color: #f2f2f2;

  padding: 14px 36px;
  max-width: 302px;

  ${({ view }) =>
    view === "ghost" &&
    css`
      font-size: 13px;
      color: #2f80ed;
      font-weight: 500;
      background: transparent;
      border-radius: 0;
      padding:0;
    `}
`;
