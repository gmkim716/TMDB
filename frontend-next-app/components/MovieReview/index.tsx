"use client";

import styles from "./Review.module.css";
import ReviewList from "./ReviewList";
import PaginationOption from "./ReviewDisplayOption";
import FilterOption from "./ReviewFilterOption";
import PaginationControl from "./ReviewPaginationControl";
import getReviews from "@/lib/api/reviewApi";
import { useEffect, useState } from "react";

interface ReviewProps {
  movieId: number;
  initialReviews: Review[];
  initialTotalPages: number;
}

export default function Review({
  movieId,
  initialReviews,
  initialTotalPages,
}: ReviewProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [reviewsPerPage, setReviewsPerPage] = useState("5");
  const [reviews, setReviews] = useState(initialReviews);
  const [totalPage, setTotalPage] = useState(initialTotalPages);

  useEffect(() => {
    const fetchReviews = async () => {
      // setLoading(true);
      try {
        const reviews = await getReviews(
          movieId,
          currentPage,
          parseInt(reviewsPerPage)
        );

        console.log("reviews", reviews);
        setReviews(reviews.content);
        setTotalPage(reviews.total_pages);
      } catch (error) {
        console.error("리뷰 데이터를 조회하는데 싪패했습니다.", error);
        // } finally {
        // setLoading(false);
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

// getServerSideProps 함수에서 초기 데이터와 총 페이지 수를 가져온다.
export async function getServerSideProps(context: any) {
  const movieId = context.params.movieId;
  const initailReviews = await getReviews(parseInt(movieId), 0, 5);
  const initialTotalPages = initailReviews.total_pages;

  return {
    props: {
      movieId: parseInt(movieId),
      initailReviews: initailReviews.content,
      initialTotalPages,
    },
  };
}
