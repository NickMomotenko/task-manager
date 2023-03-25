import { LogoLink, LogoText, LogoWrapp } from "./styled";

export const Logo = () => {
  return (
    <LogoWrapp>
      <LogoLink href="#">
        <LogoText>Task Manager App</LogoText>
      </LogoLink>
    </LogoWrapp>
  );
};
