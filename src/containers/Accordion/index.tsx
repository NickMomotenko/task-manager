import React, { useEffect, useRef, useState } from "react";

import { AccordionWrapp, AccordionHeader, AccordionBody } from "./styled";

type AccordionProps = {
  header: React.ReactNode;
  children: React.ReactNode;
};

export const Accordion: React.FC<AccordionProps> = ({ header, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [bodyStyles, setBodyStyles] = useState<any>(null);

  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bodyRef.current) {
      setBodyStyles(getComputedStyle(bodyRef.current.children[0]));
    }
  }, []);

  return (
    <AccordionWrapp>
      <AccordionHeader onClick={() => setIsOpen(!isOpen)}>
        {header}
      </AccordionHeader>
      <AccordionBody isOpen={isOpen} ref={bodyRef} height={bodyStyles?.height}>
        {children}
      </AccordionBody>
    </AccordionWrapp>
  );
};
