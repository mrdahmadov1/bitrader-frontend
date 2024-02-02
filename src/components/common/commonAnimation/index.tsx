import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CommonAnimationProps } from "../../../models/ICommonAnimationProps";

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
