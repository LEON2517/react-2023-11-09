import { Tab } from "../tab/component";

export const Tabs = ({ restaurants, onRestaurantSelect }) => <div>
  {restaurants.map(({ name, id }) =>
    <Tab onClick={() => onRestaurantSelect(id)}>
      {name}
    </Tab>)}
</div>