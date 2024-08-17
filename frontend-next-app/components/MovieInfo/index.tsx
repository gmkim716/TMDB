import styles from "./MovieInfo.module.css";
import Image from "next/image";

export default function MovieInfo({ movie }: { movie: Movie }) {
  return (
    <>
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
    </>
  );
}
