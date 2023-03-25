import React from "react";

import { TextareaWrapp, TextareaBody } from "./styled";

export type TextareaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    initialValue?: string;
  };

export const Textarea: React.FC<TextareaProps> = ({
  initialValue = "",
  placeholder = "",
  onChange,
  value,
  ...rest
}) => {
  return (
    <TextareaWrapp>
      <TextareaBody
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        {...rest}
      />
    </TextareaWrapp>
  );
};
