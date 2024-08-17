import React from "react";
import styles from "./MovieDetailPage.module.css"; // CSS 모듈 파일 import
import Review from "@/components/Review";
import { getMovieDetail } from "@/lib/api/movieApi";
import getReviews from "@/lib/api/reviewApi";
import ReviewPost from "@/components/Review/ReviewPost";
import MovieInfo from "@/components/MovieInfo";
import MovieCast from "@/components/MovieCast";

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
        <MovieInfo
          title={movie.title}
          poster_path={movie.poster_path}
          genres={movie.genres}
          runtime={movie.runtime}
          popularity={movie.popularity}
          release_date={movie.release_date}
          vote_average={movie.vote_average}
          overview={movie.overview}
        />

        <MovieCast movieId={movieId} />

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
