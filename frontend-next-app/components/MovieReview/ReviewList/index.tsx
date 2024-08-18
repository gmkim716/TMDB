"use client"; // info. 부모 컴포넌트인 Review 컴포넌트가 CSR이기 때문에 SSR을 자식 컴포넌트로 둘 수 없습니다. ReviewList 컴포넌트에 CSR를 적용합니다

import ReviewItem from "../ReviewItem";
import styles from "./MovieReviewList.module.css";

export default function ReviewList({ reviews }: { reviews: any[] }) {
  return (
    <div className={styles.reviewList}>
      {reviews.map((review) => (
        <ReviewItem
          key={review.id}
          reviewId={review.id}
          title={review.title}
          content={review.content}
          username={review.username}
        />
      ))}
    </div>
  );
}
