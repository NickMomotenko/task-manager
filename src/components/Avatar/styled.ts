import styled from "styled-components";

export const AvatarWrapp = styled.div<{ size: number }>`
  height: ${({ size }) => size && `${size}px`};
  width: ${({ size }) => size && `${size}px`};
  border-radius: 50%;
`;

export const AvatarBody = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
