import { useState } from "react";
import styles from "./Recipe.module.scss";

const Recipe = ({ _id, title, image }) => {
  const [liked, setLiked] = useState(false);
  function handleClick() {
    setLiked(!liked);
  }
  return (
    <div onClick={handleClick} className={styles.recipe}>
      <div className={styles.imageContainer}>
        <img src={image} alt="Recipe" />
      </div>
      <div
        className={`${styles.recipeTitle} d-flex flex-column justify-content-center align-items-center `}
      >
        <h3 className="mb-10">{title}</h3>
        <i
          className={`fa-solid fa-heart ${styles.heartIcon} ${liked ? "text-primary" : " "}`}
        ></i>
      </div>
    </div>
  );
};

export default Recipe;
