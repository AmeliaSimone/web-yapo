import React from 'react'
import styles from "./Paragraph.module.scss";
import withScrollAnimation from "../Framer";
interface IParagraph{
  className: string, title: string
}
const Paragraph = ({className, title}:IParagraph) => {
  const AnimateDiv = withScrollAnimation("div");
  return (
    <AnimateDiv>
      <p className={`${styles.paragraph} ${className}`}>{title}</p>
    </AnimateDiv>
    
    
  )
}

export default Paragraph;
