import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/features/entities/review/selectors";
import { selectUserById } from "../../redux/features/entities/user/selectors";

export const Review = ({ id, className }) => {
  const review = useSelector(state => selectReviewById(state, id))
  const user = useSelector(state => selectUserById(state, review.userId))

  return (
    <div className={className}>
      <div>
        {user.name}
      </div>
      <div>
        {review.text}
      </div>
    </div>
  )
}