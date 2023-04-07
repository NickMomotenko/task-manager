import { ProgressCircle } from "../ProgressCircle";

import {
  ProjectProgressWrapp,
  ProjectProgressBody,
  ProjectProgressDate,
} from "./styled";

type ProjectProgress = {
  initialState?: number;
};

export const ProjectProgress: React.FC<ProjectProgress> = ({
  initialState = 75,
}) => {
  return (
    <ProjectProgressWrapp>
      <ProjectProgressBody>
        <ProjectProgressDate>Start from Nov 7-11 ,2020</ProjectProgressDate>
        <ProgressCircle initialState={initialState} />
      </ProjectProgressBody>
    </ProjectProgressWrapp>
  );
};
