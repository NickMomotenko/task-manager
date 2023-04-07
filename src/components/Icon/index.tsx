import React from "react";

import { IconWrapp } from "./styled";

type IconProps = {
  src: string | any;
  alt: string;
  size?: {
    h: string;
    w: string;
  };
};

export const Icon: React.FC<IconProps> = ({
  src,
  alt,
  size = { h: "initial", w: "initial" },
}) => {
  return <IconWrapp src={src} alt={alt} size={size} />;
};
