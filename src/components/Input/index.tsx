import React from "react";

import { Icon } from "../Icon";

import {
  InputBody,
  InputWrapp,
  InputIcon,
  InputError,
  InputContent,
} from "./styled";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: string;
  error?: string;
};

export const Input: React.FC<InputProps> = React.forwardRef(
  (
    { value, onChange, placeholder, icon, error, ...rest },
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <InputWrapp>
        <InputContent>
          {icon && (
            <InputIcon>
              <Icon src={icon} />
            </InputIcon>
          )}
          <InputBody
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            ref={ref}
            {...rest}
          />
        </InputContent>
        <InputError>{error}</InputError>
      </InputWrapp>
    );
  }
);
