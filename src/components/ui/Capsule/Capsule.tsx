import React from "react";

import styles from "./Capsule.module.scss";

const Capsule = ({
  iconName,
  height,
  width,
  color,
  backgroundColor,
  text,
  borderRadius,
  className
}: any) => {
  return (
    <div
      className={`${styles.capsule} ${className}`}
      style={{
        height: height,
        width: width,
        color: color,
        backgroundColor: backgroundColor, borderRadius: borderRadius
      }}
    >
      <span className="material-icons" style={{ fontSize:"24px", color: color }}>
        {iconName}
      </span>
      {text}
    </div>
  );
};

export default Capsule;