import styled from "styled-components";

export const MultiAvatarWrapp = styled.div``;

export const MultiAvatarList = styled.ul`
  display: flex;
  align-items: center;
`;

export const MultiAvatarItem = styled.li<{ zIndex: number }>`
  &:first-child {
    margin-left: 0;
  }
  position: relative;
  z-index: ${({ zIndex }) => zIndex};
  margin-left: -10px;
`;

export const MultiAvatarLink = styled.a`
  img {
    border: 2px solid #fff;
    border-radius: 50%;
  }
`;
