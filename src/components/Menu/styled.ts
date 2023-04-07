import styled from "styled-components";

import { NavLink } from "react-router-dom";

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

export const MenuLink = styled(NavLink)`
  color: "#24abf8";
  font-size: 15px;
  font-weight: 500;
  transition: color 0.4s;

  &.active {
    color: #24abf8;
  }

  &:hover {
    color: #24abf8;
  }
`;
