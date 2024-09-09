import MovieList from "@/components/MovieList";
import styles from "./MovieCollection.module.css"; // CSS 모듈 파일 import

async function getInitialMovies(type: string) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${type}?page=1`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
    },
  });

  if (!res.ok) {
    throw new Error("영화정보를 가져오는데 실패했습니다");
  }

  return res.json();
}

export default async function MovieCollectionPage() {
  const initialMovies = await getInitialMovies("popular");

  return (
    <main>
      <section id="movie-collection" className={styles.movieCollection}>
        <div className={styles.container}>
          <h2>마블 영화 컬렉션</h2>
          <MovieList initialMovies={initialMovies.results} />
        </div>
      </section>
    </main>
  );
}
