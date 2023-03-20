import { Button } from "../../components/Button";
import { Icon } from "../../components/Icon";
import { Textarea } from "../../components/Textarea";
import { Title } from "../../components/Title";
import {
  TaskCreatorWrapp,
  TaskCreatorPaper,
  TaskCreatorHead,
  TaskCreatorBody,
  TaskCreatorTextarea,
  TaskCreatorOptions,
  TaskCreatorButton,
  TaskCreatorOptionsButton,
  TaskCreatorOptionsList,
  TaskCreatorOptionsItem,
  TaskCreatorCrossButton,
} from "./styled";

import crossIcon from "../../assets/icons/cross.svg";

import { options } from "./mock";

export const TaskCreator = () => {
  return (
    <TaskCreatorWrapp>
      <TaskCreatorPaper>
        <TaskCreatorHead btw>
          <Title text="Create New Task" />
          <TaskCreatorCrossButton>
            <Icon src={crossIcon} alt="cross icon" />
          </TaskCreatorCrossButton>
        </TaskCreatorHead>
        <TaskCreatorBody>
          <TaskCreatorTextarea>
            <Textarea placeholder="Description..." />
          </TaskCreatorTextarea>
          <TaskCreatorOptions>
            <TaskCreatorOptionsList>
              {options.map(({ icon, id, alt }) => {
                const personAddIconId = options?.at(-1)?.id;

                return (
                  <TaskCreatorOptionsItem
                    key={id}
                    isLastIcon={personAddIconId === id}
                  >
                    <TaskCreatorOptionsButton>
                      <Icon src={icon} alt={alt} />
                    </TaskCreatorOptionsButton>
                  </TaskCreatorOptionsItem>
                );
              })}
            </TaskCreatorOptionsList>
          </TaskCreatorOptions>
          <TaskCreatorButton>
            <Button text="Create Task" />
          </TaskCreatorButton>
        </TaskCreatorBody>
      </TaskCreatorPaper>
    </TaskCreatorWrapp>
  );
};
