import { Dishes } from "../dishes/component";
import { Reviews } from "../reviews/component";

export const Menu = ({ restaurant }) => <div>
  <span>Меню</span>
  <Dishes menu={restaurant.menu} />
  <span>Отзывы</span>
  <Reviews reviews={restaurant.reviews} />
</div>