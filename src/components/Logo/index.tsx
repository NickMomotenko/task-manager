import { routes } from "../../helpers/routes";

import { LogoLink, LogoWrapp, LogoIcon } from "./styled";

import logoIcon from "../../assets/logo/task.png";

export const Logo = () => {
  return (
    <LogoWrapp>
      <LogoLink href={routes.base.path}>
        <LogoIcon src={logoIcon} alt="Logo Icon" />
      </LogoLink>
    </LogoWrapp>
  );
};
