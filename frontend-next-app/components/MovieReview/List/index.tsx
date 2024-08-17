import ReviewItem from "../Item";

export default function ReviewList({ reviews }: { reviews: Review[] }) {
  return (
    <>
      {reviews.map((review) => (
        <ReviewItem
          key={review.id}
          title={review.title}
          content={review.content}
          username={review.username}
        />
      ))}
    </>
  );
}
