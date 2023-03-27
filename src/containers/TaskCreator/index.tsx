import { useRef } from "react";

import { Button } from "../../components/Button";
import { Icon } from "../../components/Icon";

import { TaskCreatorHead } from "./TaskCreatorHead";
import { TaskCreatorLabels } from "./TaskCreatorLabels";
import { TaskCreatorTextarea } from "./TaskCreatorTextarea";
import { TaskCreatorImplementor } from "./TaskCreatorImplementor";

import { useOpen } from "../../hooks/useOpen";
import { useTextarea } from "../../hooks/useTextarea";
import { useClickOutside } from "../../hooks/useClickOutside";

import {
  TaskCreatorWrapp,
  TaskCreatorBody,
  TaskCreatorOptions,
  TaskCreatorButton,
  TaskCreatorOptionsList,
  TaskCreatorOptionsItem,
} from "./styled";

import { options } from "./data";

export const TaskCreator = () => {
  const workerList = useOpen();
  const descriptionTextarea = useTextarea();

  const assignRef = useRef<HTMLDivElement>(null);

  const handleOpenWorkerList = () => {
    workerList.handleToggleClick();
  };

  useClickOutside(assignRef, () => workerList.setIsOpen(false));

  const createNewTask = () => {
    let newTask = {
      projectName: "",
      projectUsersData: {
        owner: {},
        implementor: {},
      },
      projectLabels: [],
      text: "",
    };
  };

  return (
    <TaskCreatorWrapp>
      <TaskCreatorHead />
      <TaskCreatorBody>
        <TaskCreatorImplementor
          isOpen={workerList.isOpen}
          ref={assignRef}
          handleOpenWorkerList={handleOpenWorkerList}
        />
        <TaskCreatorLabels />
        <TaskCreatorTextarea
          value={descriptionTextarea.value}
          onChange={descriptionTextarea.handleChange}
        />
        <TaskCreatorOptions>
          <TaskCreatorOptionsList>
            {options.map(({ icon, id, alt }) => {
              const personAddIconId = options?.at(-1)?.id;

              return (
                <TaskCreatorOptionsItem
                  key={id}
                  isLastIcon={personAddIconId === id}
                >
                  <Button view="ghost">
                    <Icon src={icon} alt={alt} />
                  </Button>
                </TaskCreatorOptionsItem>
              );
            })}
          </TaskCreatorOptionsList>
        </TaskCreatorOptions>
        <TaskCreatorButton>
          <Button size="b" onClick={createNewTask}>
            Create Task
          </Button>
        </TaskCreatorButton>
      </TaskCreatorBody>
    </TaskCreatorWrapp>
  );
};
