import React from "react";

import { PaperWrapp } from "./styled";

interface PaperWrappProps {
  children: React.ReactNode;
}

export const Paper: React.FC<PaperWrappProps> = ({ children }) => {
  return <PaperWrapp>{children}</PaperWrapp>;
};
