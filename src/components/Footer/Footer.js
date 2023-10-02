import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={`${styles.FooterContainer}`}>
      <ul>
        <li>Impressum</li>
        <li>Contact</li>
        <li>Freelance Network</li>
      </ul>
    </div>
  );
}
