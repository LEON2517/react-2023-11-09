import classNames from "classnames";
import styles from "./styles.module.scss";

export const Counter = ({value, decrement, increment, min = 0, max = 5, className}) => {
  return (
    <div className={classNames(styles.counter, className)}>
      <Button
        position='left'
        onClick={() => decrement()}
        disabled={value <= min}
      >
        -
      </Button>
      <div>
        <input
          className={styles.input}
          type="text"
          value={value}
        />
      </div>
      <Button
        position='right'
        onClick={() => increment()}
        disabled={value >= max}
      >
        +
      </Button>
    </div>
  )
}

const Button = ({ children, position, onClick, disabled }) => {
  if (!position) return null;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={classNames(styles.button,{
        [styles.left]: position === 'left',
        [styles.right]: position === 'right',
      })}
    >
      {children}
    </button>
  )
}
