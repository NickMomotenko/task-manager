import { useState } from "react";

export const useOpen = (initialState?: boolean) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState ?? false);

  const handleToggleClick = () => setIsOpen(!isOpen);

  return { isOpen, handleToggleClick , setIsOpen };
};
