import { useState, useEffect } from "react";
import {
  OptionsWrapp,
  OptionsList,
  OptionsItem,
  OptionsButton,
} from "./styled";

const mockList = [{ id: 1, title: "Project info" }];

type ListItem = { id: number; title: string };

interface OptionsProps {
  list?: ListItem[];
  initialState: boolean;
}

export const Options: React.FC<OptionsProps> = ({
  initialState,
  list = mockList,
}) => {
  const [isOpen, setIsOpen] = useState(initialState);

  useEffect(() => {
    initialState ? setIsOpen(true) : setIsOpen(false);
  }, [initialState]);

  return (
    <OptionsWrapp isOpen={isOpen}>
      <OptionsList>
        {list?.map(({ id, title }) => (
          <OptionsItem key={id}>
            <OptionsButton>{title}</OptionsButton>
          </OptionsItem>
        ))}
      </OptionsList>
    </OptionsWrapp>
  );
};
