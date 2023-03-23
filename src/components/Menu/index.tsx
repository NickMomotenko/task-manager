import React, { useState } from "react";
import {
  MenuItem,
  MenuList,
  MenuWrapp,
  MenuLink,
  MenuLinkText,
} from "./styled";

import { list } from "./mock";

export const Menu: React.FC = () => {
  const [activeItem, setIsActiveItem] = useState(list[0]);

  const handleItemClick = (id: number) => {
    const searchableItem = list.find((item) => item.id === id);

    if (!searchableItem) return;

    setIsActiveItem(searchableItem);
  };

  return (
    <MenuWrapp>
      <MenuList>
        {list.map(({ id, title, path }) => {
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
