import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";
import { ReviewForm } from "../review-form/component";

export const Restaurant = ({ restaurant }) => {
  if (!restaurant) return null;
  return (
    <div>
      <h3>{restaurant.name}</h3>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
      <ReviewForm />
    </div>
  )
}