import styles from "./Header.module.scss";
import cookchef from "../assets/images/cookchef.png";
export default function Header() {
  return (
    <header className={`${styles.header} d-flex flex-row align-items-center `}>
      <i class="fa-solid fa-bars mr-5"></i>
      <div className="flex-fill">
        <img src={cookchef} alt="Logo cookchef" />
      </div>
      <ul>
        <button className="mr-5 btn btn-reverse-primary">
          <i class="fa-solid fa-basket-shopping mr-5"></i>
          <span>panier</span>
        </button>
        <button className="btn btn-primary">connexion</button>
      </ul>
    </header>
  );
}
