import React from "react";

interface ButtonProps {
  type: string | any;
  text: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  type = "button",
  text,
  onClick,
}) => {
  return <button type={type}>{text}</button>;
};
