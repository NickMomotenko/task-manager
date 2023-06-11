import { createContext, useEffect, useState } from "react";

export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState();
  const [alerts, setAlerts] = useState([]);

  const baseTimer = 4000;
  let timeout = null;

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

  const generateAlert = ({ type, title, text }) => {
    const alertObj = {
      id: new Date().valueOf(),
      type,
      title,
      text,
    };

    setAlerts((prev) => [...prev, alertObj]);

    // timeout = window.setTimeout(() => {
    //   setAlerts((prev) => [
    //     ...prev.filter((prevAlert) => prevAlert.id !== alertObj.id),
    //   ]);
    // }, baseTimer);
  };

  const deleteAlert = (id) => {
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
