import styled from "styled-components";

export const TooltipWrapp = styled.div`
  background: #333333;
  border-radius: 4px;
  font-size: 10px;
  color: #f2f2f2;
  padding: 3.5px 17px;
  display: inline-block;
  white-space: nowrap;

  position: absolute;

  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);

  &:after {
    content: "";
    display: inline-block;
    position: absolute;
    left: 50%;
    top: 100%;

    border: 5px solid transparent;
    border-top-color: #333333;

    transform: translateX(-50%);
  }
`;

interface TooltipProps {
  text: string;
  position: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ text, position }) => {
  return <TooltipWrapp>{text}</TooltipWrapp>;
};
