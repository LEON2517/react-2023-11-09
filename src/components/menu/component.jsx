import { Dishes } from "../dishes/component";
import styles from "./styles.module.scss";

export const Menu = ({ menu, className }) => <div>
  <span className={styles.title}>Меню</span>
  <Dishes menu={menu} className={className} />
</div>