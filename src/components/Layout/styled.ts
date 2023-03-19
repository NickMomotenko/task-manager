import styled, { css } from "styled-components";

export const RowWrapp = styled.div<{ btw: boolean }>`
  display: flex;
  align-items: center;

  ${({ btw }) =>
    btw &&
    css`
      justify-content: space-between;
    `}
`;
