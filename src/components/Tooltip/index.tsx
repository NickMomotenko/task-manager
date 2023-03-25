import { TooltipWrapp } from "./styled";

type TooltipProps = {
  children: React.ReactNode;
  position?: string;
};

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  position = "top",
}) => {
  return <TooltipWrapp position={position}>{children}</TooltipWrapp>;
};
