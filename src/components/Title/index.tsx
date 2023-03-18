import React from "react";
import { TitleWrapp } from "./styled";

interface TitleProps {
  text: string;
}

export const Title: React.FC<TitleProps> = ({ text }) => {
  return <TitleWrapp>{text}</TitleWrapp>;
};
