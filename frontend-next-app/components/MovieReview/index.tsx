"use client";

import styles from "./Review.module.css";
import ReviewList from "./ReviewList";
import PaginationOption from "./ReviewDisplayOption";
import FilterOption from "./ReviewFilterOption";
import PaginationControl from "./ReviewPaginationControl";
import useReview from "@/hooks/useReview";

interface ReviewProps {
  movieId: number;
}

export default function Review({ movieId }: ReviewProps) {
  const { currentPage, reviewsPerPage, setReviewsPerPage, reviews, totalPage } =
    useReview(movieId);

  return (
    <section id="reviews" className={styles.reviews}>
      <div className="container">
        <h2>관객 리뷰</h2>
        <div className={styles.reviewControls}>
          <PaginationOption
            reviewsPerPage={reviewsPerPage}
            setReviewsPerPage={setReviewsPerPage}
          />
          <FilterOption />
        </div>
        <ReviewList reviews={reviews} />
        <PaginationControl currentPage={currentPage} totalPage={totalPage} />
      </div>
    </section>
  );
}
