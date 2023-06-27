import { createContext, useEffect, useState, ReactNode } from "react";

type AlertProps = {
  type: string;
  title: string;
  text: string;
  timer?: number;
};

type AlertObject = {
  id: number;
  type: string;
  title: string;
  text: string;
};

type AlertContextProps = {
  alerts: AlertObject[];
  isOpen: boolean;
  generateAlert: (alertProps: AlertProps) => void;
  deleteAlert: (id: number) => void;
};

export const AlertContext = createContext<AlertContextProps>(
  {} as AlertContextProps
);

export const AlertProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [alerts, setAlerts] = useState<AlertObject[]>([]);

  const baseTimer = 4;
  let timeout: any = null;

  useEffect(() => {
    if (alerts?.length >= 1) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [alerts]);

  useEffect(() => {
    if (!isOpen) setAlerts([]);
  }, [isOpen]);

  const generateAlert = ({
    type,
    title,
    text,
    timer = baseTimer,
  }: AlertProps) => {
    const alertObj: AlertObject = {
      id: new Date().valueOf(),
      type,
      title,
      text,
    };
    setAlerts((prev) => [...prev, alertObj]);

    timeout = window.setTimeout(() => {
      setAlerts((prev) => [
        ...prev.filter((prevAlert) => prevAlert.id !== alertObj.id),
      ]);
    }, timer * 1000);
  };

  const deleteAlert = (id: number) => {
    clearTimeout(timeout);

    setAlerts((prev) => [...prev.filter((prevAlert) => prevAlert.id !== id)]);
  };

  return (
    <AlertContext.Provider
      value={{ alerts, isOpen, generateAlert, deleteAlert }}
    >
      {children}
    </AlertContext.Provider>
  );
};
