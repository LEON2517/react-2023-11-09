import { MenuContainer } from "../menu/container";
import { ReviewsContainer } from "../reviews/container";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { ReviewFormCreateContainer } from "../review-form/create-review";
import { Button } from "../button/component";
import { useNavigate } from "react-router-dom";

export const Restaurant = ({ className, restaurant, restaurantId }) => {
  const navigate = useNavigate()

  if (!restaurant) return null;

  return (
    <div className={classNames(styles.restaurant, className)}>
      <div className={styles.box}>
        <h3>{restaurant.name}</h3>
      </div>
      <div>
        <Button onClick={() => navigate(`${restaurantId}/menu`)}>
          меню
        </Button>
        <Button onClick={() => navigate(`${restaurantId}/review`)}>
          Отзывы
        </Button>
      </div>
      <div className={styles.content}>
        <MenuContainer restaurantId={restaurantId} />
        <ReviewsContainer restaurantId={restaurantId} />
        <ReviewFormCreateContainer restaurantId={restaurantId} />
      </div>
    </div>
  )
}