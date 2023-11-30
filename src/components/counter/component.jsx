import classNames from "classnames";
import styles from "./styles.module.scss";

// стиль счетчика доделаю чуть позже, немного не успел
export const Counter = ({value, decrement, increment, min = 0, max = 5, className}) => {
  return (
    <div className={className}>
      <button
        type="button"
        onClick={() => decrement()}
        disabled={value <= min}
        className={styles.button}
      >
        -
      </button>
      <div>
        <input
          className={styles.input}
          type="text"
          value={value}
        />
      </div>
      <button
/*        className={classNames(styles.button,{
          [styles.left]: type === 'left',
          [styles.right]: type === 'right',
        })}*/
        type="button"
        onClick={() => increment()}
        disabled={value >= max}
      >
        +
      </button>
    </div>
  )
}
/*

const Button = ({ type, onClick }) => {
  if (!type) return null;
  return (
    <button
      className={classNames(styles.button,{
        [styles.left]: type === 'left',
        [styles.right]: type === 'right',
      })}
      type="button"
      onClick={onClick}
      disabled={value >= max}
    >
      +
    </button>
  )
}*/
