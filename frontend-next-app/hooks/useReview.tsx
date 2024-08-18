import { getReviews } from "@/lib/api/review";
import { useEffect, useState } from "react";

export default function useReview(movieId: number) {
  const [currentPage, setCurrentPage] = useState(0); // 0번재 인덱스를 보여준다
  const [reviewsPerPage, setReviewsPerPage] = useState("5"); // 기본으로 5개를 보여준다
  const [reviews, setReviews] = useState<ReviewDto[]>([]);
  const [totalPage, setTotalPage] = useState(0);

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
      console.error("리뷰 데이터를 조회하는데 실패했습니다.", error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [movieId, reviewsPerPage]);

  return {
    currentPage,
    setCurrentPage,
    reviewsPerPage,
    setReviewsPerPage,
    reviews,
    totalPage,
    fetchReviews,
  };
}
