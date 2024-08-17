const TDMB_API = process.env.NEXT_PUBLIC_TMDB_API;
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

async function fetchCredit(movieId: number) {
  const response = await fetch(`${TDMB_API}/movie/${movieId}/credits`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch movie credits");
  }
  const data = await response.json();
  return data;
}

export default async function getCredit(movieId: number) {
  const data = await fetchCredit(movieId);
  return data;
}
