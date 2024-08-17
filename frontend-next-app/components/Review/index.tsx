import styles from "./Review.module.css";
import ReviewList from "./ReviewList";

export default function Review({ reviews }: { reviews: Review[] }) {
  return (
    <section id="reviews" className={styles.reviews}>
      <div className="container">
        <h2>관객 리뷰</h2>
        <div className={styles.reviewControls}>
          <div className={styles.paginationOptions}>
            <label htmlFor="reviewsPerPage">보기:</label>
            {/* <select id="reviewsPerPage" onchange="setReviewsPerPage()"> */}
            <select id="reviewsPerPage">
              <option value="5">5개</option>
              <option value="10">10개</option>
              <option value="20">20개</option>
              <option value="30">30개</option>
            </select>
          </div>
          <div className={styles.filterOptions}>
            <button
              className={`${styles.filterButton} active`}
              // onClick={() => filterReviews('all')}
            >
              전체
            </button>
            {/* <button className="filterButton" onclick="filterReviews(5)">
                5점
              </button>
              <button className="filterButton" onclick="filterReviews(4)">
                4점
              </button>
              <button className="filterButton" onclick="filterReviews(3)">
                3점
              </button>
              <button className="filterButton" onclick="filterReviews(2)">
                2점
              </button>
              <button className="filterButton" onclick="filterReviews(1)">
                1점
              </button> */}
          </div>
        </div>

        <ReviewList reviews={reviews} />

        <div className={styles.paginationControls}>
          {/* <button id="prev-page" onclick="prevPage()">
            이전
          </button> */}
          <span id="current-page">1</span> / <span id="total-pages">1</span>
          {/* <button id="next-page" onclick="nextPage()">
            다음
          </button> */}
        </div>
      </div>
    </section>
  );
}
