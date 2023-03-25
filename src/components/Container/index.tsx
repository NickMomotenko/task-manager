import { ContainerWrapp } from "./styled";

export const Container: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <ContainerWrapp>{children}</ContainerWrapp>;
};
