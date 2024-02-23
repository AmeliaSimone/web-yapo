import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const withScrollAnimation = (WrappedComponent: any) => {
  const WithScrollAnimation = ({ className, children, ...props }: any) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
    });

    const variants = {
      hidden: { scale: 0.9, opacity: 0 },
      show: {
        scale: 1,
        opacity: 1,
        transition: {
          duration: 1,
        },
      },
    };

    return (
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className={className}
      >
        {children}
      </motion.div>
    );
  };

  WithScrollAnimation.displayName = `withScrollAnimation(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return WithScrollAnimation;
};

export default withScrollAnimation;