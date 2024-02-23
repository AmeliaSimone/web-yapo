import React from "react";
import styles from "./CarProgress.module.scss";

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
  return (
    <div className={styles.cardProgress}>
      {data.map((item, num) => (
        <div className={styles.itemPro} key={num}>
          <span className={styles.number}>{item.id}</span>
          {item.alert && <span className={styles.alert}>Importante !</span>}
          <div className={styles.contenImg}>
            <img src={item.img} alt={item.img} />
          </div>
          <div className={styles.contenInfo}>
            <h1>{item.title}</h1>
            <p dangerouslySetInnerHTML={{ __html: item.text }}></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardProgress;