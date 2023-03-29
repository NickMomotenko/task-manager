import { RowWrapp } from "./styled";

import { VerticalTypes } from "./types";

type RowProps = {
  children: React.ReactNode;
  gorizontalSpace?: VerticalTypes;
};

export const Row: React.FC<RowProps> = ({
  children,
  gorizontalSpace = "",
  ...rest
}) => {
  return (
    <RowWrapp gorizontalSpace={gorizontalSpace} {...rest}>
      {children}
    </RowWrapp>
  );
};
