import React, { useEffect, useState } from "react";

type SliderProps = {
  limit?: number | any;
};

export const useSlider = ({ limit }: SliderProps) => {
  const [index, setIndex] = useState(0);

  const wrapperRef = React.useRef<any>(null);

  const next = () => {
    setIndex((prev) => {
      if (prev + 1 === limit) {
        return prev;
      }

      return prev + 1;
    });
  };

  const prev = () => {
    setIndex((prev) => {
      if (index < 1) {
        return prev;
      }

      return prev - 1;
    });
  };

  return { index, next, prev, wrapperRef };
};
