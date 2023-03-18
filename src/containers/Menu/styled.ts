import styled from "styled-components";

export const MenuWrapp = styled.nav``;

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
`;

export const MenuItem = styled.li`
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`;

export const MenuLink = styled.a<{ isActiveItem: boolean }>`
  color: ${({ isActiveItem }) => (isActiveItem ? "#24abf8" : "black")};
  font-size: 15px;
  font-weight: 500;

  transition: 0.5s;

  &:hover {
    color: #24abf8;
  }
`;
