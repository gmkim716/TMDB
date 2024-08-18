"use client";

import ReviewItem from "../ReviewItem";
import styles from "./MovieReviewList.module.css";

interface ReviewListProps {
  reviews: Review[];
}

export default function ReviewList({ reviews }: ReviewListProps) {
  if (!reviews || reviews.length === 0) {
    return <div>리뷰가 없습니다.</div>;
  }

  return (
    <div className={styles.reviewList}>
      {reviews.map((review) => (
        <ReviewItem
          key={review.id}
          title={review.title}
          content={review.content}
          username={review.username}
        />
      ))}
    </div>
  );
}
