import { Dishes } from "../dishes/component";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const Menu = ({ menu, className }) => <div className={classNames(styles.menu, className)}>
  <span className={styles.title}>Menu</span>
  <Dishes menu={menu} />
</div>