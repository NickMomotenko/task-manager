import { useEffect } from "react";

import { useOpen } from "../../hooks/useOpen";

import { TaskCreator } from "../TaskCreator";

import { Title } from "../../components/Title";
import { Button } from "../../components/Button";
import { Icon } from "../../components/Icon";

import crossIcon from "../../assets/icons/cross.svg";

import { ModalWrapp, ModalPaper, ModalHead } from "./styled";

type ModalProps = {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  handleToggleActive: () => void;
};

export const Modal: React.FC<ModalProps> = ({
  title,
  children,
  isOpen,
  handleToggleActive,
}) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  return (
    <ModalWrapp isOpen={isOpen}>
      <ModalPaper>
        <ModalHead gorizontalSpace="between">
          <Title text={title} />
          <Button view="ghost" onClick={handleToggleActive}>
            <Icon src={crossIcon} noFill />
          </Button>
        </ModalHead>
        {children}
      </ModalPaper>
    </ModalWrapp>
  );
};
