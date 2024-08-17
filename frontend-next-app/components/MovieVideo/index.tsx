import MovieVideoList from "./List";
import styles from "./MovieVideo.module.css";

export default function MovieVideo({ movieId }: { movieId: number }) {
  return (
    <section id="youtube-videos" className={styles.youtubeVideos}>
      <div className="container">
        <h2>관련 유튜브 영상</h2>
        <MovieVideoList movieId={movieId} />
      </div>
    </section>
  );
}
