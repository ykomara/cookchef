import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer
      className={`${styles.footer} d-flex flex-row align-items-center justify-content-center`}
    >
      <p> Copyright © CookChef Platforms, Inc </p>
    </footer>
  );
}
