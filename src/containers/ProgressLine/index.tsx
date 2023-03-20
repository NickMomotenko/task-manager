import React, { useState } from "react";

import {
  ProgressLineWrapp,
  ProgressLineGlobal,
  ProgressLineOver,
} from "./styled";

interface ProgressLineProps {
  initialValue: number;
  overLineColor?: string;
  baseLineColor?: string;
}

export const ProgressLine: React.FC<ProgressLineProps> = ({
  initialValue,
  overLineColor,
  baseLineColor,
}) => {
  const [value, setValue] = useState(initialValue ?? 0);

  return (
    <ProgressLineWrapp>
      <ProgressLineGlobal baseLineColor={baseLineColor}>
        <ProgressLineOver value={value} overLineColor={overLineColor} />
      </ProgressLineGlobal>
    </ProgressLineWrapp>
  );
};
