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
  noAcco?: boolean;
};

export const Accordion: React.FC<AccordionProps> = ({
  children,
  title,
  noAcco,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(noAcco ? true : false);
  const [bodyStyles, setBodyStyles] = useState<any>(null);

  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bodyRef.current) {
      setBodyStyles(getComputedStyle(bodyRef.current.children[0]));
    }
  }, []);

  const handleHeaderClick = () => {
    if (!noAcco) {
      setIsOpen(!isOpen);
    } else return;
  };

  return (
    <AccordionWrapp>
      <AccordionPaper>
        <AccordionHeader onClick={handleHeaderClick} noAcco={noAcco}>
          <Title text={title} />
          {!noAcco && (
            <AccordionIcon isOpen={isOpen}>
              <Icon
                src={arrowIcon}
                alt="arrow icon"
                size={{ h: "15px", w: "15px" }}
              />
            </AccordionIcon>
          )}
        </AccordionHeader>
        <AccordionBody
          isOpen={isOpen}
          ref={bodyRef}
          height={bodyStyles?.height}
          noAcco={noAcco}
        >
          {children}
        </AccordionBody>
      </AccordionPaper>
    </AccordionWrapp>
  );
};
