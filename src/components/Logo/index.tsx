import { routes } from "../../helpers/routes";

import { LogoLink, LogoText, LogoWrapp } from "./styled";

export const Logo = () => {
  return (
    <LogoWrapp>
      <LogoLink href={routes.base.path}>
        <LogoText>Task Manager App</LogoText>
      </LogoLink>
    </LogoWrapp>
  );
};
