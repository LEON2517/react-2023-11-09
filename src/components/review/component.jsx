export const Review = ({ review, className }) => {
  if (!review) return null;
  return <span>
  {review.text}
</span>
}