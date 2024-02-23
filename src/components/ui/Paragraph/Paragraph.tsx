import React from 'react'
import styles from "./Paragraph.module.scss";
interface IParagraph{
  className: string, title: string
}
const Paragraph = ({className, title}:IParagraph) => {
  return (
    <p className={`${styles.paragraph} ${className}`}>{title}</p>
    
  )
}

export default Paragraph;
