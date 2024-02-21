import React from 'react'

import styles from "./Header.module.scss"

const Header = ({children, width, align, className}:any) => {
  return (
    <div className={`${styles.header} ${className}`} style={{width:width, justifyContent:align}}>{children}</div>
    
  );
};

export default Header;