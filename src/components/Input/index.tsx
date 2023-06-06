import React from "react";

import { Icon } from "../Icon";

import { InputBody, InputWrapp, InputIcon } from "./styled";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: string;
};

export const Input: React.FC<InputProps> = React.forwardRef(
  ({ value, onChange, placeholder, icon, ...rest }, ref) => {
    return (
      <InputWrapp>
        {icon && (
          <InputIcon>
            <Icon src={icon} alt="icon" />
          </InputIcon>
        )}
        <InputBody
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          ref={ref}
          {...rest}
        />
      </InputWrapp>
    );
  }
);
