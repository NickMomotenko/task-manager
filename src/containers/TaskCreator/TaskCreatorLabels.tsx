import { TaskCreatorLabelsWrapp } from "./styled";

import { LabelsBlock } from "../LabelsBlock";
import { ILabel } from "./types";

type TaskCreatorLabels = {
  labelList?: ILabel[];
  toggleLabelChecked?: (id: number) => void;
};

export const TaskCreatorLabels: React.FC<TaskCreatorLabels> = ({
  labelList,
  toggleLabelChecked,
}) => {
  return (
    <>
      <TaskCreatorLabelsWrapp>
        <LabelsBlock
          labelList={labelList}
          toggleLabelChecked={toggleLabelChecked}
        />
      </TaskCreatorLabelsWrapp>
    </>
  );
};
