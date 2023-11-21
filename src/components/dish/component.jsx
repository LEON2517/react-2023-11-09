import { useState } from "react";
import { Counter } from "../counter/component";

export const Dish = ({ dish }) => {
  const [count, setCount] = useState(0);

  function decrement() {
    if (count <= 0) return null;
    setCount(count-1)
  }

  function increment() {
    if (count >= 5) return null;
    setCount(count+1)
  }

  if (!dish) return null;
  return (
    <div>
      <span>
      {dish.name}
      </span>
      <Counter
        count={count}
        decrement={decrement}
        increment={increment}
      />
    </div>
  )
}