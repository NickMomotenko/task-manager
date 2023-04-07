import React from "react";

import { MenuItem, MenuList, MenuWrapp, MenuLink } from "./styled";

import { navigationList } from "../../helpers/routes";

type MenuProps = {
  parentTag?: string | "nav" | any;
};

export const Menu: React.FC<MenuProps> = ({ parentTag = "nav" }) => {
  return (
    <MenuWrapp as={parentTag}>
      <MenuList>
        {navigationList.map(({ id, title, path }) => {
          return (
            <MenuItem key={id}>
              <MenuLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </MenuLink>
            </MenuItem>
          );
        })}
      </MenuList>
    </MenuWrapp>
  );
};
