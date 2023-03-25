import React from "react";

import { ButtonWrapp } from "./styled";

import { TButtonType, TButtonSize } from "./types";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  view?: TButtonType;
  size?: TButtonSize;
};

export const Button: React.FC<ButtonProps> = ({
  view = "common",
  size = "m",
  children,
  onClick,
  ...rest
}) => {
  return (
    <ButtonWrapp onClick={onClick} view={view} size={size} {...rest}>
      {children}
    </ButtonWrapp>
  );
};
