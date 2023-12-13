import { Menu } from "./component";
import { useGetDishesQuery } from "../../redux/services/api";

export const MenuContainer = ({ restaurantId }) => {

  const { data, isFetching } = useGetDishesQuery(restaurantId);
  if (isFetching) return "Loading...";

  return <Menu dishes={data} />

}