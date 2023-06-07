import { useContext } from "react";
import { Logo } from "../Logo";

import { LoaderWrapp, LoaderLogo, LoaderAnimate } from "./styled";
import { LoaderContext } from "../../context/LoaderContext";

type LoaderProps = {
  active?: boolean;
};

export const Loader: React.FC<LoaderProps> = () => {
  const { isOpen } = useContext(LoaderContext);

  return (
    <LoaderWrapp active={isOpen}>
      <LoaderLogo active={isOpen}>
        <Logo />
      </LoaderLogo>
      <LoaderAnimate active={isOpen}></LoaderAnimate>
    </LoaderWrapp>
  );
};
