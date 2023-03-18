import React from "react";
import { Menu } from "../../containers/Menu";

import { HeaderWrapp } from "./styled";

const Header: React.FC = () => {
  return (
    <HeaderWrapp>
      <Menu />
    </HeaderWrapp>
  );
};

export default Header;
