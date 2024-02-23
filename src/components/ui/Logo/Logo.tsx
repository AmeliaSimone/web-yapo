import React from "react";

import styles from "./Logo.module.scss";

interface ILogo {
  width: string;
  height: string;
  onClick?: any;
}

const Logo = ({ width, height, onClick }: ILogo) => {
  return (
    <div
      className={styles.logo}
      style={{ width, height }}
      onClick={onClick}
    ></div>
  );
};

export default Logo;