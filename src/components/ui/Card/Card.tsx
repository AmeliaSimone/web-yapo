import React from "react";
import Capsule from "../Capsule";
import styles from "./Card.module.scss"
interface ICard{
    num: number,
    title: string,
    text: string
}
const Card = ({num, title, text}:ICard) => {
  return (
    <div className={styles.card}>
      <Capsule text={num} />
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
};

export default Card;
