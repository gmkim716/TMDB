import React from "react";
import MovieInfo from "@/components/MovieInfo";
import MovieCast from "@/components/MovieCast";
import Review from "@/components/MovieReview";
import MovieVideo from "@/components/MovieVideo";
import { getReviews } from "@/lib/api/review";
import { getMovieDetail } from "@/lib/api/movie";
import ReviewWriteForm from "@/components/MovieReview/ReviewWriteForm";

export default async function MovieDetailPage({
  params: { movieId },
}: {
  params: { movieId: string }; // info. number로 설정하더라도 동적 라우팅 경로에 의해 string으로 처리될 가능성이 있습니다. 예기치 않은 동작을 피하기 위해 string으로 선언하고 관리합니다.
}) {
  const movieIdInt = parseInt(movieId);
  const movie = await getMovieDetail(movieIdInt);
  const reviews = await getReviews(movieIdInt, 0, 5);

  return (
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
      <MovieCast movieId={movieIdInt} />
      <MovieVideo movieId={movieIdInt} />
      <Review movieId={movieIdInt} />
      <ReviewWriteForm movieId={movieIdInt} />
    </main>
  );
}
