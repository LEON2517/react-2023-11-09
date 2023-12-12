import { Menu } from "./component";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getDishes } from "../../redux/entities/dish/thunks/get-dishes";

export const MenuContainer = ({ dishIds, restaurantId}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDishes(restaurantId))
  }, [restaurantId])

  return <Menu dishIds={dishIds} />
}