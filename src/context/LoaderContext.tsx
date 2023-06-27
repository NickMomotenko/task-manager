import { createContext, useEffect, useState, ReactNode } from "react";

interface ContextProps {
  isOpen: boolean;
  handleToggleOpen: () => void;
}

export const LoaderContext = createContext<ContextProps>({
  isOpen: false,
  handleToggleOpen: () => {},
});

interface Props {
  children: ReactNode;
}

export const LoaderProvider = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
