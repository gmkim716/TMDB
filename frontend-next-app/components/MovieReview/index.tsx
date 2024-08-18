"use client";

import styles from "./Review.module.css";
import ReviewList from "./ReviewList";
import PaginationOption from "./ReviewDisplayOption";
import FilterOption from "./ReviewFilterOption";
import PaginationControl from "./ReviewPaginationControl";
import { useEffect, useState } from "react";
import { getReviews } from "@/lib/api/review";

interface ReviewProps {
  movieId: number;
  initialReviews: ReviewDto[];
  initialTotalPages: number;
}

export default function Review({
  movieId,
  initialReviews,
  initialTotalPages,
}: ReviewProps) {
  const [currentPage, setCurrentPage] = useState(0); // 0번재 인덱스를 보여준다
  const [reviewsPerPage, setReviewsPerPage] = useState("5"); // 기본으로 5개를 보여준다
  const [reviews, setReviews] = useState(initialReviews);
  const [totalPage, setTotalPage] = useState(initialTotalPages);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviews = await getReviews(
          movieId,
          currentPage,
          parseInt(reviewsPerPage)
        );
        setReviews(reviews.content);
        setTotalPage(reviews.totalPages);
      } catch (error) {
        console.error("리뷰 데이터를 조회하는데 싪패했습니다.", error);
      }
    };
    fetchReviews();
  }, [movieId, currentPage, reviewsPerPage]);

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
