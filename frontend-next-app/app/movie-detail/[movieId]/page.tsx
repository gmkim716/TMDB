import React from "react";
import styles from "./MovieDetailPage.module.css"; // CSS 모듈 파일 import
import Review from "@/components/Review";
import { getMovieDetail } from "@/lib/api/movieApi";
import Image from "next/image";
import getReviews from "@/lib/api/reviewApi";
import ReviewPost from "@/components/Review/ReviewPost";

export default async function MovieDetailPage({
  params: { movieId },
}: {
  params: { movieId: number };
}) {
  const movie = await getMovieDetail(movieId);
  const reviews = await getReviews(movieId);

  return (
    <>
      <main>
        <section id="movie-info" className={styles.movieInfo}>
          <div className="container">
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className={styles.moviePoster}
              width={300}
              height={450}
            />
            <div className={styles.movieInfoDetails}>
              <h1>{movie.title}</h1>
              <p>
                <strong>장르:</strong>{" "}
                {movie.genres.map((genre) => genre.name).join(", ")}
              </p>
              <p>
                <strong>상영 시간:</strong> {movie.runtime}분
              </p>
              <p>
                {/* popularity */}
                <strong>인기도:</strong> {movie.popularity}
              </p>
              <p>
                <strong>개봉일:</strong> {movie.release_date}
              </p>
              <p>
                <strong>평점:</strong> {movie.vote_average}
              </p>
              <p>
                <strong>줄거리:</strong> {movie.overview}
              </p>
            </div>
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

        <Review reviews={reviews} />
        <ReviewPost movieId={movieId} />
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
