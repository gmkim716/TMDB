import styles from "./MovieInfo.module.css";
import Image from "next/image";

interface MovieInfoProps {
  title: string;
  poster_path: string;
  genres: { name: string }[];
  runtime: number;
  popularity: number;
  release_date: string;
  vote_average: number;
  overview: string;
}

export default function MovieInfo({
  title,
  poster_path,
  genres,
  runtime,
  popularity,
  release_date,
  vote_average,
  overview,
}: MovieInfoProps) {
  return (
    <>
      <section id="movie-info" className={styles.movieInfo}>
        <div className={`container ${styles.movieContent}`}>
          <Image
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
            className={styles.moviePoster}
            width={300}
            height={450}
          />
          <div className={styles.movieInfoDetails}>
            <h1>{title}</h1>
            <p>
              <strong>장르:</strong>{" "}
              {genres.map((genre) => genre.name).join(", ")}
            </p>
            <p>
              <strong>상영 시간:</strong> {runtime}분
            </p>
            <p>
              <strong>인기도:</strong> {popularity}
            </p>
            <p>
              <strong>개봉일:</strong> {release_date}
            </p>
            <p>
              <strong>평점:</strong> {vote_average}
            </p>
            <p>
              <strong>줄거리:</strong> {overview}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
