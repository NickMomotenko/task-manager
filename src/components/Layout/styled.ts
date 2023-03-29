import styled, { css } from "styled-components";

export const RowWrapp = styled.div<{ gorizontalSpace: string }>`
  display: flex;
  align-items: center;

  ${({ gorizontalSpace }) =>
    gorizontalSpace === "between" &&
    css`
      justify-content: space-between;
    `}
`;
