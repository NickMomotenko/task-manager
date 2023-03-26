import { useState } from "react";

import {
  LabelsBlockWrapp,
  LabelsBlockList,
  LabelsBlockItem,
  LabelsBlockButton,
} from "./styled";

const labelList = [
  { id: 1, title: "Copyright", icon: "", checked: false },
  { id: 2, title: "Design", icon: "", checked: false },
  { id: 3, title: "UI design", icon: "", checked: false },
  { id: 4, title: "Web development", icon: "", checked: true },
];

export const LabelsBlock = () => {
  const [labelData, setLabelData] = useState(labelList);

  const handleItemClick = (id: number) => {
    const newData = labelData.map((label) => {
      if (label.id === id) {
        return { ...label, checked: !label.checked };
      }

      return label;
    });

    setLabelData(newData);
  };

  return (
    <LabelsBlockWrapp>
      <LabelsBlockList as="ul">
        {labelData.map(({ id, title, checked }) => {
          return (
            <LabelsBlockItem key={id} as="li">
              <LabelsBlockButton
                isChecked={checked}
                onClick={() => handleItemClick(id)}
              >
                {title}
              </LabelsBlockButton>
            </LabelsBlockItem>
          );
        })}
      </LabelsBlockList>
    </LabelsBlockWrapp>
  );
};
