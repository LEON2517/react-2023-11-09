import { Tab } from "../tab/component";

export const Tabs = ({ restaurants }) => {
  return restaurants.map(restaurant =>
    <Tab restaurant={restaurant.name}/>)
}