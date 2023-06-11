import { Container } from "../Container";
import Header from "../Header";

import { MainContentWrapp } from "./styled";

type MainContentProps = {
  children: React.ReactNode;
};

export const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return (
    <MainContentWrapp>
      <Header />
      <Container>{children}</Container>
    </MainContentWrapp>
  );
};
