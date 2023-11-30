import { useState } from "react";
import { Counter } from "../counter/component";
import styles from "./styles.module.scss";

export const Dish = ({ dish, className }) => {
  const [value, setValue] = useState(0);

  function decrement() {
    setValue(value-1)
  }

  function increment() {
    setValue(value+1)
  }

  if (!dish) return null;
  return (
    <div className={className}>
      <span className={styles.title}>
      {dish.name}
      </span>
      <Counter
        className={className}
        value={value}
        decrement={decrement}
        increment={increment}
      />
    </div>
  )
}