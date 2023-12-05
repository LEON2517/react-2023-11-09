import { Header } from "../header/component";
import { Footer } from "../footer/component";
import styles from "./styles.module.scss";
import { ThemeProvider } from "../theme/component";

export const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <ThemeProvider>
        <Header className={styles.header} />
        <main>
          {children}
        </main>
      </ThemeProvider>
      <Footer />
    </div>
  )
}