import React from "react";

import { ButtonWrapp, DefaultButtonWrapp } from "./styled";

type ButtonType = "button" | "submit" | "reset";

interface ButtonProps {
  type?: ButtonType;
  text: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  type = "button",
  text,
  onClick,
}) => {
  return (
    <ButtonWrapp type={type} onClick={onClick}>
      {text}
    </ButtonWrapp>
  );
};

export const DefaultButton: React.FC<ButtonProps> = ({ type, text }) => {
  return <DefaultButtonWrapp type={type}>{text}</DefaultButtonWrapp>;
};
