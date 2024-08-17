import MovieVideoItem from "../Item";
import styles from "./MovieVideoList.module.css";

export default function MovieVideoList({ movieId }: { movieId: number }) {
  return (
    <>
      <MovieVideoItem />
    </>
  );
}
