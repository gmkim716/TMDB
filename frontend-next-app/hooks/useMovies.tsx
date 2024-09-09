import { useEffect, useState } from "react";

export default function useMovie(type: string, page = 1) {
  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${type}?page?=${page}api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error("영화 데이터를 조회하는데 실패했습니다.", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [type, page]);

  return { movies };
}
