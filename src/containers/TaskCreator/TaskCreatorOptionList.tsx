import { Button } from "../../components/Button";
import { Icon } from "../../components/Icon";

import { options } from "./data";

import { TaskCreatorOptionsList, TaskCreatorOptionsItem } from "./styled";

export const TaskCreatorOptionList = () => {
  return (
    <>
      <TaskCreatorOptionsList>
        {options.map(({ icon, id, alt }) => {
          const personAddIconId = options?.at(-1)?.id;

          return (
            <TaskCreatorOptionsItem
              key={id}
              isLastIcon={personAddIconId === id}
            >
              <Button view="ghost">
                <Icon src={icon} noFill />
              </Button>
            </TaskCreatorOptionsItem>
          );
        })}
      </TaskCreatorOptionsList>
    </>
  );
};
