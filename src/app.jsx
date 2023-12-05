import './styles/main.scss';
import { RestaurantsPage } from "./pages/restaurants-page/component";
import { restaurants } from "./constants/mock";
import { Provider } from "react-redux";
import store from "./redux";

export const App = () => {
  return (
    <Provider store={store}>
      <RestaurantsPage restaurants={restaurants} />
    </Provider>
  )
}