import React from "react";
import Capsule from "../Capsule";
import styles from "./Card.module.scss";
import withScrollAnimation from "../Framer";
interface ICard {
  num: number;
  title: string;
  text: string;
}
const Card = ({ num, title, text }: ICard) => {
  const AnimateDiv = withScrollAnimation("div");
  return (
    <AnimateDiv className={styles.card}>
      <Capsule text={num} />
      <h1>{title}</h1>
      <p>{text}</p>
    </AnimateDiv>
  );
};

export default Card;
