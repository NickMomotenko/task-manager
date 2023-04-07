import React, { useEffect, useRef, useState } from "react";

import {
  AccordionWrapp,
  AccordionHeader,
  AccordionBody,
  AccordionPaper,
  AccordionIcon,
} from "./styled";

import { Title } from "../../components/Title";
import { Icon } from "../../components/Icon";

import arrowIcon from "../../assets/icons/arrow.svg";

type AccordionProps = {
  children: React.ReactNode;
  title: string;
};

export const Accordion: React.FC<AccordionProps> = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [bodyStyles, setBodyStyles] = useState<any>(null);

  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bodyRef.current) {
      setBodyStyles(getComputedStyle(bodyRef.current.children[0]));
    }
  }, []);

  return (
    <AccordionWrapp>
      <AccordionPaper>
        <AccordionHeader onClick={() => setIsOpen(!isOpen)}>
          <Title text={title} />
          <AccordionIcon isOpen={isOpen}>
            <Icon
              src={arrowIcon}
              alt="arrow icon"
              size={{ h: "15px", w: "15px" }}
            />
          </AccordionIcon>
        </AccordionHeader>
        <AccordionBody
          isOpen={isOpen}
          ref={bodyRef}
          height={bodyStyles?.height}
        >
          {children}
        </AccordionBody>
      </AccordionPaper>
    </AccordionWrapp>
  );
};
