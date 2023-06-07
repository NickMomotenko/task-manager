import { createContext, useEffect, useState } from "react";

export const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    }
  }, [isOpen]);

  const handleToggleOpen = () => {
    setIsOpen(true);
  };

  return (
    <LoaderContext.Provider value={{ isOpen, handleToggleOpen }}>
      {children}
    </LoaderContext.Provider>
  );
};
