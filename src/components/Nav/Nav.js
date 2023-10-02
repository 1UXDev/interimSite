import styles from "./Nav.module.css";

import Menu from "../Menu/Menu";
import Brand from "../Brand/Brand";

export default function Nav() {
  return (
    <div className={`${styles.NavContainer}`}>
      <Brand />
      <Menu />
    </div>
  );
}
