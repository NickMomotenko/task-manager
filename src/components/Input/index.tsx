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
  onKeyUp: (event: React.KeyboardEvent<HTMLElement>) => void;
};

export const Input: React.FC<InputProps> = React.forwardRef(
  (
    { value, onChange, placeholder, icon, error, disabled, onKeyUp, ...rest },
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
            onKeyUp={onKeyUp}
            ref={ref}
            disabled={disabled}
            {...rest}
          />
        </InputContent>
        <InputError>{error}</InputError>
      </InputWrapp>
    );
  }
);
