import React from "react";

import { ButtonWrapp } from "./styled";

import { TButtonType } from "./types";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  view?: TButtonType;
  text: string;
};

export const Button: React.FC<ButtonProps> = ({
  view = "common",
  text,
  onClick,
  ...rest
}) => {
  return (
    <ButtonWrapp onClick={onClick} view={view} {...rest}>
      {text}
    </ButtonWrapp>
  );
};
