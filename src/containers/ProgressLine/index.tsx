import React, { useState } from "react";

import {
  ProgressLineWrapp,
  ProgressLineGlobal,
  ProgressLineOver,
} from "./styled";

interface ProgressLineProps {
  initialValue: number;
}

export const ProgressLine: React.FC<ProgressLineProps> = ({ initialValue }) => {
  const [value, setValue] = useState(initialValue ?? 0);

  return (
    <ProgressLineWrapp>
      <ProgressLineGlobal>
        <ProgressLineOver value={value} />
      </ProgressLineGlobal>
    </ProgressLineWrapp>
  );
};
