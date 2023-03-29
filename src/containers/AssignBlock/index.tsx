import { Input } from "../../components/Input";
import { useInput } from "../../hooks/useInput";

import { AssignBlockWrapp, AssignBlockInput, AssignBlockList } from "./styled";

import { AssignBlockItem } from "./AssignBlockItem";

import { assignList } from "./data";

import { IAssignItem } from "./types";

type AssignBlockProps = {
  data?: IAssignItem[];
};

export const AssignBlock: React.FC<AssignBlockProps> = () => {
  const { value, handleChange } = useInput();

  return (
    <AssignBlockWrapp>
      <AssignBlockInput>
        <Input value={value} placeholder="Search" onChange={handleChange} />
      </AssignBlockInput>
      <AssignBlockList>
        {assignList.map(({ id, ...rest }) => (
          <AssignBlockItem key={id} {...rest} />
        ))}
      </AssignBlockList>
    </AssignBlockWrapp>
  );
};
