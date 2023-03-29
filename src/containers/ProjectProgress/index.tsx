import { Icon } from "../../components/Icon";
import { Title } from "../../components/Title";

import {
  ProjectProgressWrapp,
  ProjectProgressPaper,
  ProjectProgressHead,
  ProjectProgressCrossButton,
  ProjectProgressBody,
  ProjectProgressDate,
  ProjectProgressCircle,
  ProjectProgressCircleData,
  ProjectProgressCircleCounter,
  ProjectProgressCircleLable,
  ProjectProgressCircleSvg,
  ProjectProgressCircleSvgLine,
  ProjectProgressCircleSvgLineOver,
  ProjectProgressButtons,
} from "./styled";

import crossIcon from "../../assets/icons/cross.svg";

type ProjectProgress = {
  initialState?: number;
  handleWeeklyProgressActive: () => void;
};

export const ProjectProgress: React.FC<ProjectProgress> = ({
  initialState = 75,
  handleWeeklyProgressActive,
}) => {
  return (
    <ProjectProgressWrapp>
      <ProjectProgressPaper>
        <ProjectProgressHead gorizontalSpace="between">
          <Title text="Weekly progress" />
          <ProjectProgressButtons>
            <ProjectProgressCrossButton onClick={handleWeeklyProgressActive}>
              <Icon src={crossIcon} alt="cross icon" />
            </ProjectProgressCrossButton>
          </ProjectProgressButtons>
        </ProjectProgressHead>
        <ProjectProgressBody>
          <ProjectProgressDate>Start from Nov 7-11 ,2020</ProjectProgressDate>
          <ProjectProgressCircle>
            <ProjectProgressCircleSvg>
              <ProjectProgressCircleSvgLine
                cx="70"
                cy="70"
                r="70"
              ></ProjectProgressCircleSvgLine>
              <ProjectProgressCircleSvgLineOver
                cx="70"
                cy="70"
                r="70"
                value={initialState}
              ></ProjectProgressCircleSvgLineOver>
            </ProjectProgressCircleSvg>
            <ProjectProgressCircleData>
              <ProjectProgressCircleCounter>
                {initialState}%
              </ProjectProgressCircleCounter>
              <ProjectProgressCircleLable>
                Tasks Completed
              </ProjectProgressCircleLable>
            </ProjectProgressCircleData>
          </ProjectProgressCircle>
        </ProjectProgressBody>
      </ProjectProgressPaper>
    </ProjectProgressWrapp>
  );
};
