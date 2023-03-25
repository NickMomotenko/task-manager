import { RowWrapp } from "./styled";

import { VerticalTypes } from "./types";

type RowProps = {
  children: React.ReactNode;
  verticalSpace?: VerticalTypes;
};

export const Row: React.FC<RowProps> = ({
  children,
  verticalSpace = "",
  ...rest
}) => {
  return (
    <RowWrapp verticalSpace={verticalSpace} {...rest}>
      {children}
    </RowWrapp>
  );
};
