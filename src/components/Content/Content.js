import styles from "./Content.module.css";

export default function Content() {
  return (
    <section className={`${styles.ContentSection}`}>
      {/* <div className={`${styles.DesignLine}`}></div> */}
      <article className={`${styles.ContentArticle}`}>
        <h1>Challenge the Status Quo</h1>
      </article>
      <article className={`${styles.ContentArticle}`}>
        <h1>Create Prototypes</h1>
      </article>
      <article className={`${styles.ContentArticle}`}>
        <h1>Code Visions into Reality</h1>
      </article>
    </section>
  );
}
