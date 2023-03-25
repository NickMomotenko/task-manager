import styled, { css } from "styled-components";

export const RowWrapp = styled.div<{ verticalSpace: string }>`
  display: flex;
  align-items: center;

  ${({ verticalSpace }) =>
    verticalSpace === "between" &&
    css`
      justify-content: space-between;
    `}
`;
