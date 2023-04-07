import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import { Button } from "../Button";

import { optionList } from "./data";

import { ListItem } from "./types";

import { OptionsWrapp, OptionsList, OptionsItem } from "./styled";

interface OptionsProps {
  list?: ListItem[];
  initialState: boolean;
}

export const Options: React.FC<OptionsProps> = ({
  initialState,
  list = optionList,
}) => {
  const navigate = useNavigate();

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
