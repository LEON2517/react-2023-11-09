import './styles/main.scss';
import { RestaurantsPageContainer } from "./pages/restaurants-page/container";
import { Provider } from "react-redux";
import store from "./redux";

export const App = () => {
  return (
    <Provider store={store}>
      <RestaurantsPageContainer />
    </Provider>
  )
}