import { UserContainer } from "../user/container";

export const Review = ({ className, review }) => {
  return (
    <div className={className}>
      <UserContainer review={review} />
      <div>
        {review.text}
      </div>
    </div>
  )
}