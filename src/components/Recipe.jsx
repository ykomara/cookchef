import styles from "./Recipe.module.scss";

const Recipe = ({ title, image }) => {
  return (
    <div className={styles.recipe}>
      <div className={styles.imageContainer}>
        <img src={image} alt="Recipe" />
      </div>
      <div
        className={`${styles.recipeTitle} d-flex flex-row justify-content-center align-items-center `}
      >
        <h3>{title}</h3>
        lor
      </div>
    </div>
  );
};

export default Recipe;
