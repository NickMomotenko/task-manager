import { Title } from "../../components/Title";
import { AuthWrapperTitle } from "./styled";

type AuthWrapper = {
  title: string;
  children?: React.ReactNode;
};

export const AuthWrapper: React.FC<AuthWrapper> = ({ title, children }) => {
  return (
    <>
      <AuthWrapperTitle>
        <Title text={title} size={32} />
      </AuthWrapperTitle>
      {children}
    </>
  );
};
