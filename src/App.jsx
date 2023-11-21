import { RestaurantsPage } from "./pages/restaurants-page/component";
import { restaurants } from "./constants/mock";

export const App = () => {
  return <RestaurantsPage restaurants={restaurants} />
}