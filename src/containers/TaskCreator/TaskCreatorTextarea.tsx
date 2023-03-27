import { TaskCreatorTextareaWrapp } from "./styled";

import { Textarea } from "../../components/Textarea";

type TaskCreatorTextareaProps = {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export const TaskCreatorTextarea: React.FC<TaskCreatorTextareaProps> = ({
  value,
  onChange,
  ...rest
}) => {
  return (
    <TaskCreatorTextareaWrapp>
      <Textarea
        placeholder="Description..."
        value={value}
        onChange={onChange}
        {...rest}
      />
    </TaskCreatorTextareaWrapp>
  );
};
