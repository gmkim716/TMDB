async function fetchMovieDetail(movieId: number) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=${process.env.NEXT_PUBLIC_TMDB_API_LANGUAGE}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch movie detail");
  }
  const movie = await response.json();
  return movie;
}

export async function getMovieDetail(movieId: number) {
  return await fetchMovieDetail(movieId);
}
