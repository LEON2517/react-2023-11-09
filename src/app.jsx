import './styles/main.scss';
import { RestaurantsPageContainer } from "./pages/restaurants-page/container";
import { Provider } from "react-redux";
import store from "./redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/layout/component";
import { MainPage } from "./pages/main-page/component";
import { NotfoundPage } from "./pages/notfound-page/component";
import { Restaurant } from "./components/restaurant/component";
import { MenuContainer } from "./components/menu/container";
import { ReviewsContainer } from "./components/reviews/container";

export const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<MainPage />} />
            <Route path="restaurants" element={<RestaurantsPageContainer />}>
              <Route index element={<div>Выберите ресторан</div>} />
              <Route path=":restaurantId" element={<Restaurant />}>
                <Route path="menu" element={<MenuContainer />} />
             {/*   <Route path=":restaurantId" element={<Navigate to=":restaurantId/menu" replace />} />
                    Не срабатывает редирект
             */}
                <Route path="review" element={<ReviewsContainer />} />
              </Route>
            </Route>
            <Route path="*" element={<NotfoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  )
}