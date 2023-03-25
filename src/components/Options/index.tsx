import { useState, useEffect } from "react";

import { Button } from "../Button";

import { OptionsWrapp, OptionsList, OptionsItem } from "./styled";

const mockList = [{ id: 1, title: "Project info", onClick: () => {} }];

type ListItem = { id: number; title: string; onClick: () => void };

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
        {list?.map(({ id, title, onClick }) => (
          <OptionsItem key={id}>
            <Button onClick={onClick} view="ghost">
              {title}
            </Button>
          </OptionsItem>
        ))}
      </OptionsList>
    </OptionsWrapp>
  );
};
