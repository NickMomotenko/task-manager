import React, { useState, useRef, useEffect } from "react";

import { SelectInput, SelectInputProps } from "./SelectInput";

import { SelectOptions, SelectWrapp } from "./styled";

import { TOption } from "./types";

export type SelectProps = {
  className?: string;
  optionsClassName?: string;
  customInput?: React.FC<
    SelectInputProps & { ref?: React.Ref<HTMLDivElement | null> }
  >;
  options?: {
    value: any;
    label: string;
    onClick?: (value: any) => void;
    customOption?: React.FC<TOption>;
  }[];
  onChange?: (value: any) => void;
  selectedValue?: TOption;
  placeHolder?: string;
};

export const Select: React.FC<SelectProps> = ({
  className,
  optionsClassName,
  placeHolder,
  customInput: CustomInput,
  options,
  onChange,
  selectedValue: inilialSelectedValue,
}) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<TOption | undefined>(
    inilialSelectedValue
  );

  const inputRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setSelectedValue(inilialSelectedValue);
  }, [inilialSelectedValue]);

  useEffect(() => {
    const handler = (e: any) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  }, []);

  const getDisplay = () => {
    if (!selectedValue) {
      return placeHolder ?? "Select";
    }
    return selectedValue.value;
  };

  const handleInputClick = () => {
    setShowMenu((prev) => !prev);
  };

  const onItemClick = (option: TOption) => {
    if (option.onClick) {
      option.onClick?.(option.value);
    } else {
      setSelectedValue(option);
      onChange?.(option.value);
    }
  };

  const isSelected = (option: TOption) => {
    if (!selectedValue) {
      return false;
    }

    return selectedValue.value === option.value;
  };

  return (
    <SelectWrapp className={className}>
      {CustomInput ? (
        <CustomInput
          ref={inputRef}
          open={showMenu}
          value={getDisplay()}
          onClick={handleInputClick}
        />
      ) : (
        <SelectInput
          ref={inputRef}
          open={showMenu}
          value={getDisplay()}
          onClick={handleInputClick}
        />
      )}

      {showMenu && (
        <SelectOptions className={optionsClassName}>
          {options?.map((option, ind) => {
            return (
              <>
                {option.customOption && (
                  <option.customOption
                    key={ind}
                    onClick={() => onItemClick(option)}
                    isSelected={isSelected(option)}
                    {...option}
                  />
                )}
              </>
            );
          })}
        </SelectOptions>
      )}
    </SelectWrapp>
  );
};
