import styled from "styled-components";

export const TitleWrapp = styled.h2<{ size?: number; color?: string }>`
  font-weight: 600;
  font-size: ${({ size }) => (size ? `${size}px` : "16px")};

  color: ${({ color }) => (color ? color : "#333333")};
`;
