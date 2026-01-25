import styles from "./Content.module.scss";
export default function Content() {
  return (
    <div className="flex-fill container p-20">
      <h1 className="my-30 ">Découvrez nos nouvelles recettes</h1>
      <div className={` ${styles.contentCard} card p-10`}>
        <div className={`${styles.grid} `}>
          <div className={styles.elem}>ELEMENT</div>
          <div className={styles.elem}>ELEMENT</div>
          <div className={styles.elem}>ELEMENT</div>
          <div className={styles.elem}>ELEMENT</div>
          <div className={styles.elem}>ELEMENT</div>
          <div className={styles.elem}>ELEMENT</div>
        </div>
      </div>
    </div>
  );
}
