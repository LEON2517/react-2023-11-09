import { Dishes } from "../dishes/component";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const Menu = ({ className, dishes }) => <div className={classNames(styles.menu, className)}>
  <span className={styles.title}>Menu</span>
  <Dishes dishes={dishes} />
</div>