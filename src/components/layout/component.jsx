import { Header } from "../header/component";
import {Footer} from "../footer/component";
import styles from "./styles.module.scss";

export const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  )
}