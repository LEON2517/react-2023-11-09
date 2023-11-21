import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";

export const Restaurant = ({ restaurant }) => <div>
  <h3>{restaurant.name}</h3>
  <Menu menu={restaurant.menu} />
  <Reviews reviews={restaurant.reviews} />
</div>