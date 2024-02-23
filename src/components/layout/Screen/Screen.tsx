import React from 'react';

import styles from "./Screen.module.scss";

const Screen = ({children, align, className }: any) => {
  return <div className={styles.screen} style={{justifyContent:align}}>{children}</div>;
}

export default Screen;