import React from "react";
import { Menu } from "../Menu";

import { HeaderWrapp } from "./styled";

const Header: React.FC = () => {
  return (
    <HeaderWrapp>
      <Menu />
    </HeaderWrapp>
  );
};

export default Header;
