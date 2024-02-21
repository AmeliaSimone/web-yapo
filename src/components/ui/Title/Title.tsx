import React from 'react'
import styles from "./Title.module.scss";

const Title = ({className, text}:any) => {
  return (
    <div className={`${styles.title} ${className}`}>{text}</div>
  );
};


export default Title;