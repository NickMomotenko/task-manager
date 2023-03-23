import styled from "styled-components";

import { Link } from "react-router-dom";

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

export const MenuLinkText = styled.span<{ active: boolean }>`
  color: ${({ active }) => (active ? "#24abf8" : "black")};
  font-size: 15px;
  font-weight: 500;
`;

export const MenuLink = styled(Link)`
  &:hover {
    ${MenuLinkText} {
      transition:color 0.5s;
      color: #24abf8;
    }
  }
`;
