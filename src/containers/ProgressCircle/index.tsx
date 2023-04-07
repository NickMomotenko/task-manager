import {
  ProgressCircleWrapp,
  ProgressCircleSvg,
  ProgressCircleSvgLine,
  ProgressCircleSvgLineOver,
  ProgressCircleData,
  ProgressCircleCounter,
} from "./styled";

type ProgressCircleProps = {
  initialState: number;
  size?: number;
};

export const ProgressCircle: React.FC<ProgressCircleProps> = ({
  initialState,
  size = 150,
}) => {
  const correctSize = size / 2 - 5;
  const correctDasharray = Math.PI * 2 * correctSize;

  return (
    <ProgressCircleWrapp size={size}>
      <ProgressCircleSvg>
        <ProgressCircleSvgLine
          cx={correctSize}
          cy={correctSize}
          r={correctSize}
        />
        <ProgressCircleSvgLineOver
          cx={correctSize}
          cy={correctSize}
          r={correctSize}
          value={initialState}
          correctSize={correctSize}
          correctDasharray={correctDasharray}
        />
      </ProgressCircleSvg>
      <ProgressCircleData>
        <ProgressCircleCounter>{initialState}%</ProgressCircleCounter>
      </ProgressCircleData>
    </ProgressCircleWrapp>
  );
};
