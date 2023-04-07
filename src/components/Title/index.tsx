import React from "react";

import { TitleWrapp } from "./styled";

type TitleProps = {
  text: string;
};

export const Title: React.FC<TitleProps> = ({ text }) => {
  return <TitleWrapp>{text}</TitleWrapp>;
};
