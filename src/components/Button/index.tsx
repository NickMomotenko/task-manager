import React from "react";

import { ButtonWrapp } from "./styled";

type ButtonType = "button" | "submit" | "reset";

interface ButtonProps {
  type: ButtonType;
  text: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  type = "button",
  text,
  onClick,
}) => {
  return <ButtonWrapp type={type}>{text}</ButtonWrapp>;
};
