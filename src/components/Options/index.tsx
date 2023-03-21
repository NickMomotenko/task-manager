import { useState, useEffect } from "react";
import {
  OptionsWrapp,
  OptionsList,
  OptionsItem,
  OptionsButton,
} from "./styled";

const list = [{ id: 1, title: "Project info" }];

interface OptionsProps {
  list?: [];
  initialState: boolean;
}

export const Options: React.FC<OptionsProps> = ({ initialState }) => {
  const [isOpen, setIsOpen] = useState(initialState);

  useEffect(() => {
    initialState ? setIsOpen(true) : setIsOpen(false);
  }, [initialState]);

  return (
    <OptionsWrapp isOpen={isOpen}>
      <OptionsList>
        {list.map(({ id, title }) => (
          <OptionsItem key={id}>
            <OptionsButton>{title}</OptionsButton>
          </OptionsItem>
        ))}
      </OptionsList>
    </OptionsWrapp>
  );
};
