import styles from "./Review.module.css";

export default function Review({ movieId }: { movieId: number }) {
  const reviews = getReviews(movieId);

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
        <div id="review-list">
          <div className={styles.reviewItem}>
            <div className={styles.reviewHeader}>
              <div className={styles.userInfo}>
                {/* <Image
                  src="/user-profile.jpg"
                  alt="User Profile"
                  width={300}
                  height={300}
                /> */}
                <p>Username</p>
              </div>
              <div className={styles.reviewActions}>
                <button>수정</button>
                <button>삭제</button>
              </div>
            </div>

            <div className={styles.reviewBody}>
              <h3>리뷰 제목</h3>
              <p>리뷰 내용</p>
            </div>

            <div className={styles.reviewFooter}>
              <button
                className={styles.toggleComments}
                // onclick="toggleComments(this)"
              >
                댓글 보기
              </button>
              <div className={styles.likesDislikes}>
                <button>좋아요</button>
                <span>15</span>
                <button>싫어요</button>
                <span>3</span>
              </div>
            </div>

            <div className={styles.commentsSection}>
              <div className={styles.comment}>
                <p>
                  <strong>사용자1:</strong> 댓글 내용 1
                </p>
              </div>
              <div className={styles.comment}>
                <p>
                  <strong>사용자2:</strong> 댓글 내용 2
                </p>
              </div>
              <form className={styles.addCommentForm}>
                <label htmlFor="new-comment">댓글 남기기:</label>
                <textarea
                  id="new-comment"
                  rows={2}
                  placeholder="댓글을 입력하세요..."
                />
                <button type="submit">댓글 남기기</button>
              </form>
            </div>
          </div>
        </div>
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
