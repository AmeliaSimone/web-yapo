import React, { useState, useEffect } from "react";
import styles from "./Reviews.module.scss";
import withScrollAnimation from "../Framer";

const reviewsData = [
  {
    text:
      "Muy ágil la comunicación con la administración. Además el valor del servicio muy accesible, definitivamente mi próxima transferencia la realizaré con ustedes.",
    author: "Cindy P. / 2024"
  },
  {
    text:
      "Super buena plataforma para personas con poco tiempo de realizar transferencia vehicular. Económico, rápido y con buen respaldo de sus ejecutivos...",
    author: "Luis C. / 2024"
  },
  {
    text:
      "Muy eficiente. Uno entrega datos y realizan todo. Excelente servicio 10 de 10 👌👌👌",
    author: "Daniela F. / 2024"
  },
];

const Reviews = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const AnimateDiv = withScrollAnimation("div");
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentReviewIndex + 1) % reviewsData.length;
      setCurrentReviewIndex(nextIndex);
      console.log("activo")
    }, 5000);

    return () => clearInterval(interval);
  }, [currentReviewIndex]);

  return (
    <div className={styles.reviews}>
      <AnimateDiv className={styles.reviewContainer}>
        <h1>{reviewsData[currentReviewIndex].text}</h1>
        <p>{reviewsData[currentReviewIndex].author}</p>
        </AnimateDiv>
    </div>
  );
};

export default Reviews;
