import { Dishes } from "../dishes/component";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const Menu = ({ className, dishIds }) => <div className={classNames(styles.menu, className)}>
  <span className={styles.title}>Menu</span>
  <Dishes dishIds={dishIds} />
</div>