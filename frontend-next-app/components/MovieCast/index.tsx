import styles from "./MovieCast.module.css";
import MovieCastList from "./List";

interface MovieCastProps {
  movieId: number;
}

export default function MovieCast({ movieId }: MovieCastProps) {
  return (
    <section id="cast" className={styles.cast}>
      <div className="container">
        <h2>출연진</h2>
        <MovieCastList movieId={movieId} />
      </div>
    </section>
  );
}
