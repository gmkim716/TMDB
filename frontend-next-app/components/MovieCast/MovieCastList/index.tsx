import getCredit from "@/lib/api/creditApi";
import MovieCastItem from "../MovieCastItem";
import styles from "./MovieCastList.module.css";

export default async function MovieCastList({ movieId }: { movieId: number }) {
  const credits = await getCredit(movieId);

  return (
    <div className={styles.castList}>
      {credits.cast.map((cast: Cast) => (
        <MovieCastItem
          key={cast.id}
          known_for_department={cast.known_for_department}
          name={cast.name}
          profile_path={cast.profile_path}
          character={cast.character}
        />
      ))}
    </div>
  );
}
