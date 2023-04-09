import { useContext } from "react";

import { AlertContext } from "../../context/AlertContext";

import { Alert } from "../../components/Alert";

import { AlertContainerWrapp, AlertContainerItem } from "./styled";
import { IAlert } from "./types";

export const AlertContainer = () => {
  const { alerts, isOpen, deleteAlert } = useContext(AlertContext);

  return (
    <AlertContainerWrapp isOpen={isOpen}>
      {alerts?.map((alert: IAlert, ind: number) => (
        <AlertContainerItem key={ind}>
          <Alert handleDelete={deleteAlert} {...alert} />
        </AlertContainerItem>
      ))}
    </AlertContainerWrapp>
  );
};
