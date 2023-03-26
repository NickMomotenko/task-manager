import { useEffect } from "react";

import { useOpen } from "../../hooks/useOpen";
import { TaskCreator } from "../TaskCreator";

import { ModalWrapp, ModalPaper } from "./styled";

export const Modal = () => {
  const { isOpen, handleToggleClick } = useOpen(true);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  return (
    <ModalWrapp isOpen={isOpen}>
      <ModalPaper>
        <TaskCreator />
      </ModalPaper>
    </ModalWrapp>
  );
};
