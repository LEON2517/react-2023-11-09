import styles from "./styles.module.scss";

export const Tab = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className={styles.tab}>
      {children}
    </div>
  )
}