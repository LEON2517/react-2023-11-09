import { useSelector } from "react-redux";
import { selectDishBiId } from "../../redux/features/entities/dish/selectors";
import { Dish } from "./component";

export const DishContainer = ({ dishId, ...rest}) => {
  const dish = useSelector((state) => selectDishBiId(state, dishId))
  if (!dish) return null;
  return <Dish {...rest} dish={dish} />
}