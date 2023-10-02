import styles from "./Content.module.css";

export default function Content() {
  return (
    <section className={`${styles.ContentSection}`}>
      <div className={`${styles.DesignLine}`}></div>
      <article className={`${styles.Stages}`}>
        <h2>Challenge</h2>
        <h2>Create</h2>
        <h2>Code</h2>
      </article>
    </section>
  );
}
