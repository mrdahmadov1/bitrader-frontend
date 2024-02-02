import { ReactNode } from "react";

type variantsType = {
  hidden: {
    opacity: number;
    x: number;
  };
  visible: {
    opacity: number;
    x: number;
    transition: {
      duration: number;
    };
  };
};

export interface CommonAnimationProps {
  variants: variantsType;
  className?: string;
  children: ReactNode;
}
