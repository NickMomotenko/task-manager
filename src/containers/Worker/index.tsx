import { forwardRef } from "react";

import { Avatar } from "../../components/Avatar";

import { SelectInputProps } from "../Select/SelectInput";

import { WorkerWrapp, WorkerName } from "./styled";

export const Worker = forwardRef<HTMLDivElement, SelectInputProps>(
  ({ value, onClick }, ref) => {
    const { name, avatar } = value;

    return (
      <WorkerWrapp onClick={onClick} ref={ref}>
        {avatar && <Avatar url={avatar} alt={`${name} avatar`} size={24} />}
        <WorkerName>{name ? name : value}</WorkerName>
      </WorkerWrapp>
    );
  }
);
