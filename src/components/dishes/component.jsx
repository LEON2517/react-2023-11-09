import { Dish } from "../dish/component";

export const Dishes = ({ menu, className }) => <ul className={className}>
  {menu.map(dish => <li>
    <Dish dish={dish} className={className} />
  </li>)}
</ul>