import React from "react";
import { getMovieDetail } from "@/lib/api/movieApi";
import MovieInfo from "@/components/MovieInfo";
import MovieCast from "@/components/MovieCast";
import Review from "@/components/MovieReview";
import ReviewWriteForm from "@/components/MovieReview/ReviewWriteForm";
import MovieVideo from "@/components/MovieVideo";
import { getReviews } from "@/lib/api/review";

export default async function MovieDetailPage({
  params: { movieId },
}: {
  params: { movieId: number };
}) {
  const movie = await getMovieDetail(movieId);
  const initialReview = await getReviews(movieId, 0, 5);

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
      <MovieCast movieId={movieId} />
      <MovieVideo movieId={movieId} />
      <Review
        movieId={movieId}
        initialReviews={initialReview.content}
        initialTotalPages={initialReview.totalPages}
      />
      <ReviewWriteForm movieId={movieId} />
    </main>
  );
}
