import { useState } from "react";
import { ILabel } from "../TaskCreator/types";

import {
  LabelsBlockWrapp,
  LabelsBlockList,
  LabelsBlockItem,
  LabelsBlockButton,
} from "./styled";

type LabelsBlockProps = {
  labelList?: ILabel[];
  toggleLabelChecked?: (id: number) => void;
};

export const LabelsBlock: React.FC<LabelsBlockProps> = ({
  labelList,
  toggleLabelChecked,
}) => {
  return (
    <LabelsBlockWrapp>
      <LabelsBlockList as="ul">
        {labelList?.map(({ id, title, checked }) => {
          return (
            <LabelsBlockItem key={id} as="li">
              <LabelsBlockButton
                isChecked={checked}
                onClick={() => toggleLabelChecked(id)}
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
