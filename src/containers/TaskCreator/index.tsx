import { useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";

import { Button } from "../../components/Button";

import { TaskCreatorLabels } from "./TaskCreatorLabels";
import { TaskCreatorTextarea } from "./TaskCreatorTextarea";
import { TaskCreatorSelect } from "./TaskCreatorSelect";

import { TaskCreatorWrapp, TaskCreatorBody, TaskCreatorButton } from "./styled";

import { useInput } from "../../hooks/useInput";

import { labelData } from "./data";

export const TaskCreator = () => {
  const {
    projects: { activeProject },
    auth: { authUser },
  } = useSelector((state: RootState) => state);

  const [labelList, setLabelList] = useState(labelData);

  const [selectedOption, setSelectedOption] = useState(null);

  const descriptionTextarea = useInput();

  const toggleLabelChecked = (id: number) => {
    const newLabelList = labelList.map((label) => {
      return label.id === id ? { ...label, checked: !label.checked } : label;
    });

    setLabelList(newLabelList);
  };

  const createNewTask = () => {
    const checkedLabels = labelList.filter((item) => item.checked);

    let newTask = {
      projectName: activeProject?.data.title,
      projectUsers: {
        owner: authUser,
        implementor: selectedOption,
      },
      projectLabels: checkedLabels,
      projectDescription: descriptionTextarea.value,
    };

    descriptionTextarea.clearValue();
  };

  return (
    <TaskCreatorWrapp>
      <TaskCreatorBody>
        <TaskCreatorSelect setSelectedOption={setSelectedOption} />
        <TaskCreatorLabels
          labelList={labelList}
          toggleLabelChecked={toggleLabelChecked}
        />
        <TaskCreatorTextarea
          value={descriptionTextarea.value}
          onChange={descriptionTextarea.handleChange}
        />
        <TaskCreatorButton>
          <Button size="b" onClick={createNewTask}>
            Create Task
          </Button>
        </TaskCreatorButton>
      </TaskCreatorBody>
    </TaskCreatorWrapp>
  );
};
