import { Tabs } from "../../components/tabs/component";
import {Restaurants} from "../../components/restaurants/component";

export const RestaurantsPage = ({ restaurants }) => {
  return <div>
    <Tabs restaurants={restaurants} />
    <Restaurants restaurants={restaurants} />
  </div>
}