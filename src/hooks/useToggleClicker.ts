import { useState, useRef, useEffect } from "react";

export const useToggleClicker = (initialState: boolean) => {
  const [isOpen, setIsOpen] = useState(initialState ?? false);

  const bodyRef = useRef<any>(null);
  const bodyWrappRef = useRef<any>(null);

  useEffect(() => {
    const bodyHeightWrapp =
      bodyWrappRef.current && bodyWrappRef.current.clientHeight;

    const bodyWrappStyles = getComputedStyle(bodyWrappRef.current);

    const correctHeightWithMargin =
      bodyWrappRef.current &&
      Number(bodyWrappStyles.marginTop.split("px")[0]) + bodyHeightWrapp;

    if (isOpen) {
      bodyRef.current.style.height = `${correctHeightWithMargin}px`;
      bodyRef.current.style.opacity = 1;
      bodyRef.current.style.visibility = "visible";
      bodyRef.current.style.transition = `opacity .4s .6s , height .4s`;
    } else {
      bodyRef.current.style.height = `0px`;
      bodyRef.current.style.opacity = 0;
      bodyRef.current.style.visibility = "hidden";
      bodyRef.current.style.transition = `opacity .5s , height  .4s`;
    }
  }, [isOpen]);

  const handleOpenClick = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen, handleOpenClick, bodyRef, bodyWrappRef };
};
