const TMDB_API = process.env.NEXT_PUBLIC_TMDB_API;
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const LANGUAGE = process.env.NEXT_PUBLIC_TMDB_API_LANGUAGE;

async function fetchMovieDetail(movieId: number) {
  const response = await fetch(
    `${TMDB_API}/movie/${movieId}?language=${LANGUAGE}`,
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("영화 정보를 불러오는데 실패했습니다.");
  }
  const movie = await response.json();
  return movie;
}

export async function getMovieDetail(movieId: number) {
  return await fetchMovieDetail(movieId);
}
