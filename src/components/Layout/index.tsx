import React from "react";

import { RowWrapp } from "./styled";

export const Row: React.FC<{ children: React.ReactNode; btw?: boolean }> = ({
  children,
  ...rest
}) => {
  return <RowWrapp {...rest}>{children}</RowWrapp>;
};
