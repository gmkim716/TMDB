import React from "react";
import styles from "./MovieDetailPage.module.css"; // CSS 모듈 파일 import
import Header from "@/components/ui/Header";
import ReviewPost from "@/components/ui/ReviewPost";

export default function MovieDetailPage() {
  return (
    <>
      <Header />
      <main>
        <section id="movie-info" className={styles.movieInfo}>
          <div className={styles.container}>
            {/* 영화 상세 정보가 여기에 로드됩니다 */}
          </div>
        </section>

        <section id="cast" className={styles.cast}>
          <div className={styles.container}>
            <h2>출연진</h2>
            <div id="cast-list">{/* 출연진 목록이 여기에 로드됩니다 */}</div>
          </div>
        </section>

        <section id="youtube-videos" className={styles.youtubeVideos}>
          <div className={styles.container}>
            <h2>관련 유튜브 영상</h2>
            <div id="video-list">
              {/* 유튜브 영상 리스트가 여기에 로드됩니다 */}
            </div>
          </div>
        </section>

        <ReviewPost />

        <section id="add-review" className={styles.addReview}>
          <div className={styles.container}>
            <h2>리뷰 작성하기</h2>
            <form id="review-form">
              <label htmlFor="review-title">제목:</label>
              <input
                type="text"
                id="review-title"
                name="title"
                placeholder="리뷰 제목 (선택 사항)"
              />
              <label htmlFor="review-rating">평점:</label>
              <select id="review-rating" name="rating" required>
                <option value="5">5점</option>
                <option value="4">4점</option>
                <option value="3">3점</option>
                <option value="2">2점</option>
                <option value="1">1점</option>
              </select>
              <label htmlFor="review-text">리뷰:</label>
              <textarea
                id="review-text"
                name="text"
                rows={4}
                required
              ></textarea>
              <button type="submit">리뷰 남기기</button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

// function setReviewsPerPage() {
//   // 여기에 로직을 추가하세요
// }

// function filterReviews(rating: number | string) {
//   // 여기에 로직을 추가하세요
// }

// function toggleComments() {
//   // 여기에 로직을 추가하세요
// }

// function prevPage() {
//   // 여기에 로직을 추가하세요
// }

// function nextPage() {
//   // 여기에 로직을 추가하세요
// }
