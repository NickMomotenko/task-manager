import { FormWrapp } from "./styled";

type FormProps = {
  onSubmit?: () => void;
  children: React.ReactNode;
};

export const Form: React.FC<FormProps> = ({ onSubmit, children }) => {
  return <FormWrapp onSubmit={onSubmit}>{children}</FormWrapp>;
};
