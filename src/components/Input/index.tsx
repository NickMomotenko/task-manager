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
  iconFill?: string;
  error?: string;
  onKeyUp?: (event: React.KeyboardEvent<HTMLElement>) => void;
};

export const Input: React.FC<InputProps> = React.forwardRef(
  (
    {
      value,
      onChange,
      placeholder,
      icon,
      iconFill,
      error,
      disabled,
      onKeyUp,
      ...rest
    },
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <InputWrapp>
        <InputContent>
          {icon && (
            <InputIcon>
              <Icon src={icon} fill={iconFill} />
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
