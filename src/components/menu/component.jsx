import { Dishes } from "../dishes/component";

export const Menu = ({ menu }) => <div>
  <span>Меню</span>
  <Dishes menu={menu} />
  <span>Отзывы</span>
</div>