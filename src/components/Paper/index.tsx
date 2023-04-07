import React from "react";

import { PaperWrapp } from "./styled";

type PaperWrappProps = {
  children: React.ReactNode;
};

export const Paper: React.FC<PaperWrappProps> = ({ children }) => {
  return <PaperWrapp>{children}</PaperWrapp>;
};
