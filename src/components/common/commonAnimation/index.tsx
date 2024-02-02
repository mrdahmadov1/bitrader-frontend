import React, { ReactNode, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

interface CommonAnimationProps {
  variants: variantsType;
  className?: string;
  children: ReactNode;
}

const CommonAnimation: React.FC<CommonAnimationProps> = ({
  variants,
  className,
  children,
}) => {
  const [ref, inView] = useInView({ triggerOnce: false });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate={controls}
      variants={variants}
      ref={ref}
    >
      {children}
    </motion.div>
  );
};

export default CommonAnimation;
