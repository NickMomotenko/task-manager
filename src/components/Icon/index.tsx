import React from "react";

import { IconWrapp } from "./styled";

type IconProps = {
  src: string | any;
  size?: {
    h: string;
    w: string;
  };
  fill?: string;
  noFill?: boolean;
};

export const Icon: React.FC<IconProps> = ({
  src,
  size,
  fill = "#fff",
  noFill,
}) => {
  return <IconWrapp src={src} size={size} fill={fill} noFill={noFill} />;
};
