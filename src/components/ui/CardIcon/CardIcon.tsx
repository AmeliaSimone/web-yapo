import React from "react";
import styles from "./CardIcon.module.scss";
interface ICardIcon {
  icon: string;
  title: string;
  text: string;
}
const CardIcon = ({ icon, title, text }: ICardIcon) => {
  return (
    <div className={styles.cardIcon}>
      <span className="material-symbols-outlined">{icon}</span>
      <div className={styles.cardIconContent}>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default CardIcon;
