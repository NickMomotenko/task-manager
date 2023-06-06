import React from "react";

import { TitleWrapp } from "./styled";

type TitleProps = {
  text: string;
  size?: number;
  color?: string;
};

export const Title: React.FC<TitleProps> = ({ text, size = 16, color }) => {
  return (
    <TitleWrapp size={size} color={color}>
      {text}
    </TitleWrapp>
  );
};
