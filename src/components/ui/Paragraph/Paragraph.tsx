import React from 'react'
import styles from "./Paragraph.module.scss";

const Paragraph = ({className, children}:any) => {
  return (
    <p className={`${styles.paragraph} ${className}`}>{children}</p>
    
  )
}

export default Paragraph;
