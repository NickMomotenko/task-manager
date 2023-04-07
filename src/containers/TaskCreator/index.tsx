import { useRef, useState } from "react";

import { Button } from "../../components/Button";
import { Icon } from "../../components/Icon";

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

import { labelData, options } from "./data";

export const TaskCreator = () => {
  const [labelList, setLabelList] = useState(labelData);
  const [chosenImplementor, setChosenImplementor] = useState(null);

  const workerList = useOpen();
  const descriptionTextarea = useTextarea();

  const assignRef = useRef<HTMLDivElement>(null);

  const handleOpenWorkerList = () => {
    workerList.handleToggleClick();
  };

  const toggleLabelChecked = (id: number) => {
    const newLabelList = labelList.map((label) => {
      return label.id === id ? { ...label, checked: !label.checked } : label;
    });

    setLabelList(newLabelList);
  };

  const createNewTask = () => {
    const checkedLabels = labelList.filter((item) => item.checked);

    let newTask = {
      projectName: "",
      projectUsersData: {
        owner: {},
        implementor: {},
      },
      projectLabels: checkedLabels,
      text: descriptionTextarea.value,
    };

    console.log(newTask);
  };

  useClickOutside(assignRef, () => workerList.setIsOpen(false));

  return (
    <TaskCreatorWrapp>
      <TaskCreatorBody>
        <TaskCreatorImplementor
          isOpen={workerList.isOpen}
          ref={assignRef}
          handleOpenWorkerList={handleOpenWorkerList}
        />
        <TaskCreatorLabels
          labelList={labelList}
          toggleLabelChecked={toggleLabelChecked}
        />
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
