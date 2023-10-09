import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <>
      <section className={`${styles.HeroSection}`}>
        <h1>Create</h1>
        <h2>Studio of Digital Product & Experience</h2>
      </section>
      <div className={`${styles.DesignLine}`}></div>
    </>
  );
}
