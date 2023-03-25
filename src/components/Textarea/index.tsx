import React from "react";

import { TextareaWrapp, TextareaBody } from "./styled";

export type TextareaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    initialValue?: string;
    ref?: React.Ref<HTMLTextAreaElement>;
    isFocused?: boolean;
  };

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const {
      initialValue = "",
      placeholder = "",
      onChange,
      value,
      isFocused,
      children,
      ...rest
    } = props;

    return (
      <TextareaWrapp isFocused={isFocused}>
        <TextareaBody
          ref={ref}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          {...rest}
        />
        {children}
      </TextareaWrapp>
    );
  }
);
