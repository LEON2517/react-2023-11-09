import { UserContainer } from "../user/container";
import { Button } from "../button/component";
import styles from "../review-form/styles.module.scss";
import { useState } from "react";
import {ReviewForm} from "../review-form/component";

export const Review = ({ className, review }) => {
  const [isOpenChangeReviewForm, setIsOpenChangeReviewForm] = useState(false)
  return (
    <div className={className}>
      <UserContainer review={review} />
      {isOpenChangeReviewForm ? <ReviewForm review={review} isOpenChangeReviewForm={isOpenChangeReviewForm} /> : (
        <>
          <div>
            {review.text}
          </div>
          <div>
            {review.rating}
          </div>
          <Button
            className={styles.button}
            onClick={() => setIsOpenChangeReviewForm(!isOpenChangeReviewForm)}
          >
            Изменить отзыв
          </Button>
        </>
      )}
    </div>
  )
}