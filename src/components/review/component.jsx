export const Review = ({ review, className }) => {
  if (!review) return null;
  return (
    <div className={className}>
      <span>
        {review.text}
      </span>
    </div>
  )
}