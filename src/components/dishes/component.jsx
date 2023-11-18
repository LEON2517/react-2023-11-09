import { Dish } from "../dish/component";

export const Dishes = ({ menu }) => <ul>
  {menu.map(dish =>
    <Dish dish={dish} />)
  }
</ul>