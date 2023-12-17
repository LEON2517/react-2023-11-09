import { Restaurant } from "./component";
import {useParams} from "react-router-dom";

export const RestaurantContainer = ({ restaurantId, ...rest}) => {
/*  const { restaurantId } = useParams();*/

  return <Restaurant {...props} restaurantId={restaurantId} />
}