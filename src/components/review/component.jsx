import { UserContainer } from "../user/container";
import { Button } from "../button/component";
import styles from "../review-form/styles.module.scss";
import { useState } from "react";
import { ReviewFormUpdateContainer } from "../review-form/update-review";

export const Review = ({ className, review }) => {

  const [isOpenChangeReviewForm, setIsOpenChangeReviewForm] = useState(false)
  return (
    <div className={className}>
      <UserContainer review={review} />
      {isOpenChangeReviewForm ? <ReviewFormUpdateContainer
        data={{
          name: review.name,
          text: review.text,
          rating: review.rating
        }}
        reviewId={review.id}
        isOpenChangeReviewForm={isOpenChangeReviewForm}
      /> : (
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