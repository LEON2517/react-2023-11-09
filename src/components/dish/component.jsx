import { useState } from "react";
import { Counter } from "../counter/component";

export const Dish = ({ dish }) => {
  const [value, setValue] = useState(0);

  function decrement() {
    setValue(value-1)
  }

  function increment() {
    setValue(value+1)
  }

  if (!dish) return null;
  return (
    <div>
      <span>
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