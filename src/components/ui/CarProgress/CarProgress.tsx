import React from "react";
import styles from "./CarProgress.module.scss";
import withScrollAnimation from "../Framer";

interface IItem {
  id: string;
  img: string;
  title: string;
  text: string;
  alert?: boolean;
}
interface ICardProgress {
  data: IItem[];
}
const CardProgress = ({ data }: ICardProgress) => {
  const AnimateDiv = withScrollAnimation("div");
  return (
    
    <div className={styles.cardProgress}>
      {data.map((item, num) => (
        <AnimateDiv className={styles.itemPro} key={num}>
          <span className={styles.number}>{item.id}</span>
          {item.alert && <span className={styles.alert}>Importante !</span>}
          <div className={styles.contenImg}>
            <img src={item.img} alt={item.img} />
          </div>
          <div className={styles.contenInfo}>
            <h1>{item.title}</h1>
            <p dangerouslySetInnerHTML={{ __html: item.text }}></p>
          </div>
        </AnimateDiv>
      ))}
    </div>
  );
};

export default CardProgress;