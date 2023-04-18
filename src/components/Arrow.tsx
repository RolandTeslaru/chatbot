import { HTMLMotionProps, motion } from "framer-motion";
import React, { FC } from "react";
import s from "./Arrow.module.scss";

interface Props extends HTMLMotionProps<"div"> {
    strokeWidth?: number;
    fill?: boolean;
    width?: string;
    height?: string;
    className?: string;
    theme?: string
}

const Arrow: FC<Props> = ({strokeWidth, width, height, className, fill = false,theme = "dark", ...rest}) => {
  return (
    <motion.div
      {...rest}
      className={`${s.Arrow} ${className}`}
    >
      <svg viewBox="0 0 60 60" width="100%" height="100%">
        <path
          d="M12.545285,5 L46.743,39.198 L46.74357,5.246688 L56,5.246688 L56,55 L6.246688,55 L6.246688,45.74357 L40.198,45.743 L6,11.545285 L12.545285,5 Z"
          fill={`${fill ? "#ffffff" : "transparent"}`}
          stroke={theme === 'light' ? "#ffffff" : "#000000"}
          stroke-width={strokeWidth || 2}
        />
      </svg>
    </motion.div>
  );
};

export default Arrow;
