import { useState } from "react";

type CheckboxProps = {
  initialState?: boolean;
};

export const useCheckbox = ({ initialState = false }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(initialState ?? false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setIsChecked(event.target.checked);

  return { isChecked, handleChange };
};
