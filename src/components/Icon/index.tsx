import React from "react";

interface IconProps {
  src: string | any;
  alt: string;
}

export const Icon: React.FC<IconProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};
