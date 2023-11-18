import { Menu } from "../menu/component";

export const Restaurant = ({ restaurant }) => <div>
  <h3>{restaurant.name}</h3>
  <Menu restaurant={restaurant} />
</div>