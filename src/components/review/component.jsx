export const Review = ({ className, review, user }) => {
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