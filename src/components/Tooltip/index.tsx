import { TooltipWrapp } from "./styled";

type TooltipProps = {
  text: string;
  position?: string;
};

export const Tooltip: React.FC<TooltipProps> = ({ text, position }) => {
  return <TooltipWrapp position={position}>{text}</TooltipWrapp>;
};
