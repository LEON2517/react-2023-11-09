import { Tab } from "../tab/component";

export const Tabs = ({ restaurants }) =>
  restaurants.map(restaurant => <Tab>
    {restaurant.name}
  </Tab>)