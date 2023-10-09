// pages/index.js
import { useState, useEffect } from "react";
import styles from "./Hero2.module.css";

export default function Hero2() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to track scrolling
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Remove the scroll event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Check the scroll position to determine the scrolling state
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  return (
    <div className={`${styles.hero} ${scrolling ? styles.scrolled : ""}`}>
      <h1 className={scrolling ? styles["nav-logo"] : ""}>Your Logo</h1>
      <h2 className={scrolling ? styles["h2-hidden"] : ""}>Tagline</h2>
      <div className={styles.designline}></div>
    </div>
  );
}
