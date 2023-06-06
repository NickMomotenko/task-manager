import { Logo } from "../Logo";

import { LoaderWrapp, LoaderLogo, LoaderAnimate } from "./styled";

type LoaderProps = {
  active?: boolean;
};

export const Loader: React.FC<LoaderProps> = ({ active }) => {
  return (
    <LoaderWrapp>
      <LoaderLogo active={active}>
        <Logo />
      </LoaderLogo>
      <LoaderAnimate active={active}></LoaderAnimate>
    </LoaderWrapp>
  );
};
