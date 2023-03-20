import styled from "styled-components";

export const LogoWrapp = styled.div``;

export const LogoLink = styled.a``;

export const LogoText = styled.span`
  font-weight: 700;
  color: #7b7bb9;
`;

export const Logo = () => {
  return (
    <LogoWrapp>
      <LogoLink href="#">
        <LogoText>Task Manager App</LogoText>
      </LogoLink>
    </LogoWrapp>
  );
};
