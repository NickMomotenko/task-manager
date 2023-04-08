import { useSelector } from "react-redux";
import { Select } from "../Select";
import { Worker } from "../Worker";

import { implementorList } from "./data";

import {
  TaskCreatorSelectBlock,
  TaskCreatorSelectText,
  TaskCreatorSelectWrapp,
  TaskCreatorSelectProject,
} from "./styled";
import { RootState } from "../../redux/store";

type TaskCreatorSelectProps = {
  setSelectedOption: (value: any) => void;
};

export const TaskCreatorSelect: React.FC<TaskCreatorSelectProps> = ({
  setSelectedOption,
}) => {
  const { activeProject } = useSelector((state: RootState) => state.projects);

  return (
    <TaskCreatorSelectWrapp>
      <TaskCreatorSelectBlock>
        <TaskCreatorSelectText>For</TaskCreatorSelectText>
        <Select
          customInput={Worker}
          options={implementorList}
          onChange={setSelectedOption}
          placeHolder="Add worker"
        />
      </TaskCreatorSelectBlock>
      <TaskCreatorSelectBlock>
        <TaskCreatorSelectText>In</TaskCreatorSelectText>
        <TaskCreatorSelectProject>
          {activeProject?.data.title}
        </TaskCreatorSelectProject>
      </TaskCreatorSelectBlock>
    </TaskCreatorSelectWrapp>
  );
};
