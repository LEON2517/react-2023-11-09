import { useDispatch, useSelector } from "react-redux";
import { selectDishBiId } from "../../redux/features/entities/dish/selectors";
import { Dish } from "./component";
import { selectDishAmount } from "../../redux/ui/cart/selectors";
import { cartActions } from "../../redux/ui/cart";
import { Counter } from "../counter/component";

export const DishContainer = ({ dishId, ...rest}) => {
  // Берем dish по dishId из entities загруженного фанкой getDishes()
  // для срабатывания getDishes() нужен redtaurantId полученные от клика на tab, поэтому грузим блюда в
  // компоненте restaurant, что бы не кидать redtaurantId через все компоненты
  const dish = useSelector(state => selectDishBiId(state, dishId))

  const amount = useSelector(state => selectDishAmount(state, dishId))
  const dispatch = useDispatch();
  const decrement = () => dispatch(cartActions.decrement(dishId))
  const increment = () => dispatch(cartActions.increment(dishId))

  if (!dish) return null;
  return (
    <Dish {...rest} dish={dish} dishId={dishId}>
      <Counter
        value={amount}
        decrement={decrement}
        increment={increment}
      />
    </Dish>
  )
}