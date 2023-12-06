import { useState } from "react";
import { Counter } from "../counter/component";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { selectDishBiId } from "../../redux/features/entities/dish/selectors";

export const Dish = ({ id, className }) => {

  const dish = useSelector((state) => selectDishBiId(state, id))

  const [value, setValue] = useState(0);

  function decrement() {
    setValue(value-1)
  }

  function increment() {
    setValue(value+1)
  }

  if (!dish) return null;
  return (
    <div className={classNames(styles.dish, className)}>
      <span className={styles.title}>
        {dish.name}
      </span>
      <Counter
        value={value}
        decrement={decrement}
        increment={increment}
      />
    </div>
  )
}