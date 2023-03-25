import React, { useState } from "react";
import {
  MenuItem,
  MenuList,
  MenuWrapp,
  MenuLink,
  MenuLinkText,
} from "./styled";

import { navigationList } from "../../helpers/routes";

type MenuProps = {
  parentTag?: string | "nav" | any;
};

export const Menu: React.FC<MenuProps> = ({ parentTag = "nav" }) => {
  const [activeItem, setIsActiveItem] = useState(navigationList[0]);

  const handleItemClick = (id: number) => {
    const searchableItem = navigationList.find((item) => item.id === id);

    if (!searchableItem) return;

    setIsActiveItem(searchableItem);
  };

  return (
    <MenuWrapp as={parentTag}>
      <MenuList>
        {navigationList.map(({ id, title, path }) => {
          const isActive = activeItem.id === id;

          return (
            <MenuItem key={id}>
              <MenuLink to={path} onClick={() => handleItemClick(id)}>
                <MenuLinkText active={isActive}>{title}</MenuLinkText>
              </MenuLink>
            </MenuItem>
          );
        })}
      </MenuList>
    </MenuWrapp>
  );
};
