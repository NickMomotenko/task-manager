import styled from "styled-components";

const ContainerWrapp = styled.div`
  margin: 0 auto;
  width: 1100px;
  max-width: 100%;
`;

export const Container: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <ContainerWrapp>{children}</ContainerWrapp>;
};
