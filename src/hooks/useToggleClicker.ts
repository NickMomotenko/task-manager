import { useState, useEffect } from "react";

type Test = {
  titleRef: any;
  bodyRef: any;
  iconRef: any;
  initialState: boolean;
};

export const useToggleClicker = ({
  titleRef,
  bodyRef,
  iconRef,
  initialState,
}: Test) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState ?? true);
  const [bodyStyles, setBodyStyles] = useState<any>(null);

  useEffect(() => {
    if (bodyRef.current) {
      setBodyStyles(getComputedStyle(bodyRef.current));
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (isOpen) {
        console.log(bodyStyles?.height);

        bodyRef.current.style.height = `${bodyStyles?.height}`;
        bodyRef.current.style.marginTop = bodyStyles?.marginTop;
        bodyRef.current.style.visibility = "visible";
        bodyRef.current.style.overflow = "";
        bodyRef.current.style.opacity = "1";
        bodyRef.current.style.transition = `opacity .4s .6s , height .4s`;
      } else {
        bodyRef.current.style.height = 0;
        bodyRef.current.style.marginTop = 0;
        bodyRef.current.style.visibility = "hidden";
        bodyRef.current.style.overflow = "hidden";
        bodyRef.current.style.opacity = "0";
        bodyRef.current.style.transition = `opacity .5s , height  .4s`;
      }
    }, 0);
  }, [isOpen]);

  const handleOpenClick = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen, handleOpenClick };
};
