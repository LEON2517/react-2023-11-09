import { Dish } from "../dish/component";

export const Dishes = ({ menu }) => <ul>
  {menu.map(dish => <li>
    <Dish dish={dish} />
  </li>)}
</ul>